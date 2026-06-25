import { Code2, Grid3x3, LayoutGrid } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { ProjectCard, ProjectCardProps } from '../molecules/ProjectCards';

interface FeaturedProjectsProps {
    projects: ProjectCardProps[];
}

export const FeaturedProjects = ({ projects }: FeaturedProjectsProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            const isMobileScreen = window.innerWidth < 768;
            setIsMobile(isMobileScreen);

            if (isMobileScreen) {
                setViewMode('grid');
            }
        };

        checkScreenSize();
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
            className="relative w-full px-6 py-12"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-1/3 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-5xl">
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
                        subtitle="A selection of real-world systems, client projects, and applications I have built end-to-end"
                        icon={Code2}
                    />
                </div>

                <div
                    className={`mb-6 hidden justify-start transition-all duration-700 md:flex ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-300 ${
                                viewMode === 'grid'
                                    ? 'bg-white text-primary shadow-sm dark:bg-gray-900 dark:brightness-200'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                            }`}
                            aria-label="Grid view"
                        >
                            <LayoutGrid className="h-4 w-4" />
                            <span className="text-sm font-medium">Grid</span>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-300 ${
                                viewMode === 'list'
                                    ? 'bg-white text-primary shadow-sm dark:bg-gray-900 dark:brightness-200'
                                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                            }`}
                            aria-label="List view"
                        >
                            <Grid3x3 className="h-4 w-4" />
                            <span className="text-sm font-medium">List</span>
                        </button>
                    </div>
                </div>

                <div
                    className={`gap-6 transition-all duration-500 ${
                        isMobile || viewMode === 'grid'
                            ? 'grid md:grid-cols-2'
                            : 'flex flex-col'
                    }`}
                >
                    {projects.map((project, index) => (
                        <div
                            key={project.slug ?? index}
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
