import { Button } from '@/components/ui/button';
import { env } from '@/lib/env';
import {
    Facebook,
    Github,
    Instagram,
    MapPin,
    MessageCircle,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export const ProfileSummary = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { profile, socials } = env;

    const socialLinks = [
        {
            icon: Github,
            href: socials.githubUrl,
            label: 'GitHub',
            color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900',
        },
        {
            icon: Instagram,
            href: socials.instagramUrl,
            label: 'Instagram',
            color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white dark:hover:from-purple-500 dark:hover:via-pink-500 dark:hover:to-orange-400',
        },
        {
            icon: Facebook,
            href: socials.facebookUrl,
            label: 'Facebook',
            color: 'hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500',
        },
    ];

    const titles = [
        'Full Stack Developer',
        'Laravel & React Specialist',
        'Modern Web Systems Builder',
    ];
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        setIsVisible(true);

        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollToContact = () => {
        document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <div className="mt-[74px]"></div>

            <section
                id="home"
                className="relative flex min-h-[calc(100vh-74px)] w-full items-center overflow-hidden 2xl:min-h-[700px]" //2xl:min-h-auto 2xl:py-32
            >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 -right-20 h-96 w-96 animate-pulse rounded-full bg-primary/10 blur-3xl" />
                    <div
                        className="absolute bottom-20 -left-20 h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl"
                        style={{ animationDelay: '1s' }}
                    />
                </div>

                <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 py-12 md:grid-cols-5">
                    <div
                        className={`flex justify-center transition-all duration-1000 md:col-span-2 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="group relative">
                                <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-blue-500 to-purple-500 opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100" />

                                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105 dark:border-gray-800">
                                    <img
                                        src={profile.imageUrl}
                                        alt={profile.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>

                                <div className="animate-bounce-slow absolute right-4 bottom-4 flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1.5 shadow-lg dark:border-green-800 dark:bg-gray-800">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                                    </span>
                                    <span className="text-xs font-medium text-green-700 dark:text-green-400">
                                        Open to Work
                                    </span>
                                </div>
                            </div>

                            <div
                                className={`flex items-center gap-2 text-gray-800 transition-all duration-700 dark:text-gray-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: '200ms' }}
                            >
                                <MapPin className="h-5 w-5 animate-pulse text-primary dark:brightness-150" />
                                <span className="font-medium">
                                    {profile.address}
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`rounded-full border border-gray-300 bg-gray-100 p-3 transition-all duration-300 hover:scale-110 hover:border-transparent hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:hover:shadow-black/40 ${social.color} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                        style={{ transitionDelay: '30ms' }}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="h-6 w-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className={`space-y-5 text-center transition-all duration-1000 md:col-span-3 md:text-left ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                    >
                        <div
                            className="flex justify-center md:justify-start"
                            style={{ transitionDelay: '100ms' }}
                        >
                            <Button
                                onClick={scrollToContact}
                                variant="outline"
                                className="group relative overflow-hidden border-primary/50 transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg"
                            >
                                <span className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                                <MessageCircle className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                                <span className="relative">Message Me</span>
                            </Button>
                        </div>

                        <h1
                            className="animate-gradient bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent transition-all duration-700 md:text-5xl lg:text-6xl"
                            style={{ transitionDelay: '200ms' }}
                        >
                            {profile.name}
                        </h1>

                        <div className="relative h-7 overflow-hidden md:h-10">
                            {titles.map((title, index) => (
                                <p
                                    key={index}
                                    className={`absolute inset-0 text-lg font-medium text-gray-800 transition-all duration-500 md:text-xl dark:text-gray-100 ${
                                        currentTitle === index
                                            ? 'translate-y-0 opacity-100'
                                            : '-translate-y-full opacity-0'
                                    }`}
                                >
                                    {title}
                                </p>
                            ))}
                        </div>

                        <div
                            className="transition-all duration-700"
                            style={{ transitionDelay: '400ms' }}
                        >
                            <p className="group relative max-w-2xl leading-relaxed text-gray-600 dark:text-gray-300">
                                <span className="relative z-10">
                                    I build scalable web applications and
                                    business systems using
                                    <span className="font-semibold text-primary dark:brightness-150">
                                        {' '}
                                        Laravel, React, and TypeScript
                                    </span>
                                    . My experience includes developing
                                    dashboards, booking platforms, and
                                    operational tools that streamline workflows
                                    and improve system efficiency. I focus on
                                    delivering
                                    <span className="font-semibold text-primary dark:brightness-150">
                                        {' '}
                                        clean, maintainable, and
                                        production-ready solutions
                                    </span>{' '}
                                    from frontend to backend.
                                </span>
                            </p>
                        </div>

                        <div
                            className="flex flex-wrap justify-center gap-6 pt-4 transition-all duration-700 md:justify-start"
                            style={{ transitionDelay: '500ms' }}
                        >
                            <div className="group cursor-default text-center">
                                <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 dark:brightness-150">
                                    {profile.yearsExperience}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Years Experience
                                </div>
                            </div>
                            <div className="border-l border-gray-300 dark:border-gray-600" />
                            <div className="group cursor-default text-center">
                                <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 dark:brightness-150">
                                    {profile.systemsProjects}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Systems & Projects
                                </div>
                            </div>
                            <div className="border-l border-gray-300 dark:border-gray-600" />
                            <div className="group cursor-default text-center">
                                <div className="text-2xl font-bold text-primary transition-transform duration-300 group-hover:scale-110 dark:brightness-150">
                                    {profile.coreStack}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Core Stack
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
