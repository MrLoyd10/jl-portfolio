import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'project', label: 'Project' },
        { id: 'skills', label: 'Skills' },
        { id: 'awards', label: 'Awards' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    // Track scroll position for header background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => ({
                id: item.id,
                element: document.getElementById(item.id),
            }));

            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (
                    section.element &&
                    section.element.offsetTop <= scrollPosition
                ) {
                    setActiveSection(section.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'MrLoyd_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <header
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'border-b border-gray-200 bg-white/80 shadow-md backdrop-blur-md'
                        : 'border-b border-transparent bg-white'
                }`}
            >
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left: Logo */}
                        <div
                            className="group flex cursor-pointer items-center gap-3"
                            onClick={() => scrollToSection('home')}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                                <span className="text-lg font-bold text-white">
                                    ML
                                </span>
                            </div>
                            <span className="text-xl font-semibold text-gray-800 transition-colors group-hover:text-primary">
                                MrLoyd
                            </span>
                        </div>

                        {/* Center: Navigation (Desktop) */}
                        <nav className="hidden items-center gap-1 lg:flex">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'text-primary'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 animate-pulse rounded-full bg-primary" />
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Right: Resume Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-3">
                            <Button
                                onClick={handleDownloadResume}
                                className="transition-all duration-300 hover:scale-105 active:scale-95"
                            >
                                <Download className="h-4 w-4 lg:mr-2" />
                                <span className="hidden lg:inline">Resume</span>
                            </Button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="rounded-md p-2 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 lg:hidden"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6 rotate-90 transition-transform duration-300" />
                                ) : (
                                    <Menu className="h-6 w-6 transition-transform duration-300" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div
                    className={`overflow-hidden border-t border-gray-200 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out lg:hidden ${
                        isMenuOpen
                            ? 'max-h-96 opacity-100'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <nav className="container mx-auto px-6 py-4">
                        <div className="flex flex-col gap-1">
                            {navItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative rounded-md px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-gray-600 hover:bg-primary/5 hover:text-gray-900'
                                    }`}
                                    style={{
                                        transitionDelay: isMenuOpen
                                            ? `${index * 50}ms`
                                            : '0ms',
                                    }}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <span className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
            </header>

            {/* Backdrop overlay when menu is open */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
                    isMenuOpen
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />
        </>
    );
};
