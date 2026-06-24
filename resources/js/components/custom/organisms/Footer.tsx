import { contactLinks, env } from '@/lib/env';
import {
    ArrowUp,
    Code2,
    Facebook,
    Github,
    Heart,
    Instagram,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const { contact, footer, socials } = env;

    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: 'Home', id: 'home' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'project' },
        { label: 'Skills', id: 'skills' },
        { label: 'Awards', id: 'awards' },
        { label: 'Education', id: 'education' },
        { label: 'Contact', id: 'contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', icon: Github, href: socials.githubUrl },
        { name: 'Instagram', icon: Instagram, href: socials.instagramUrl },
        { name: 'Facebook', icon: Facebook, href: socials.facebookUrl },
    ];

    const contactSnippet = [
        { icon: Mail, text: contact.email, href: contactLinks.emailHref },
        { icon: Phone, text: contact.phone, href: contactLinks.phoneHref },
        { icon: MapPin, text: contact.location, href: null },
    ];

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    // If the section exists on the current page, smooth-scroll to it.
    // Otherwise redirect to the homepage with the hash so it works from any page.
    const navigateToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.location.href = `/#${id}`;
        }
    };

    return (
        <footer className="relative mt-10 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -right-24 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl" />
                <div
                    className="absolute -bottom-24 -left-24 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="relative">
                {/* Top accent line */}
                <div className="h-0.5 w-full bg-gradient-to-r from-primary via-blue-500/70 to-primary" />

                <div className="mx-auto max-w-5xl px-6 py-12">
                    <div
                        className={`grid gap-10 transition-all duration-700 md:grid-cols-3 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    >
                        {/* Col 1 — Brand + socials */}
                        <div
                            className="space-y-5 transition-all duration-700"
                            style={{ transitionDelay: '100ms' }}
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src="/assets/icon.png"
                                    alt={`${footer.brandName} icon`}
                                    className="h-10 w-10 shrink-0 rounded-md bg-gray-500 object-contain"
                                />
                                <div>
                                    <h3 className="leading-tight font-bold text-white">
                                        {footer.brandName}
                                    </h3>
                                    <p className="text-xs text-gray-300">
                                        {footer.brandTitle}
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed text-gray-300">
                                {footer.brandDescription}
                            </p>

                            <div className="flex items-center gap-2">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.name}
                                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-700 bg-gray-800/80 text-gray-300 transition-all duration-200 hover:scale-105 hover:border-primary/50 hover:bg-gray-700 hover:text-primary"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    );
                                })}
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-gray-300">
                                <Code2 className="h-3.5 w-3.5 text-primary/60" />
                                <span>{footer.builtWith}</span>
                            </div>
                        </div>

                        {/* Col 2 — Quick links */}
                        <div
                            className="space-y-4 transition-all duration-700"
                            style={{ transitionDelay: '200ms' }}
                        >
                            <h4 className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                                Navigation
                            </h4>
                            <ul className="space-y-1.5">
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() =>
                                                navigateToSection(link.id)
                                            }
                                            onMouseEnter={() =>
                                                setHoveredLink(link.id)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredLink(null)
                                            }
                                            className="group flex items-center gap-2.5 text-sm text-gray-300 transition-all duration-200 hover:text-primary"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={`inline-flex shrink-0 justify-center text-primary transition-all duration-200 ${
                                                    hoveredLink === link.id
                                                        ? 'w-5'
                                                        : 'w-3'
                                                }`}
                                            >
                                                -
                                            </span>
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3 — Contact */}
                        <div
                            className="space-y-4 transition-all duration-700"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <h4 className="text-xs font-semibold tracking-widest text-gray-300 uppercase">
                                Get In Touch
                            </h4>
                            <ul className="space-y-3">
                                {contactSnippet.map((item, index) => {
                                    const Icon = item.icon;
                                    const inner = (
                                        <div className="group flex items-start gap-3 text-sm text-gray-300 transition-colors duration-200 hover:text-primary">
                                            <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gray-800 transition-all duration-200 group-hover:bg-primary/20">
                                                <Icon className="h-3.5 w-3.5" />
                                            </div>
                                            <span className="flex-1 leading-relaxed">
                                                {item.text}
                                            </span>
                                        </div>
                                    );
                                    return (
                                        <li key={index}>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="block"
                                                >
                                                    {inner}
                                                </a>
                                            ) : (
                                                inner
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-800/60 bg-green-900/30 px-3 py-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                                </span>
                                <span className="text-xs font-medium text-green-400">
                                    {footer.availabilityText}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div
                        className={`my-8 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent transition-all duration-700 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    />

                    {/* Bottom bar */}
                    <div
                        className={`flex flex-col items-center justify-between gap-3 text-xs text-gray-400 transition-all duration-700 md:flex-row ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <p>
                            © {currentYear} {footer.brandName}. All rights
                            reserved.
                        </p>
                        <p className="flex items-center gap-1.5">
                            Made with
                            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
                            in {footer.madeIn}
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll to top */}
            <button
                onClick={scrollToTop}
                className={`fixed right-8 bottom-8 z-50 transition-all duration-300 ${
                    showScrollTop
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-16 opacity-0'
                }`}
                title="Back to top"
            >
                <div className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 shadow-lg transition-all duration-200 hover:scale-110 hover:border-primary/60 hover:bg-gray-700">
                    <ArrowUp className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-primary" />
                </div>
            </button>
        </footer>
    );
}
