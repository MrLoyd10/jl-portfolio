import { Code2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import { ProjectCard } from '../molecules/ProjectCards';

export const FeaturedProjects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const projects = [
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
            id="projects"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Background Gradient Orbs */}
            <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/5 blur-3xl" />
            <div
                className="bg-blue/5 absolute right-1/4 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 animate-pulse rounded-full blur-3xl"
                style={{ animationDelay: '1s' }}
            />

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
                        mainDivClassName="mb-12"
                        title="Featured Projects"
                        subtitle="Showcasing my recent work and technical expertise"
                        icon={Code2}
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2">
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
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
