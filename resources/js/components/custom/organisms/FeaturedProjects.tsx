import { Code2 } from 'lucide-react';
import { SectionHeader } from '../atoms/SectionHeader';
import { ProjectCard, ProjectCardProps } from '../molecules/ProjectCards';

export const FeaturedProjects = () => {
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

    return (
        <section
            id="projects"
            className="mx-auto px-6 py-10 max-w-6xl min-h-screen"
        >
            <div>
                <SectionHeader
                    mainDivClassName="mb-4"
                    title="Featured Projects"
                    subtitle="Showcasing my best work and personal projects"
                    icon={Code2}
                />

                {/* Projects Grid */}
                <div className="gap-6 grid md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
