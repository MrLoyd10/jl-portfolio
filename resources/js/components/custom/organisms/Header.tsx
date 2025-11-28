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
            <header className="top-0 right-0 left-0 z-50 fixed bg-white shadow-sm border-gray-200 border-b">
                <div className="mx-auto px-6 py-4 container">
                    <div className="flex justify-between items-center">
                        {/* Left: Logo */}
                        <div className="flex items-center gap-3">
                            <div className="flex justify-center items-center bg-gradient-to-br from-primary to-primary/50 rounded-full w-10 h-10">
                                <span className="font-bold text-lg text-white">
                                    ML
                                </span>
                            </div>
                            <span className="font-semibold text-gray-800 text-xl">
                                MrLoyd
                            </span>
                        </div>

                        {/* Center: Navigation (Desktop) */}
                        <nav className="md:flex items-center gap-1 hidden">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className="hover:bg-primary/10 px-4 py-2 rounded-md font-medium text-gray-600 text-sm hover:text-gray-900 transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Right: Resume Button & Mobile Menu Toggle */}
                        <div className="flex items-center gap-3">
                            <Button onClick={handleDownloadResume}>
                                <Download className="md:mr-2 w-4 h-4" />
                                <span className="md:inline hidden">Resume</span>
                            </Button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden hover:bg-gray-100 p-2 rounded-md text-gray-600 hover:text-gray-900"
                            >
                                {isMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-gray-200 border-t">
                        <nav className="mx-auto px-6 py-4 container">
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className="hover:bg-primary/10 px-4 py-3 rounded-md font-medium text-gray-600 text-left text-sm hover:text-gray-900 transition-colors"
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
                    className="z-40 fixed inset-0 md:hidden bg-black/50"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
};
