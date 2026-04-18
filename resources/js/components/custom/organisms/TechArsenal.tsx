import { Badge } from '@/components/ui/badge';
import { Atom, Code2, Sparkles, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface TechItemProps {
    name: string;
    iconName: string; // filename without extension
    category: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
    color: string;
    index?: number;
    isHovered?: boolean;
}

export function TechArsenal() {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const sectionRef = useRef<HTMLDivElement>(null);

    const technologies: TechItemProps[] = [
        // Languages
        {
            name: 'JavaScript',
            iconName: 'javascript',
            category: 'Languages',
            level: 'Advanced',
            color: 'yellow',
        },
        {
            name: 'TypeScript',
            iconName: 'typescript',
            category: 'Languages',
            level: 'Advanced',
            color: 'blue',
        },
        {
            name: 'PHP',
            iconName: 'php',
            category: 'Languages',
            level: 'Advanced',
            color: 'purple',
        },
        {
            name: 'C#',
            iconName: 'csharp',
            category: 'Languages',
            level: 'Intermediate',
            color: 'purple',
        },
        {
            name: 'C++',
            iconName: 'cpp',
            category: 'Languages',
            level: 'Intermediate',
            color: 'blue',
        },
        {
            name: 'Python',
            iconName: 'python',
            category: 'Languages',
            level: 'Beginner',
            color: 'yellow',
        },
        {
            name: 'C',
            iconName: 'c',
            category: 'Languages',
            level: 'Beginner',
            color: 'blue',
        },

        // Frontend Frameworks & Libraries
        {
            name: 'React',
            iconName: 'react',
            category: 'Frontend',
            level: 'Advanced',
            color: 'cyan',
        },
        {
            name: 'Vue',
            iconName: 'vue',
            category: 'Frontend',
            level: 'Advanced',
            color: 'green',
        },
        {
            name: 'Next.js',
            iconName: 'next-js',
            category: 'Frontend',
            level: 'Intermediate',
            color: 'black',
        },
        {
            name: 'Nuxt',
            iconName: 'nuxt-js',
            category: 'Frontend',
            level: 'Intermediate',
            color: 'green',
        },
        {
            name: 'jQuery',
            iconName: 'jquery',
            category: 'Frontend',
            level: 'Beginner',
            color: 'blue',
        },

        // CSS Frameworks & Styling
        {
            name: 'Tailwind CSS',
            iconName: 'tailwind',
            category: 'CSS',
            level: 'Advanced',
            color: 'cyan',
        },
        {
            name: 'Shadcn/UI',
            iconName: 'shadcn',
            category: 'CSS',
            level: 'Advanced',
            color: 'black',
        },
        {
            name: 'Bootstrap',
            iconName: 'bootstrap',
            category: 'CSS',
            level: 'Intermediate',
            color: 'purple',
        },
        {
            name: 'Material UI',
            iconName: 'material-ui',
            category: 'CSS',
            level: 'Intermediate',
            color: 'blue',
        },
        {
            name: 'HTML',
            iconName: 'html',
            category: 'CSS',
            level: 'Advanced',
            color: 'orange',
        },
        {
            name: 'CSS',
            iconName: 'css',
            category: 'CSS',
            level: 'Advanced',
            color: 'blue',
        },

        // Backend
        {
            name: 'Laravel',
            iconName: 'laravel',
            category: 'Backend',
            level: 'Advanced',
            color: 'red',
        },

        // Database
        {
            name: 'MySQL',
            iconName: 'mysql',
            category: 'Database',
            level: 'Advanced',
            color: 'teal',
        },
        {
            name: 'SQLite',
            iconName: 'sqlite',
            category: 'Database',
            level: 'Intermediate',
            color: 'blue',
        },

        // Tools
        {
            name: 'Git',
            iconName: 'git',
            category: 'Tools',
            level: 'Advanced',
            color: 'orange',
        },
        {
            name: 'GitHub',
            iconName: 'github',
            category: 'Tools',
            level: 'Intermediate',
            color: 'gray',
        },
        {
            name: 'Bitbucket',
            iconName: 'bitbucket',
            category: 'Tools',
            level: 'Advanced',
            color: 'blue',
        },
        {
            name: 'Postman',
            iconName: 'postman',
            category: 'Tools',
            level: 'Advanced',
            color: 'orange',
        },
        {
            name: 'Figma',
            iconName: 'figma',
            category: 'Tools',
            level: 'Intermediate',
            color: 'red',
        },
        {
            name: 'Canva',
            iconName: 'canva',
            category: 'Tools',
            level: 'Intermediate',
            color: 'purple',
        },
        {
            name: 'Webhook.site',
            iconName: 'webhook-site',
            category: 'Tools',
            level: 'Beginner',
            color: 'green',
        },

        // Build Tools
        {
            name: 'npm',
            iconName: 'npm',
            category: 'Build Tools',
            level: 'Intermediate',
            color: 'red',
        },
        {
            name: 'Vite',
            iconName: 'vite',
            category: 'Build Tools',
            level: 'Intermediate',
            color: 'purple',
        },

        // Hosting/Deployment
        {
            name: 'Vercel',
            iconName: 'vercel',
            category: 'Hosting',
            level: 'Intermediate',
            color: 'black',
        },
        {
            name: 'Netlify',
            iconName: 'netlify',
            category: 'Hosting',
            level: 'Intermediate',
            color: 'teal',
        },
        {
            name: 'Render',
            iconName: 'render',
            category: 'Hosting',
            level: 'Beginner',
            color: 'purple',
        },
        {
            name: 'AWS S3',
            iconName: 'aws-s3',
            category: 'Hosting',
            level: 'Beginner',
            color: 'orange',
        },
        {
            name: 'Laravel Forge',
            iconName: 'laravel-forge',
            category: 'Hosting',
            level: 'Beginner',
            color: 'red',
        },
    ];

    const categories = [
        'All',
        ...Array.from(new Set(technologies.map((t) => t.category))),
    ];

    const filteredTechs =
        selectedCategory === 'All'
            ? technologies
            : technologies.filter((t) => t.category === selectedCategory);

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

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Enhanced Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl" />
                <div
                    className="absolute -right-32 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 h-80 w-80 animate-pulse rounded-full bg-purple-500/5 blur-3xl"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-6"
                        title="Tech Arsenal"
                        subtitle="Powerful technologies and tools that bring ideas to life"
                        icon={Atom}
                    />
                </div>

                {/* Category Filter Pills */}
                <div
                    className={`mb-6 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`group relative overflow-hidden rounded-full px-6 py-2.5 font-semibold transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'scale-105 bg-primary text-white shadow-lg'
                                    : 'border-2 border-gray-200 bg-white text-gray-700 hover:scale-105 hover:border-primary/50'
                            }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {selectedCategory === category && (
                                <div className="animate-shimmer absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary" />
                            )}
                            <span className="relative flex items-center gap-2">
                                {category === 'All' && (
                                    <Sparkles className="h-4 w-4" />
                                )}
                                {category}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Stats Bar */}
                <div
                    className={`mb-12 flex flex-wrap items-center justify-center gap-8 transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '200ms' }}
                >
                    <div className="flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-6 py-4 shadow-md">
                        <div className="rounded-lg bg-primary/10 p-2">
                            <Code2 className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-primary">
                                {technologies.length}
                            </div>
                            <div className="text-sm text-gray-600">
                                Technologies
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border-2 border-gray-200 bg-white px-6 py-4 shadow-md">
                        <div className="rounded-lg bg-blue-500/10 p-2">
                            <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-600">
                                {categories.length - 1}
                            </div>
                            <div className="text-sm text-gray-600">
                                Categories
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {filteredTechs.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className={`transition-all duration-700 ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${300 + index * 50}ms`,
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <TechItem
                                {...tech}
                                index={index}
                                isHovered={hoveredIndex === index}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </section>
    );
}

const TechItem = ({
    name,
    iconName,
    category,
    level,
    color,
    index = 0,
    isHovered,
}: TechItemProps) => {
    const [localHover, setLocalHover] = useState(false);

    const getLevelColor = (level?: string) => {
        switch (level) {
            case 'Advanced':
                return 'bg-blue-500';
            case 'Intermediate':
                return 'bg-yellow-500';
            case 'Beginner':
                return 'bg-gray-500';
            default:
                return 'bg-gray-400';
        }
    };

    return (
        <div
            className="group relative"
            onMouseEnter={() => setLocalHover(true)}
            onMouseLeave={() => setLocalHover(false)}
        >
            {/* Outer glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100" />

            {/* Main card */}
            <div className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-5 shadow-lg transition-all duration-500 group-hover:-translate-y-3 group-hover:border-primary/30 group-hover:shadow-2xl">
                {/* Level indicator dot */}
                {level && (
                    <div className="absolute top-3 left-3 z-10">
                        <div className="relative">
                            <div
                                className={`h-2.5 w-2.5 rounded-full ${getLevelColor(level)}`}
                            />
                            <div
                                className={`absolute inset-0 animate-ping rounded-full ${getLevelColor(level)} opacity-75`}
                            />
                        </div>
                    </div>
                )}

                {/* Sparkle decoration on hover */}
                <div
                    className={`absolute top-2 right-2 transition-all duration-300 ${
                        localHover
                            ? 'scale-100 rotate-12 opacity-100'
                            : 'scale-0 rotate-0 opacity-0'
                    }`}
                >
                    <Sparkles className="h-4 w-4 fill-primary text-primary" />
                </div>

                {/* Icon container with consistent sizing */}
                <div className="relative mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {/* Pulse ring effect */}
                    <div
                        className="absolute -inset-2 animate-pulse rounded-2xl bg-primary/20 opacity-0 blur-md group-hover:opacity-100"
                        style={{ animationDuration: '2s' }}
                    />

                    {/* Icon with consistent size */}
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center">
                        <img
                            src={`http://127.0.0.1:8000/icons/${iconName}.png`}
                            alt={name}
                            className="h-full w-full object-contain"
                            onError={(e) => {
                                // Fallback if image doesn't load
                                e.currentTarget.style.display = 'none';
                                const parent = e.currentTarget.parentElement;
                                if (parent) {
                                    parent.innerHTML = `<div class="flex justify-center items-center bg-gray-200 rounded-lg w-16 h-16"><span class="font-bold text-gray-600 text-xl">${name.substring(0, 2).toUpperCase()}</span></div>`;
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Tech name with category badge */}
                <div className="w-full space-y-2">
                    <div className="text-center">
                        <span className="block text-sm font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                            {name}
                        </span>
                    </div>

                    {/* Category badge - visible on hover */}
                    <div
                        className={`flex justify-center transition-all duration-300 ${
                            localHover
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-2 opacity-0'
                        }`}
                    >
                        <Badge
                            variant="outline"
                            className="border-primary/30 bg-primary/5 text-xs text-primary"
                        >
                            {category}
                        </Badge>
                    </div>
                </div>

                {/* Bottom progress bar */}
                <div className="absolute right-0 bottom-0 left-0 h-1 bg-gray-100">
                    <div
                        className="h-full bg-gradient-to-r from-primary via-blue-500 to-primary transition-all duration-700 group-hover:w-full"
                        style={{ width: '0%' }}
                    />
                </div>

                {/* Floating particles */}
                <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                        localHover ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="animate-float absolute h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-blue-500"
                            style={{
                                left: `${15 + i * 25}%`,
                                top: `${30 + (i % 2) * 20}%`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: '3s',
                            }}
                        />
                    ))}
                </div>

                {/* Corner accent */}
                <div className="absolute right-0 bottom-0 h-8 w-8 rounded-tl-2xl bg-gradient-to-tl from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(-25px) translateX(15px) scale(1.2);
                        opacity: 1;
                    }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};
