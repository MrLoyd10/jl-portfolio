import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Check,
    CheckCircle2,
    Clock,
    Copy,
    Globe,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    Sparkles,
    Star,
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
            icon: <Mail className="w-5 h-5" />,
            label: 'Email',
            value: 'purnankjadhav195@gmail.com',
            copyable: true,
            href: 'mailto:purnankjadhav195@gmail.com',
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: 'Phone',
            value: '+91 9099987195',
            copyable: true,
            href: 'tel:+919099987195',
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: 'Location',
            value: 'CMR University, Bangalore, India',
            copyable: false,
        },
    ];

    const quickStats = [
        {
            icon: <Clock className="w-5 h-5" />,
            label: 'Response Time',
            value: '< 24 hours',
            color: 'from-primary to-blue-500',
        },
        {
            icon: <Globe className="w-5 h-5" />,
            label: 'Time Zone',
            value: 'IST (GMT+5:30)',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: <Star className="w-5 h-5" />,
            label: 'Availability',
            value: 'Open to Work',
            color: 'from-green-500 to-green-600',
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
            className="relative bg-gradient-to-b from-white to-gray-50 px-6 py-16 w-full"
        >
            {/* Enhanced Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="top-1/4 -right-32 absolute bg-blue-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse" />
                <div
                    className="bottom-1/4 -left-32 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96 animate-pulse"
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
                        subtitle="Have a project in mind? Let's discuss how we can work together"
                        icon={MessageSquare}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="gap-8 grid lg:grid-cols-5">
                    {/* Contact Information - 2 columns */}
                    <div
                        className={`space-y-6 transition-all duration-700 lg:col-span-2 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <div className="space-y-1">
                            <h3 className="flex items-center gap-2 font-bold text-gray-900 text-xl">
                                <div className="bg-primary/10 p-2 rounded-lg">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                </div>
                                Contact Information
                            </h3>
                            <p className="text-gray-600">
                                Choose your preferred way to reach out
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="flex flex-col space-y-2">
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
                        <div className="group relative bg-white shadow-lg hover:shadow-xl p-6 border-2 border-gray-200 hover:border-primary/30 rounded-2xl transition-all duration-500 overflow-hidden">
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Top accent bar */}
                            <div className="top-0 right-0 left-0 absolute bg-gradient-to-r from-primary to-blue-500 h-0.5" />

                            <div className="relative">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative flex-shrink-0">
                                        {/* Pulsing rings */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 opacity-10 rounded-lg animate-ping" />
                                        <div className="relative flex justify-center items-center bg-gradient-to-br from-primary to-blue-500 shadow-lg rounded-xl w-14 h-14 text-white">
                                            <Sparkles className="w-7 h-7" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h4 className="font-bold text-gray-900 text-lg">
                                                Available for Opportunities
                                            </h4>
                                            <Badge className="bg-gradient-to-r from-green-500 to-green-600 shadow-sm text-white">
                                                <span className="relative flex mr-1.5 w-2 h-2">
                                                    <span className="inline-flex absolute bg-white opacity-75 rounded-full w-full h-full animate-ping" />
                                                    <span className="inline-flex relative bg-white rounded-full w-2 h-2" />
                                                </span>
                                                Open
                                            </Badge>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            I'm currently open to freelance
                                            projects, full-time positions, and
                                            exciting collaborations. Let's build
                                            something amazing together!
                                        </p>
                                    </div>
                                </div>

                                {/* Interest Tags */}
                                <div className="flex flex-wrap gap-2 pt-4 border-gray-200 border-t">
                                    {[
                                        'Web Development',
                                        'AI/ML Projects',
                                        'Open Source',
                                    ].map((tag, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="bg-primary/5 hover:bg-primary/10 border-primary/30 text-primary transition-all duration-300 hover:scale-105"
                                        >
                                            <Zap className="mr-1 w-3 h-3" />
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - 3 columns */}
                    <div
                        className={`transition-all duration-700 lg:col-span-3 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <div className="space-y-1 mb-6">
                            <h3 className="flex items-center gap-2 font-bold text-gray-900 text-xl">
                                <div className="bg-blue-500/10 p-2 rounded-lg">
                                    <Send className="w-4 h-4 text-blue-600" />
                                </div>
                                Send a Message
                            </h3>
                            <p className="text-gray-600">
                                Fill out the form below and I'll get back to you
                                within 24 hours
                            </p>
                        </div>

                        <div className="relative bg-white shadow-lg hover:shadow-xl border-2 border-gray-200 hover:border-primary/30 rounded-2xl transition-all duration-500 overflow-hidden">
                            <div className="space-y-5 p-6">
                                {/* Name & Email Row */}
                                <div className="gap-4 grid sm:grid-cols-2">
                                    {/* Name Input */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="flex items-center gap-2 mb-2 font-bold text-gray-700 text-sm"
                                        >
                                            Your Name
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
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
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                                placeholder="John Doe"
                                                className="bg-gray-50 focus:bg-white focus:shadow-lg px-4 py-3 border-2 border-gray-200 focus:border-primary rounded-xl w-full text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none"
                                            />
                                            <div
                                                className={`absolute -bottom-0 left-1.5 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                    focusedField === 'name'
                                                        ? 'w-[calc(100%-12px)]'
                                                        : 'w-0'
                                                }`}
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="flex items-center gap-2 mb-2 font-bold text-gray-700 text-sm"
                                        >
                                            Your Email
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
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
                                                onBlur={() =>
                                                    setFocusedField(null)
                                                }
                                                placeholder="john@example.com"
                                                className="bg-gray-50 focus:bg-white focus:shadow-lg px-4 py-3 border-2 border-gray-200 focus:border-primary rounded-xl w-full text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none"
                                            />
                                            <div
                                                className={`absolute -bottom-0 left-1.5 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                    focusedField === 'email'
                                                        ? 'w-[calc(100%-12px)]'
                                                        : 'w-0'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="flex items-center gap-2 mb-2 font-bold text-gray-700 text-sm"
                                    >
                                        Subject
                                        <Badge
                                            variant="outline"
                                            className="border-gray-300 text-gray-600 text-xs"
                                        >
                                            Optional
                                        </Badge>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={(e) =>
                                                handleChange(
                                                    'subject',
                                                    e.target.value,
                                                )
                                            }
                                            onFocus={() =>
                                                setFocusedField('subject')
                                            }
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Project inquiry, Collaboration, etc."
                                            className="bg-gray-50 focus:bg-white focus:shadow-lg px-4 py-3 border-2 border-gray-200 focus:border-primary rounded-xl w-full text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:outline-none"
                                        />
                                        <div
                                            className={`absolute -bottom-0 left-1.5 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                focusedField === 'subject'
                                                    ? 'w-[calc(100%-12px)]'
                                                    : 'w-0'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="flex justify-between items-center mb-2 font-bold text-gray-700 text-sm"
                                    >
                                        <span className="flex items-center gap-2">
                                            Your Message
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </span>
                                        <span className="font-normal text-gray-500 text-xs">
                                            {charCount}/500
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <textarea
                                            id="message"
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
                                            placeholder="Tell me about your project, ideas, or how we can collaborate..."
                                            rows={6}
                                            maxLength={500}
                                            className="bg-gray-50 focus:bg-white focus:shadow-lg px-4 py-3 border-2 border-gray-200 focus:border-primary rounded-xl w-full text-gray-900 placeholder:text-gray-400 transition-all duration-300 resize-none focus:outline-none"
                                        />
                                        <div
                                            className={`absolute -bottom-0 left-1.5 h-1 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 ${
                                                focusedField === 'message'
                                                    ? 'w-[calc(100%-12px)]'
                                                    : 'w-0'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting || submitSuccess}
                                    className="px-6 py-2 w-full h-10 font-medium text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="mr-2 border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : submitSuccess ? (
                                        <>
                                            <CheckCircle2 className="mr-2 w-4 h-4" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
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
            className="group relative bg-white shadow-md hover:shadow-xl p-4 border-2 border-gray-200 hover:border-primary/30 rounded-xl transition-all hover:-translate-y-1 duration-300 cursor-pointer overflow-hidden"
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
                <div className="flex-1 min-w-0">
                    <p className="mb-0.5 font-semibold text-gray-500 text-xs uppercase tracking-wide">
                        {label}
                    </p>
                    <p className="font-bold text-gray-900 text-sm group-hover:text-primary break-words transition-colors duration-300">
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
                            <Check className="w-4 h-4" />
                        ) : (
                            <Copy className="w-4 h-4" />
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
