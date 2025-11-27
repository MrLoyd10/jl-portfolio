import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'project', label: 'Project' },
        { id: 'skills', label: 'Skills' },
        { id: 'awards', label: 'Awards' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

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
            <header className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Left: Logo */}
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                                <span className="text-lg font-bold text-white">
                                    ML
                                </span>
                            </div>
                            <span className="text-xl font-semibold text-gray-800">
                                MrLoyd
                            </span>
                        </div>

                        {/* Center: Navigation (Desktop) */}
                        <nav className="hidden items-center gap-1 md:flex">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Right: Resume Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-3">
                            <Button onClick={handleDownloadResume}>
                                <Download className="h-4 w-4 md:mr-2" />
                                <span className="hidden md:inline">Resume</span>
                            </Button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="border-t border-gray-200 bg-white md:hidden">
                        <nav className="container mx-auto px-6 py-4">
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="rounded-md px-4 py-3 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Backdrop overlay when menu is open */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
};
