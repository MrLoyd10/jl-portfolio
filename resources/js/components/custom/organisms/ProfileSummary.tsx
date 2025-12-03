import { Button } from '@/components/ui/button';
import {
    Calendar,
    Github,
    Instagram,
    Linkedin,
    MapPin,
    Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export const ProfileSummary = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const socialLinks = [
        {
            icon: Github,
            href: 'https://github.com/mrloyd',
            label: 'GitHub',
            color: 'hover:bg-gray-900 hover:text-white',
        },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/mrloyd',
            label: 'LinkedIn',
            color: 'hover:bg-blue-600 hover:text-white',
        },
        {
            icon: Instagram,
            href: 'https://instagram.com/mrloyd',
            label: 'Instagram',
            color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white',
        },
    ];

    const titles = [
        'Full-Stack Developer',
        'Next.js Enthusiast',
        'React Specialist',
        'Node.js Developer',
    ];
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        // Rotating titles
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleScheduleCall = () => {
        window.open('https://calendly.com/your-link', '_blank');
    };

    return (
        <>
            <div className="mt-[74px]"></div>

            <section
                id="home"
                className="relative flex items-center 2xl:py-32 w-full min-h-[calc(100vh-74px)] 2xl:min-h-auto overflow-hidden"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="top-20 -right-20 absolute bg-primary/10 blur-3xl rounded-full w-96 h-96 animate-pulse" />
                    <div
                        className="bottom-20 -left-20 absolute bg-blue-500/10 blur-3xl rounded-full w-96 h-96 animate-pulse"
                        style={{ animationDelay: '1s' }}
                    />
                </div>

                <div className="relative items-center gap-12 grid md:grid-cols-5 mx-auto px-6 py-12 w-full max-w-7xl">
                    {/* Left Column: Image and Social Links */}
                    <div
                        className={`flex justify-center transition-all duration-1000 md:col-span-2 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    >
                        <div className="flex flex-col justify-center items-center space-y-6">
                            {/* Profile Image with Gradient Border */}
                            <div className="group relative">
                                {/* Animated gradient border */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-blue-500 to-purple-500 opacity-75 group-hover:opacity-100 blur-sm rounded-full transition-all animate-spin-slow duration-500" />

                                <div className="relative shadow-xl border-4 border-white rounded-full w-64 h-64 transition-transform duration-500 overflow-hidden group-hover:scale-105">
                                    <img
                                        src="https://picsum.photos/400"
                                        alt="Profile"
                                        className="w-full h-full transition-transform duration-700 object-cover group-hover:scale-110"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Floating status badge */}
                                <div className="right-4 bottom-4 absolute flex items-center gap-2 bg-white shadow-lg px-3 py-1.5 border border-green-200 rounded-full animate-bounce-slow">
                                    <span className="relative flex w-3 h-3">
                                        <span className="inline-flex absolute bg-green-400 opacity-75 rounded-full w-full h-full animate-ping" />
                                        <span className="inline-flex relative bg-green-500 rounded-full w-3 h-3" />
                                    </span>
                                    <span className="font-medium text-green-700 text-xs">
                                        Available
                                    </span>
                                </div>
                            </div>

                            {/* Location with animation */}
                            <div
                                className={`flex items-center gap-2 text-gray-800 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: '200ms' }}
                            >
                                <MapPin className="w-5 h-5 text-primary animate-pulse" />
                                <span className="font-medium">
                                    Ngp, Maharashtra, India
                                </span>
                            </div>

                            {/* Social Links with stagger animation */}
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`rounded-full border border-gray-300 bg-gray-100 p-3 transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg ${social.color} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                        style={{ transitionDelay: '30ms' }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                                {/* X (Twitter) Icon */}
                                <a
                                    href="https://x.com/mrloyd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`rounded-full border border-gray-300 bg-gray-100 p-3 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-black hover:text-white hover:shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                    style={{ transitionDelay: '30ms' }}
                                    aria-label="X (Twitter)"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div
                        className={`space-y-6 text-center transition-all duration-1000 md:col-span-3 md:text-left ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    >
                        {/* Schedule Button with pulse effect */}
                        <div
                            className="flex justify-center md:justify-start"
                            style={{ transitionDelay: '100ms' }}
                        >
                            <Button
                                onClick={handleScheduleCall}
                                variant="outline"
                                className="group relative hover:shadow-lg border-primary/50 hover:border-primary transition-all duration-300 overflow-hidden hover:scale-105"
                            >
                                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                <Calendar className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="relative">
                                    Schedule a call
                                </span>
                                <Sparkles className="opacity-60 group-hover:opacity-100 ml-2 w-4 h-4 transition-opacity duration-300" />
                            </Button>
                        </div>

                        {/* Name with gradient and animation */}
                        <h1
                            className={`animate-gradient bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-5xl font-bold text-transparent transition-all duration-700 md:text-6xl lg:text-7xl`}
                            style={{ transitionDelay: '200ms' }}
                        >
                            Aditya Domle
                        </h1>

                        {/* Rotating Title */}
                        <div className="relative h-8 md:h-10 overflow-hidden">
                            {titles.map((title, index) => (
                                <p
                                    key={index}
                                    className={`absolute inset-0 text-xl font-medium text-gray-800 transition-all duration-500 md:text-2xl ${
                                        currentTitle === index
                                            ? 'translate-y-0 opacity-100'
                                            : '-translate-y-full opacity-0'
                                    }`}
                                >
                                    {title}
                                </p>
                            ))}
                        </div>

                        {/* Description with hover effect */}
                        <div
                            className={`transition-all duration-700`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            <p className="group relative max-w-2xl text-base text-gray-600 md:text-lg leading-relaxed">
                                <span className="relative z-10">
                                    Self-taught Full-Stack Developer from India,
                                    specializing in modern web technologies and
                                    open-source development. Passionate about
                                    building{' '}
                                    <span className="font-semibold text-primary">
                                        scalable applications
                                    </span>{' '}
                                    with Next.js and contributing to the
                                    developer community through{' '}
                                    <span className="font-semibold text-primary">
                                        open-source projects
                                    </span>
                                    .
                                </span>
                            </p>
                        </div>

                        {/* Quick Stats */}
                        <div
                            className={`flex flex-wrap justify-center gap-6 pt-4 transition-all duration-700 md:justify-start`}
                            style={{ transitionDelay: '500ms' }}
                        >
                            <div className="group text-center cursor-default">
                                <div className="font-bold text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
                                    5+
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Years Experience
                                </div>
                            </div>
                            <div className="border-gray-300 border-l" />
                            <div className="group text-center cursor-default">
                                <div className="font-bold text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
                                    50+
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Projects Completed
                                </div>
                            </div>
                            <div className="border-gray-300 border-l" />
                            <div className="group text-center cursor-default">
                                <div className="font-bold text-3xl text-primary transition-transform duration-300 group-hover:scale-110">
                                    10+
                                </div>
                                <div className="text-gray-600 text-sm">
                                    Tech Stack
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>
                    {`
                  @keyframes spin-slow {
                      from {
                          transform: rotate(0deg);
                      }
                      to {
                          transform: rotate(360deg);
                      }
                  }
                  @keyframes bounce-slow {
                      0%,
                      100% {
                          transform: translateY(0);
                      }
                      50% {
                          transform: translateY(-10px);
                      }
                  }
                  @keyframes gradient {
                      0% {
                          background-position: 0% 50%;
                      }
                      50% {
                          background-position: 100% 50%;
                      }
                      100% {
                          background-position: 0% 50%;
                      }
                  }
                  .animate-spin-slow {
                      animation: spin-slow 8s linear infinite;
                  }
                  .animate-bounce-slow {
                      animation: bounce-slow 3s ease-in-out infinite;
                  }
                  .animate-gradient {
                      background-size: 200% auto;
                      animation: gradient 3s ease infinite;
                  }
                `}
                </style>
            </section>
        </>
    );
};
