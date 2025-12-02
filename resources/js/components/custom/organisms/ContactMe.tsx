import { Button } from '@/components/ui/button';
import {
    Check,
    CheckCircle2,
    Copy,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Sparkles,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface ContactInfoProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    copyable?: boolean;
}

export function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const contactInfo: ContactInfoProps[] = [
        {
            icon: <Mail className="h-6 w-6" />,
            label: 'Email',
            value: 'purnankjadhav195@gmail.com',
            copyable: true,
        },
        {
            icon: <Phone className="h-6 w-6" />,
            label: 'Phone',
            value: '+91 9099987195',
            copyable: true,
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            label: 'Location',
            value: 'CMR University, Banglore, India',
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
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setSubmitSuccess(false);
        }, 3000);
    };

    const handleChange = (name: string, value: string) => {
        setFormData({
            ...formData,
            [name]: value,
        });
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
            className="relative w-full px-6 py-16"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-6xl">
                {/* Section Header */}
                <div
                    className={`mb-12 transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-12"
                        title="Get In Touch"
                        subtitle="Let's connect and discuss opportunities"
                        icon={MessageSquare}
                    />
                </div>

                {/* Content Grid */}
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {/* Contact Information */}
                    <div
                        className={`space-y-6 transition-all duration-700 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                                Contact Information
                            </h3>
                            <p className="text-gray-600">
                                Feel free to reach out through any of these
                                channels
                            </p>
                        </div>

                        <div className="space-y-4">
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

                        {/* Decorative Card */}
                        <div className="group relative mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 p-6 shadow-md transition-all duration-500 hover:shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="relative flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-500 text-white shadow-lg">
                                    <Sparkles className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="mb-1 font-semibold text-gray-900">
                                        Available for opportunities
                                    </h4>
                                    <p className="text-sm leading-relaxed text-gray-600">
                                        I'm currently open to freelance projects
                                        and full-time positions. Let's build
                                        something amazing together!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={`space-y-6 transition-all duration-700 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                                Send Me a Message
                            </h3>
                            <p className="text-gray-600">
                                I'll get back to you as soon as possible
                            </p>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-lg transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100" />

                            <div className="relative space-y-5">
                                {/* Name Input */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                handleChange(
                                                    'name',
                                                    e.target.value,
                                                )
                                            }
                                            onFocus={() =>
                                                setFocusedField('name')
                                            }
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="John Doe"
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 focus:outline-none"
                                        />
                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                focusedField === 'name'
                                                    ? 'w-full'
                                                    : 'w-0'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                handleChange(
                                                    'email',
                                                    e.target.value,
                                                )
                                            }
                                            onFocus={() =>
                                                setFocusedField('email')
                                            }
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="john@example.com"
                                            className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 focus:outline-none"
                                        />
                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                focusedField === 'email'
                                                    ? 'w-full'
                                                    : 'w-0'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-gray-700"
                                    >
                                        Your Message
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={(e) =>
                                                handleChange(
                                                    'message',
                                                    e.target.value,
                                                )
                                            }
                                            onFocus={() =>
                                                setFocusedField('message')
                                            }
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Tell me about your project..."
                                            rows={5}
                                            className="w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 transition-all duration-300 placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 focus:outline-none"
                                        />
                                        <div
                                            className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                focusedField === 'message'
                                                    ? 'w-full'
                                                    : 'w-0'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting || submitSuccess}
                                    className={`group relative w-full overflow-hidden rounded-lg py-6 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl active:scale-95 ${
                                        submitSuccess
                                            ? 'bg-green-500 hover:bg-green-500'
                                            : 'bg-gradient-to-r from-primary via-blue-500 to-purple-500 hover:from-primary/90 hover:via-blue-500/90 hover:to-purple-500/90'
                                    }`}
                                >
                                    {/* Button Background Animation */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                                    <span className="relative flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                                Sending...
                                            </>
                                        ) : submitSuccess ? (
                                            <>
                                                <CheckCircle2 className="h-5 w-5" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                                Send Message
                                            </>
                                        )}
                                    </span>
                                </Button>
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
    index,
    onCopy,
    isCopied,
}: ContactInfoProps & {
    index: number;
    onCopy: (text: string, index: number) => void;
    isCopied: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const iconColors = [
        { bg: 'from-blue-500 to-blue-600', text: 'text-blue-500' },
        { bg: 'from-green-500 to-green-600', text: 'text-green-500' },
        { bg: 'from-purple-500 to-purple-600', text: 'text-purple-500' },
    ];

    const color = iconColors[index % iconColors.length];

    return (
        <div
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow Effect */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${color.bg} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10`}
            />

            <div className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-white shadow-lg transition-all duration-300 ${
                            isHovered ? 'scale-110 rotate-6' : ''
                        }`}
                    >
                        {icon}
                    </div>
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                    <p className="mb-1 text-sm font-medium text-gray-600">
                        {label}
                    </p>
                    <p className="text-base font-semibold break-words text-gray-900">
                        {value}
                    </p>
                </div>

                {/* Copy Button */}
                {copyable && (
                    <button
                        onClick={() => onCopy(value, index)}
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                            isCopied
                                ? 'bg-green-100 text-green-600'
                                : 'bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary'
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

            {/* Progress Bar */}
            <div className="relative mt-3 h-0.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${color.bg} transition-all duration-500 ${
                        isHovered ? 'w-full' : 'w-0'
                    }`}
                />
            </div>
        </div>
    );
};
