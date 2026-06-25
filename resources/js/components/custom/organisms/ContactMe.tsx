import { Badge } from '@/components/ui/badge';
import { contactLinks, env } from '@/lib/env';
import {
    Check,
    Copy,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Sparkles,
    Zap,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface ContactInfoProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    copyable?: boolean;
    href?: string;
}

const CONTACT_COLORS = [
    {
        dot: 'from-primary/80 to-primary',
        light: 'bg-primary/8',
        text: 'text-primary',
        border: 'hover:border-primary/30',
        bar: 'from-primary to-blue-500/70',
    },
    {
        dot: 'from-slate-500 to-slate-600',
        light: 'bg-slate-100 dark:bg-slate-800',
        text: 'text-slate-600 dark:text-slate-300',
        border: 'hover:border-slate-400',
        bar: 'from-slate-500 to-slate-600',
    },
    {
        dot: 'from-emerald-400/80 to-emerald-500/80',
        light: 'bg-emerald-50 dark:bg-emerald-900/30',
        text: 'text-emerald-600 dark:text-emerald-400',
        border: 'hover:border-emerald-200 dark:border-emerald-800',
        bar: 'from-emerald-400/70 to-emerald-500/70',
    },
] as const;

export function ContactMe() {
    const [isVisible, setIsVisible] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { contact } = env;

    const contactInfo: ContactInfoProps[] = [
        {
            icon: <Mail className="h-4 w-4" />,
            label: 'Email',
            value: contact.email,
            copyable: true,
            href: contactLinks.emailHref,
        },
        {
            icon: <Phone className="h-4 w-4" />,
            label: 'Phone',
            value: contact.phone,
            copyable: true,
            href: contactLinks.phoneHref,
        },
        {
            icon: <MapPin className="h-4 w-4" />,
            label: 'Location',
            value: contact.location,
            copyable: false,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl" />
                <div
                    className="absolute bottom-1/4 -left-32 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Header */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-10"
                        title="Let's Connect"
                        subtitle="Let's discuss opportunities, collaborations, or just say hello"
                        icon={MessageSquare}
                    />
                </div>

                {/* Two-col layout: contact cards left, availability right */}
                <div className="grid gap-5 md:grid-cols-5">
                    {/* Contact info cards — left col */}
                    <div
                        className={`flex flex-col gap-3 transition-all duration-700 md:col-span-2 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '150ms' }}
                    >
                        {contactInfo.map((info, index) => (
                            <ContactInfoItem
                                key={index}
                                {...info}
                                index={index}
                                onCopy={handleCopy}
                                isCopied={copiedIndex === index}
                                colorConfig={
                                    CONTACT_COLORS[
                                        index % CONTACT_COLORS.length
                                    ]
                                }
                            />
                        ))}
                    </div>

                    {/* Availability card — right col, hero */}
                    <div
                        className={`transition-all duration-700 md:col-span-3 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-8 opacity-0'
                        }`}
                        style={{ transitionDelay: '250ms' }}
                    >
                        <AvailabilityCard />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ─── Availability Card ──────────────────────────────────────── */
function AvailabilityCard() {
    const [hovered, setHovered] = useState(false);
    const { contact } = env;

    return (
        <div
            className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Top accent */}
            <div className="h-0.5 w-full bg-gradient-to-r from-primary to-blue-500/70" />

            {/* Subtle bg glow */}
            <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 transition-opacity duration-500 ${
                    hovered ? 'opacity-100' : 'opacity-0'
                }`}
            />

            <div className="relative flex h-full flex-col justify-between p-6">
                {/* Top section */}
                <div>
                    <div className="mb-5 flex items-start gap-4">
                        {/* Icon */}
                        <div className="relative flex-shrink-0">
                            <div
                                className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500/80 text-white shadow-md transition-all duration-300 ${
                                    hovered ? 'scale-105 rotate-3' : ''
                                }`}
                            >
                                <Sparkles className="h-5 w-5" />
                            </div>
                        </div>

                        {/* Title + badge */}
                        <div className="flex-1">
                            <div className="mb-1.5 flex flex-wrap items-center gap-2">
                                <h4 className="text-base font-bold text-gray-900 dark:text-gray-100">
                                    {contact.availabilityTitle}
                                </h4>
                                <div className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 dark:border-green-800 dark:bg-green-900/30">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                                    </span>
                                    <span className="text-[10px] font-semibold text-green-700 dark:text-green-400">
                                        {contact.availabilityStatus}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300">
                                {contact.availabilityDescription}
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="mb-4 h-px w-full bg-gray-100 dark:bg-gray-800" />

                    {/* Interest tags */}
                    <div className="flex flex-wrap gap-2">
                        {contact.interests.map((tag, idx) => (
                            <Badge
                                key={idx}
                                variant="outline"
                                className={`border-primary/20 bg-primary/5 text-xs text-primary transition-all duration-200 hover:scale-105 hover:bg-primary/10 dark:brightness-200`}
                                style={{ transitionDelay: `${idx * 40}ms` }}
                            >
                                <Zap className="mr-1 h-3 w-3" />
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA strip */}
                <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 dark:border-gray-700 dark:bg-gray-800">
                    <p className="text-center text-xs font-medium text-gray-500 transition-colors duration-300 group-hover:text-primary dark:text-gray-300">
                        {contact.responseNote}
                    </p>
                </div>
            </div>
        </div>
    );
}

/* ─── Contact Info Item ──────────────────────────────────────── */
const ContactInfoItem = ({
    icon,
    label,
    value,
    copyable = false,
    href,
    index,
    onCopy,
    isCopied,
    colorConfig,
}: ContactInfoProps & {
    index: number;
    onCopy: (text: string, index: number) => void;
    isCopied: boolean;
    colorConfig: (typeof CONTACT_COLORS)[number];
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const card = (
        <div
            className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 ${colorConfig.border}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Top bar — slides in on hover */}
            <div className="relative h-0.5 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${colorConfig.bar} transition-all duration-500 ${
                        isHovered ? 'w-full' : 'w-0'
                    }`}
                />
            </div>

            <div className="flex items-center gap-3 p-4">
                {/* Icon */}
                <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${colorConfig.dot} text-white shadow-sm transition-all duration-300 ${
                        isHovered ? 'scale-105 rotate-3' : ''
                    }`}
                >
                    {icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase dark:text-gray-400">
                        {label}
                    </p>
                    <p
                        className={`truncate text-sm font-semibold text-gray-800 transition-colors duration-200 dark:text-gray-100 ${
                            isHovered ? colorConfig.text : ''
                        }`}
                    >
                        {value}
                    </p>
                </div>

                {/* Copy button */}
                {copyable && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onCopy(value, index);
                        }}
                        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                            isCopied
                                ? 'scale-110 bg-green-100 text-green-600 dark:text-green-400'
                                : `${colorConfig.light} text-gray-400 hover:scale-110 hover:text-gray-600 dark:text-gray-300`
                        }`}
                        title="Copy to clipboard"
                    >
                        {isCopied ? (
                            <Check className="h-3.5 w-3.5" />
                        ) : (
                            <Copy className="h-3.5 w-3.5" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {card}
            </a>
        );
    }

    return card;
};
