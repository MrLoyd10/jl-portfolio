import { Badge } from '@/components/ui/badge';
import { Atom, Code2, Sparkles, Zap } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface TechItemProps {
    name: string;
    icon: React.ReactNode;
    category: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
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
            icon: (
                <div className="flex justify-center items-center rounded-lg w-16 h-16">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                    >
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
                        <path
                            fill="#000001"
                            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
                        ></path>
                    </svg>
                </div>
            ),
            category: 'Languages',
            level: 'Advanced',
            color: 'yellow',
        },
        {
            name: 'TypeScript',
            icon: (
                <div className="flex justify-center items-center rounded-lg w-16 h-16">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 48 48"
                    >
                        <rect
                            width="36"
                            height="36"
                            x="6"
                            y="6"
                            fill="#1976d2"
                        ></rect>
                        <polygon
                            fill="#fff"
                            points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                        ></polygon>
                        <path
                            fill="#fff"
                            d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                        ></path>
                    </svg>
                </div>
            ),
            category: 'Languages',
            level: 'Intermediate',
            color: 'blue',
        },

        // Frontend
        {
            name: 'Tailwind',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.61 7.15 14.5 6 12 6zM7 14c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.39 18.85 9.5 20 12 20c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.61 15.15 9.5 14 7 14z"
                        fill="currentColor"
                        className="text-cyan-400"
                    />
                </svg>
            ),
            category: 'Frontend',
            level: 'Advanced',
            color: 'cyan',
        },
        {
            name: 'SCSS',
            icon: (
                <div className="flex justify-center items-center bg-pink-500 rounded-full w-16 h-16">
                    <span className="font-bold text-2xl text-white italic">
                        S
                    </span>
                </div>
            ),
            category: 'Frontend',
            level: 'Intermediate',
            color: 'pink',
        },
        {
            name: 'Framer',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"
                        fill="currentColor"
                        className="text-pink-500"
                    />
                </svg>
            ),
            category: 'Frontend',
            level: 'Intermediate',
            color: 'pink',
        },
        {
            name: 'React',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <circle
                        cx="12"
                        cy="12"
                        r="2"
                        fill="currentColor"
                        className="text-cyan-400"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        className="text-cyan-400"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        transform="rotate(60 12 12)"
                        className="text-cyan-400"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        transform="rotate(120 12 12)"
                        className="text-cyan-400"
                    />
                </svg>
            ),
            category: 'Frontend',
            level: 'Advanced',
            color: 'cyan',
        },
        {
            name: 'Redux',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061c-.923.047-1.66.84-1.614 1.801.035.465.198.87.465 1.154-1.024 1.988-2.573 3.448-4.848 4.897-1.542 1.013-3.178 1.392-4.862 1.154-1.401-.203-2.496-.943-3.178-2.143-.998-1.754-1.093-3.663-.263-5.55.605-1.392 1.543-2.425 2.011-2.896-.316-.914-.57-2.143-.663-3.13-6.027 4.318-5.355 10.15-3.551 12.822 1.354 1.988 4.145 3.178 7.276 3.178.61 0 1.231-.047 1.841-.141 4.145-.707 7.276-2.896 9.287-6.492zm5.452-3.272c-2.479-2.896-6.142-4.5-10.287-4.5h-.516c-.281-.61-.937-1.013-1.709-1.013h-.061c-.923.047-1.66.84-1.614 1.801.047.914.797 1.648 1.709 1.648h.061c.805-.047 1.448-.562 1.66-1.295h.57c2.479 0 4.813.707 6.938 2.143 1.613 1.06 2.76 2.425 3.413 4.084.562 1.295.516 2.566-.094 3.708-.937 1.754-2.48 2.708-4.533 2.708-1.331 0-2.62-.422-3.272-.703-.422.328-.937.797-1.331 1.154 1.331.61 2.62.937 3.88.937 2.854 0 4.957-1.566 5.824-3.13 1.013-1.894.796-5.316-1.438-8.354zM6.49 17.042c.047.914.796 1.648 1.709 1.648h.061c.923-.047 1.66-.84 1.614-1.801-.047-.914-.796-1.648-1.709-1.648h-.061c-.047 0-.141 0-.188.047-1.072-1.801-1.518-3.755-1.354-5.877.094-1.566.562-2.943 1.401-4.084.703-1.013 2.057-1.519 3.037-1.566 2.714-.047 3.85 3.366 3.944 4.738.516.141 1.354.422 1.941.656-.516-6.867-4.145-10.385-7.885-10.385-3.413 0-6.564 2.472-7.461 6.14-1.189 4.738.141 9.287 2.387 12.822.703 1.013 2.011 1.613 3.272 1.613.047-.89.797-1.648 1.709-1.648h.061c-.089-.047-.089-.047-.089-.047z"
                        fill="currentColor"
                        className="text-purple-500"
                    />
                </svg>
            ),
            category: 'Frontend',
            level: 'Intermediate',
            color: 'purple',
        },
        {
            name: 'Next.js',
            icon: (
                <div className="flex justify-center items-center bg-white rounded-full w-16 h-16">
                    <span className="font-bold text-2xl text-black">N</span>
                </div>
            ),
            category: 'Frontend',
            level: 'Advanced',
            color: 'white',
        },

        // Backend
        {
            name: 'Node.js',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.47c0 .66-.68 1.31-1.77.76L4.4 16.5c-.02-.01-.04-.04-.04-.07V7.85c0-.03.02-.06.04-.07l7.44-4.3c.02-.01.05-.01.08 0l7.44 4.3c.02.01.04.04.04.07v8.58c0 .03-.02.06-.04.07l-7.44 4.3c-.02.01-.05.01-.08 0l-1.88-1.12c-.02-.01-.04-.01-.06 0-.32.18-.38.21-.68.3-.07.03-.18.06.04.17l2.46 1.45c.24.14.5.2.78.2s.54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.85c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2zm1.93 5.02c-1.89 0-3.22.8-3.22 2.15 0 1.45 1.12 1.86 3.14 2.03 2.4.21 2.58.53 2.58.95 0 .73-.59 1.04-1.97 1.04-1.74 0-2.13-.44-2.26-1.31-.02-.11-.11-.2-.22-.2h-.97c-.12 0-.22.11-.22.23 0 1.24.68 2.72 3.67 2.72 2.19 0 3.44-.86 3.44-2.37 0-1.5-1.01-1.9-3.13-2.18-2.11-.29-2.58-.43-2.58-1.03 0-.46.2-1.07 1.97-1.07 1.57 0 2.15.34 2.38 1.4.02.1.11.17.21.17h.97c.06 0 .12-.03.16-.07.05-.04.07-.1.06-.17-.1-1.43-1.19-2.33-3.81-2.33z"
                        fill="currentColor"
                        className="text-green-500"
                    />
                </svg>
            ),
            category: 'Backend',
            level: 'Intermediate',
            color: 'green',
        },
        {
            name: 'Express',
            icon: (
                <div className="flex justify-center items-center w-16 h-16">
                    <span className="font-bold text-3xl text-gray-400">ex</span>
                </div>
            ),
            category: 'Backend',
            level: 'Intermediate',
            color: 'gray',
        },

        // Database / Backend-as-a-Service
        {
            name: 'MongoDB',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.292-11.375z"
                        fill="currentColor"
                        className="text-green-600"
                    />
                </svg>
            ),
            category: 'Database',
            level: 'Intermediate',
            color: 'green',
        },
        {
            name: 'Supabase',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M13.1 22.928c-.456.653-1.486.317-1.486-.485V13.88h9.014c1.02 0 1.538 1.234.82 1.957l-8.348 7.091zm-2.2-21.856c.456-.653 1.486-.317 1.486.485v8.563H3.372c-1.02 0-1.538-1.234-.82-1.957l8.348-7.091z"
                        fill="currentColor"
                        className="text-green-500"
                    />
                </svg>
            ),
            category: 'Backend',
            level: 'Beginner',
            color: 'green',
        },
        {
            name: 'Sanity',
            icon: (
                <div className="flex justify-center items-center w-16 h-16">
                    <div className="flex justify-center items-center bg-gradient-to-br from-red-400 to-red-600 rounded-lg w-12 h-12">
                        <span className="font-bold text-2xl text-white">S</span>
                    </div>
                </div>
            ),
            category: 'Backend',
            level: 'Beginner',
            color: 'red',
        },

        // DevOps / Tools
        {
            name: 'Docker',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.37-1.128-1.16-1.698-1.85-2.123-.023-.014-.048-.027-.073-.038l-.15-.074-.073.14c-.274.522-.335 1.35-.317 1.774.038.578.213 1.112.52 1.553a2.918 2.918 0 01-1.539.42c-7.924 0-8.22 7.585-8.22 7.585v.078c0 .637.26 1.249.725 1.697 1.047.998 2.726 1.5 4.995 1.5.984 0 1.968-.089 2.929-.265 1.807-.328 3.467-1.005 4.932-2.01.87-.596 1.602-1.334 2.171-2.191.996-1.5 1.617-3.304 1.617-4.728 0-.061-.006-.12-.006-.183a1.92 1.92 0 00.725-1.248c.013-.03.02-.061.027-.092l.03-.143-.146-.076z"
                        fill="currentColor"
                        className="text-blue-500"
                    />
                </svg>
            ),
            category: 'Tools',
            level: 'Beginner',
            color: 'blue',
        },
        {
            name: 'Vercel',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L2 19.777h20L12 2z"
                        fill="currentColor"
                        className="text-black"
                    />
                </svg>
            ),
            category: 'Hosting',
            level: 'Advanced',
            color: 'black',
        },
        {
            name: 'Git',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.487.348a1.848 1.848 0 010 2.6 1.836 1.836 0 01-2.592 0 1.848 1.848 0 010-2.6c.13-.13.277-.233.435-.328V8.99a1.844 1.844 0 01-1.006-2.408L7.392 3.783.45 10.725a1.55 1.55 0 000 2.188l10.479 10.479a1.55 1.55 0 002.188 0l10.43-10.43a1.55 1.55 0 000-2.188"
                        fill="currentColor"
                        className="text-orange-600"
                    />
                </svg>
            ),
            category: 'Tools',
            level: 'Advanced',
            color: 'orange',
        },
        {
            name: 'Postman',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="currentColor"
                        className="text-orange-500"
                    />
                    <path
                        d="M13.527 14.4l-1.764 1.763a.196.196 0 01-.277 0l-2.155-2.155 1.764-1.763 2.432 2.155zm3.46-7.96c-.04-.04-.098-.04-.137 0L9.434 13.85l-1.764-1.764L14.45 5.3a2.118 2.118 0 012.98 0l.137.137a2.118 2.118 0 010 2.98l-6.686 6.686 1.764 1.764 7.372-7.372a.196.196 0 010-.277l-3.03-3.03z"
                        fill="white"
                    />
                </svg>
            ),
            category: 'Tools',
            level: 'Advanced',
            color: 'orange',
        },
        {
            name: 'Cloudflare',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M16.5 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-6 0c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
                        fill="currentColor"
                        className="text-orange-400"
                    />
                    <path
                        d="M20.5 12c0 .343-.034.678-.098 1h.848c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-.75zm-17.5 0h-.75c-.276 0-.5.224-.5.5s.224.5.5.5h.848a7.978 7.978 0 01-.098-1z"
                        fill="currentColor"
                        className="text-orange-400"
                    />
                </svg>
            ),
            category: 'Hosting',
            level: 'Beginner',
            color: 'orange',
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
            className="relative px-6 py-16 w-full"
        >
            {/* Enhanced Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="top-1/4 -left-32 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96 animate-pulse" />
                <div
                    className="-right-32 bottom-1/4 absolute bg-blue-500/5 blur-3xl rounded-full w-96 h-96 animate-pulse"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="top-1/2 left-1/2 absolute bg-purple-500/5 blur-3xl rounded-full w-80 h-80 animate-pulse"
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
                                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary animate-shimmer" />
                            )}
                            <span className="relative flex items-center gap-2">
                                {category === 'All' && (
                                    <Sparkles className="w-4 h-4" />
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
                    <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 border-2 border-gray-200 rounded-2xl">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <div className="font-bold text-2xl text-primary">
                                {technologies.length}
                            </div>
                            <div className="text-gray-600 text-sm">
                                Technologies
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white shadow-md px-6 py-4 border-2 border-gray-200 rounded-2xl">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                            <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <div className="font-bold text-2xl text-blue-600">
                                {categories.length - 1}
                            </div>
                            <div className="text-gray-600 text-sm">
                                Categories
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Grid */}
                <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
    icon,
    category,
    level,
    color,
    index = 0,
    isHovered,
}: TechItemProps) => {
    const [localHover, setLocalHover] = useState(false);

    const getLevelColor = (level?: string) => {
        switch (level) {
            case 'Expert':
                return 'bg-green-500';
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
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-lg rounded-2xl transition-all duration-500" />

            {/* Main card */}
            <div className="relative flex flex-col justify-between items-center bg-white shadow-lg group-hover:shadow-2xl p-5 border-2 border-gray-200 group-hover:border-primary/30 rounded-2xl h-full transition-all group-hover:-translate-y-3 duration-500 overflow-hidden">
                {/* Level indicator dot */}
                {level && (
                    <div className="top-3 left-3 z-10 absolute">
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
                    <Sparkles className="w-4 h-4 text-primary fill-primary" />
                </div>

                {/* Icon container */}
                <div className="relative mb-4 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    {/* Pulse ring effect */}
                    <div
                        className="absolute -inset-2 bg-primary/20 opacity-0 group-hover:opacity-100 blur-md rounded-2xl animate-pulse"
                        style={{ animationDuration: '2s' }}
                    />

                    {/* Icon */}
                    <div className="relative z-10">{icon}</div>
                </div>

                {/* Tech name with category badge */}
                <div className="space-y-2 w-full">
                    <div className="text-center">
                        <span className="block font-bold text-gray-900 text-sm group-hover:text-primary transition-colors duration-300">
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
                            className="bg-primary/5 border-primary/30 text-primary text-xs"
                        >
                            {category}
                        </Badge>
                    </div>
                </div>

                {/* Bottom progress bar */}
                <div className="right-0 bottom-0 left-0 absolute bg-gray-100 h-1">
                    <div
                        className="bg-gradient-to-r from-primary via-blue-500 to-primary group-hover:w-full h-full transition-all duration-700"
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
                            className="absolute bg-gradient-to-r from-primary to-blue-500 rounded-full w-1.5 h-1.5 animate-float"
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
                <div className="right-0 bottom-0 absolute bg-gradient-to-tl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 rounded-tl-2xl w-8 h-8 transition-opacity duration-500" />
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
