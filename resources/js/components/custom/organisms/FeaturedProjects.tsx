import { Code2, Grid3x3, LayoutGrid } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { ProjectCard, ProjectCardProps } from '../molecules/ProjectCards';

export const FeaturedProjects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const projects: ProjectCardProps[] = [
        {
            title: 'ResearchX',
            description:
                'AI-powered research document generator that creates comprehensive research papers using advanced AI models. Features intelligent document structuring, citation management, and export capabilities.',
            technologies: ['TypeScript', 'Tailwind CSS', 'Next.js'],
            image: 'https://picsum.photos/seed/project1/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'AI Tool',
        },
        {
            title: 'Freshmart Store',
            description:
                'Modern grocery store web application with a clean and responsive UI. Built with efficient state management using Redux, featuring shopping cart, product filters, and checkout flow.',
            technologies: ['Tailwind CSS', 'React', 'Redux'],
            image: 'https://picsum.photos/seed/project2/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'E-commerce',
        },
        {
            title: 'Nike Reimagined',
            description:
                'A sleek and modern Nike website redesign showcasing fully responsive design with smooth animations and clean UI inspired by contemporary web design trends.',
            technologies: ['Tailwind CSS', 'React'],
            image: 'https://picsum.photos/seed/project3/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'UI/UX',
        },
        {
            title: 'News Hub',
            description:
                'Real-time news application integrating News API to deliver headlines across various categories. Features a modern interface with search functionality and category filtering.',
            technologies: ['TypeScript', 'Tailwind CSS', 'React'],
            image: 'https://picsum.photos/seed/project4/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'News App',
        },
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            const isMobileScreen = window.innerWidth < 768; // md breakpoint
            setIsMobile(isMobileScreen);

            // Force grid view on mobile
            if (isMobileScreen) {
                setViewMode('grid');
            }
        };

        // Check on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

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
            id="project"
            ref={sectionRef}
            className="relative px-6 py-16 w-full"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="top-1/3 -right-32 absolute bg-blue-500/5 blur-3xl rounded-full w-96 h-96" />
                <div className="bottom-1/3 -left-32 absolute bg-primary/5 blur-3xl rounded-full w-96 h-96" />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header with animation */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-6"
                        title="Featured Projects"
                        subtitle="Showcasing my best work and personal projects"
                        icon={Code2}
                    />
                </div>

                {/* View Mode Toggle - Hidden on mobile (< md) */}
                <div
                    className={`mb-6 hidden justify-start transition-all duration-700 md:flex ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-300 ${
                                viewMode === 'grid'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                            aria-label="Grid view"
                        >
                            <LayoutGrid className="w-4 h-4" />
                            <span className="font-medium text-sm">Grid</span>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-300 ${
                                viewMode === 'list'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                            aria-label="List view"
                        >
                            <Grid3x3 className="w-4 h-4" />
                            <span className="font-medium text-sm">List</span>
                        </button>
                    </div>
                </div>

                {/* Projects Grid/List with animation */}
                <div
                    className={`gap-6 ${
                        // Always use grid on mobile, respect viewMode on desktop
                        isMobile || viewMode === 'grid'
                            ? 'grid md:grid-cols-2'
                            : 'flex flex-col'
                    } transition-all duration-500`}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${200 + index * 100}ms`,
                            }}
                        >
                            <ProjectCard
                                {...project}
                                viewMode={isMobile ? 'grid' : viewMode}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
