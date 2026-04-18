import { Badge } from '@/components/ui/badge';
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

export function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [charCount, setCharCount] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    const contactInfo: ContactInfoProps[] = [
        {
            icon: <Mail className="h-5 w-5" />,
            label: 'Email',
            value: 'jl.ocoy.work@gmail.com',
            copyable: true,
            href: 'mailto:jl.ocoy.work@gmail.com',
        },
        {
            icon: <Phone className="h-5 w-5" />,
            label: 'Phone',
            value: '+63 994 696 5365',
            copyable: true,
            href: 'tel:+639946965365',
        },
        {
            icon: <MapPin className="h-5 w-5" />,
            label: 'Location',
            value: 'Sucat, Parañaque City, Philippines',
            copyable: false,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitSuccess(false);
            setCharCount(0);
        }, 3000);
    };

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'message') {
            setCharCount(value.length);
        }
    };

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative w-full bg-gradient-to-b from-white to-gray-50 px-6 py-16"
        >
            {/* Enhanced Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl" />
                <div
                    className="absolute bottom-1/4 -left-32 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <div
                    className={`mb-8 transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-8"
                        title="Let's Connect"
                        subtitle="Let's connect and discuss opportunities, collaborations, or professional connections"
                        icon={MessageSquare}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col gap-8">
                    {/* Contact Information - 2 columns */}
                    <div
                        className={`space-y-6 transition-all duration-700 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="space-y-1">
                            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                                <div className="rounded-lg bg-primary/10 p-2">
                                    <MessageSquare className="h-4 w-4 text-primary" />
                                </div>
                                Contact Information
                            </h3>
                            <p className="text-gray-600">
                                Choose your preferred way to reach out
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="grid gap-2 md:grid-cols-3">
                            {contactInfo.map((info, index) => (
                                <ContactInfoItem
                                    key={index}
                                    {...info}
                                    index={index}
                                    onCopy={handleCopy}
                                    isCopied={copiedIndex === index}
                                />
                            ))}
                        </div>

                        {/* Availability Card */}
                        <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Top accent bar */}
                            <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500" />

                            <div className="relative">
                                <div className="mb-4 flex items-start gap-4">
                                    <div className="relative flex-shrink-0">
                                        {/* Pulsing rings */}
                                        <div className="absolute inset-0 animate-ping rounded-lg bg-gradient-to-br from-primary to-blue-500 opacity-10" />
                                        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg">
                                            <Sparkles className="h-7 w-7" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-2 flex items-center gap-2">
                                            <h4 className="text-lg font-bold text-gray-900">
                                                Available for Opportunities
                                            </h4>
                                            <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm">
                                                <span className="relative mr-1.5 flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                                                </span>
                                                Open
                                            </Badge>
                                        </div>
                                        <p className="text-sm leading-relaxed text-gray-600">
                                            I'm currently open to freelance
                                            projects, full-time positions, and
                                            exciting collaborations. Let's build
                                            something amazing together!
                                        </p>
                                    </div>
                                </div>

                                {/* Interest Tags */}
                                <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-4">
                                    {[
                                        'Web Development',
                                        'Frontend',
                                        'Backend',
                                    ].map((tag, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                                        >
                                            <Zap className="mr-1 h-3 w-3" />
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ContactInfoItem = ({
    icon,
    label,
    value,
    copyable = false,
    href,
    index,
    onCopy,
    isCopied,
}: ContactInfoProps & {
    index: number;
    onCopy: (text: string, index: number) => void;
    isCopied: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const gradientColors = [
        { bg: 'from-green-500/80 to-green-600/80', light: 'bg-green-500/10' },
        {
            bg: 'from-orange-500/80 to-orange-600/80',
            light: 'bg-orange-500/10',
        },
        { bg: 'from-red-500/80 to-red-600/80', light: 'bg-red-500/10' },
    ];

    const color = gradientColors[index % gradientColors.length];

    const content = (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow Effect */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-0 blur-xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-10' : ''
                }`}
            />

            {/* Top accent line */}
            <div
                className={`absolute top-[-2px] right-0 left-0 h-1 bg-gradient-to-r ${color.bg} origin-left transform opacity-90 transition-transform duration-300 ${
                    isHovered ? 'scale-x-100' : 'scale-x-0'
                }`}
            />

            <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <div className="relative">
                        {/* Glow ring on hover */}
                        {isHovered && (
                            <div
                                className={`absolute -inset-1 animate-pulse rounded-xl bg-gradient-to-br ${color.bg} opacity-30 blur-md`}
                            />
                        )}
                        <div
                            className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-white shadow-lg transition-all duration-300 ${
                                isHovered ? 'scale-110 rotate-6' : ''
                            }`}
                        >
                            {icon}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                    <p className="mb-0.5 text-xs font-semibold tracking-wide text-gray-500 uppercase">
                        {label}
                    </p>
                    <p className="text-sm font-bold break-words text-gray-900 transition-colors duration-300 group-hover:text-primary">
                        {value}
                    </p>
                </div>

                {/* Copy Button */}
                {copyable && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onCopy(value, index);
                        }}
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                            isCopied
                                ? 'scale-110 bg-green-100 text-green-600'
                                : `${color.light} text-gray-600 hover:scale-110`
                        }`}
                        title="Copy to clipboard"
                    >
                        {isCopied ? (
                            <Check className="h-4 w-4" />
                        ) : (
                            <Copy className="h-4 w-4" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
};
