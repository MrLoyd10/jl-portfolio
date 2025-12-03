import {
    ArrowUp,
    Code2,
    Facebook,
    Github,
    Heart,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/yourusername',
            color: 'hover:text-gray-900',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/yourusername',
            color: 'hover:text-blue-600',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: 'https://twitter.com/yourusername',
            color: 'hover:text-blue-400',
        },
        {
            name: 'Facebook',
            icon: Facebook,
            href: 'https://facebook.com/yourusername',
            color: 'hover:text-blue-600',
        },
        {
            name: 'Instagram',
            icon: Instagram,
            href: 'https://instagram.com/yourusername',
            color: 'hover:text-pink-600',
        },
    ];

    const contactInfo = [
        {
            icon: Mail,
            text: 'your.email@example.com',
            href: 'mailto:your.email@example.com',
        },
        {
            icon: Phone,
            text: '+63 123 456 7890',
            href: 'tel:+631234567890',
        },
        {
            icon: MapPin,
            text: 'Quezon City, Metro Manila, PH',
            href: null,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="-top-24 -right-24 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96 animate-pulse" />
                <div
                    className="-bottom-24 -left-24 absolute bg-blue-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
            </div>

            <div className="relative">
                {/* Top decorative line */}
                <div className="bg-gradient-to-r from-primary via-blue-500 to-primary w-full h-1" />

                <div className="mx-auto px-6 py-12 container">
                    {/* Main Footer Content */}
                    <div
                        className={`grid gap-12 transition-all duration-700 md:grid-cols-2 lg:grid-cols-4 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                    >
                        {/* Brand Section */}
                        <div
                            className="space-y-4 transition-all duration-700"
                            style={{ transitionDelay: '100ms' }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex justify-center items-center bg-gradient-to-br from-primary to-primary/50 shadow-lg rounded-full w-12 h-12">
                                    <span className="font-bold text-white text-xl">
                                        ML
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">
                                        MrLoyd
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Web Developer
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Crafting exceptional digital experiences with
                                modern web technologies. Passionate about clean
                                code and innovative solutions.
                            </p>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <Code2 className="w-4 h-4 text-primary" />
                                <span>
                                    Built with React, TailwindCSS & Shadcn
                                </span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div
                            className="space-y-4 transition-all duration-700"
                            style={{ transitionDelay: '200ms' }}
                        >
                            <h3 className="font-bold text-lg">Quick Links</h3>
                            <ul className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <li key={link.id}>
                                        <button
                                            onClick={() =>
                                                scrollToSection(link.id)
                                            }
                                            className="group flex items-center gap-2 text-gray-400 text-sm hover:text-primary transition-all hover:translate-x-2 duration-300"
                                        >
                                            <span className="bg-gray-600 group-hover:bg-primary rounded-full w-1 group-hover:w-2 h-1 transition-all duration-300" />
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div
                            className="space-y-4 transition-all duration-700"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <h3 className="font-bold text-lg">Get In Touch</h3>
                            <ul className="space-y-3">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;
                                    const content = (
                                        <div className="group flex items-start gap-3 text-gray-400 text-sm hover:text-primary transition-all duration-300">
                                            <div className="bg-gray-800 group-hover:bg-primary/20 mt-0.5 p-2 rounded-lg transition-all duration-300 group-hover:scale-110">
                                                <Icon className="w-4 h-4" />
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
                                                    {content}
                                                </a>
                                            ) : (
                                                content
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div
                            className="space-y-4 transition-all duration-700"
                            style={{ transitionDelay: '400ms' }}
                        >
                            <h3 className="font-bold text-lg">
                                Connect With Me
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Let's connect and create something amazing
                                together!
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative"
                                            title={social.name}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 opacity-0 group-hover:opacity-100 blur-md rounded-lg transition-opacity duration-300" />
                                            <div className="relative flex justify-center items-center bg-gray-800 group-hover:bg-gray-700 border border-gray-700 group-hover:border-primary rounded-lg w-10 h-10 transition-all duration-300 group-hover:scale-110">
                                                <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div
                        className={`my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent transition-all duration-700 ${
                            isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ transitionDelay: '500ms' }}
                    />

                    {/* Bottom Section */}
                    <div
                        className={`flex flex-col items-center justify-between gap-4 transition-all duration-700 md:flex-row ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '600ms' }}
                    >
                        <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4 text-gray-400 text-sm">
                            <p className="flex items-center gap-1">
                                © {currentYear} MrLoyd. All rights reserved.
                            </p>
                            <span className="md:inline hidden">•</span>
                            <p className="flex items-center gap-1.5">
                                Made with
                                <Heart className="w-4 h-4 text-red-500 animate-pulse fill-red-500" />
                                in the Philippines
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed right-8 bottom-8 z-50 transition-all duration-300 ${
                    showScrollTop
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-16 opacity-0'
                }`}
            >
                <div className="group relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 opacity-0 group-hover:opacity-100 blur-lg rounded-full transition-opacity animate-pulse duration-300" />

                    {/* Button */}
                    <div className="relative flex justify-center items-center bg-gray-800 group-hover:bg-gray-700 shadow-lg border-2 border-gray-700 group-hover:border-primary rounded-full w-12 h-12 transition-all duration-300 group-hover:scale-110">
                        <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </div>

                    {/* Tooltip */}
                    <div className="right-0 bottom-full absolute bg-gray-900 opacity-0 group-hover:opacity-100 shadow-lg mb-2 px-3 py-1.5 rounded-lg text-white text-xs whitespace-nowrap transition-opacity duration-300 pointer-events-none">
                        Back to top
                        <div className="top-full right-4 absolute border-t-4 border-t-gray-900 border-r-4 border-r-transparent border-l-4 border-l-transparent w-0 h-0" />
                    </div>
                </div>
            </button>
        </footer>
    );
}
