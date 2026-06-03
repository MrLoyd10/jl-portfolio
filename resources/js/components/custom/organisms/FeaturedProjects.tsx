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
            title: 'Project: Atlas',
            systemType: 'Industrial Control System',
            highlight:
                'Real-time device monitoring and control via HTTP and WebSockets',
            description:
                'A real-time industrial control platform that allows users to monitor and manage devices such as CCTV, lights, and relays. Built for hardware-integrated environments with live system feedback and operational control.',
            technologies: [
                'React',
                'Laravel',
                'MySQL',
                'WebSockets',
                'Tailwind CSS',
            ],
            image: 'https://picsum.photos/seed/atlas/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'Freelance Project',
        },
        {
            title: 'Document Stamp Management System',
            systemType: 'Document Workflow System',
            highlight:
                'Electronic document stamp releasing with secure file storage',
            description:
                'A document processing platform for managing and releasing electronic document stamps. Designed to support workflow handling, record tracking, and secure file storage using AWS S3.',
            technologies: ['Laravel', 'React', 'MySQL', 'AWS S3', 'Inertia.js'],
            image: 'https://picsum.photos/seed/docstamp/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'Professional',
        },
        {
            title: 'ESkywardPay',
            systemType: 'Payment Integration System',
            highlight:
                'Integrated secure online payment workflows into business platforms',
            description:
                'An online payment integration system built to handle transaction workflows inside business applications. Focused on secure processing, backend transaction handling, and smooth user payment experiences.',
            technologies: ['Laravel', 'React', 'MySQL', 'Payment Integration'],
            image: 'https://picsum.photos/seed/payment/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'Professional',
        },
        {
            title: 'Delivery Booking Systems',
            systemType: 'Booking & Logistics Platform',
            highlight:
                'Supported booking flows, delivery operations, and dashboard management',
            description:
                'Delivery and booking management platforms built for handling logistics workflows, order processing, dashboard tracking, and day-to-day operational visibility.',
            technologies: ['Laravel', 'Vue', 'MySQL'],
            image: 'https://picsum.photos/seed/delivery/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'Professional',
        },
        {
            title: 'Homeowners Association Management System',
            systemType: 'Management Platform',
            highlight:
                'Centralized records, payments, and admin workflows for communities',
            description:
                'A management platform for residential communities that handles member records, payment-related workflows, and administrative operations in one organized system.',
            technologies: ['Next.js', 'Laravel API', 'MySQL', 'Tailwind CSS'],
            image: 'https://picsum.photos/seed/homeowners/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'Personal Project',
        },
        {
            title: 'Quiz Management Web App',
            systemType: 'Assessment Platform',
            highlight:
                'Dynamic quizzes, scoring logic, and interactive web-based assessment flow',
            description:
                'A web-based quiz management application with dynamic question handling, scoring logic, and interactive user flows. Built with a modern frontend and Laravel API backend.',
            technologies: ['Nuxt', 'Laravel API', 'SQLite', 'Tailwind CSS'],
            image: 'https://picsum.photos/seed/quiz/800/500',
            liveUrl: '#',
            githubUrl: '#',
            category: 'Personal Project',
        },
    ];

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
                    <div className="flex items-center gap-2 rounded-lg bg-gray-100 p-1">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`flex items-center gap-2 rounded-md px-4 py-2 transition-all duration-300 ${
                                viewMode === 'grid'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
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
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900'
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
