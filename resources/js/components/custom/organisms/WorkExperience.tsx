import {
    Award,
    Briefcase,
    Calendar,
    Code,
    MapPin,
    TrendingUp,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface ExperienceCardProps {
    title: string;
    company: string;
    location: string;
    period: string;
    employmentType: string;
    description: string;
    achievements: string[];
    technologies: string[];
    icon?: React.ReactNode;
}

export const WorkExperience = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const experiences: ExperienceCardProps[] = [
        {
            title: 'Web Developer',
            company: 'MetriStambh',
            location: 'Remote',
            period: 'Aug 2024 - May 2025',
            employmentType: 'Full-time',
            description:
                'Worked as a web developer for Metristanbh, creating their company portfolio and managing their website for project uploads and details. Gained expertise in website development, project management, and technical support during this role.',
            achievements: [
                "Developed and maintained Metristanbh's company portfolio and website",
                'Enhanced website functionality, boosting user engagement and accessibility',
                'Gained experience in project management and technical troubleshooting',
                'Streamlined processes for uploading and showcasing projects online',
            ],
            technologies: [
                'React.js',
                'Node.js',
                'TypeScript',
                'SEO',
                'express.js',
                'MongoDB',
            ],
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
            id="experience"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
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
                        mainDivClassName="mb-12"
                        title="Work Experience"
                        subtitle="My professional journey and key accomplishments"
                        icon={Briefcase}
                    />
                </div>

                {/* Timeline decoration for desktop */}
                <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b from-transparent via-primary/20 to-transparent md:block" />

                {/* Experience Cards */}
                <div className="relative space-y-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-700 ${
                                isVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-10 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${200 + index * 150}ms`,
                            }}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Timeline dot for desktop */}
                            <div className="absolute top-8 left-8 hidden h-4 w-4 -translate-x-1/2 md:block">
                                <div
                                    className={`h-full w-full rounded-full bg-primary transition-all duration-300 ${activeCard === index ? 'scale-150 shadow-lg shadow-primary/50' : 'scale-100'}`}
                                >
                                    <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-50" />
                                </div>
                            </div>

                            {/* Enhanced Experience Card Container */}
                            <div className="group relative md:ml-20">
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                                />

                                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                                    {/* Card Header */}
                                    <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
                                        <div className="flex-1">
                                            <div className="mb-2 flex items-start gap-3">
                                                <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2">
                                                    <Briefcase className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                                        {experience.title}
                                                    </h3>
                                                    <p className="text-lg font-semibold text-gray-700">
                                                        {experience.company}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1.5">
                                                    <MapPin className="h-4 w-4 text-primary" />
                                                    <span>
                                                        {experience.location}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-4 w-4 text-primary" />
                                                    <span>
                                                        {experience.period}
                                                    </span>
                                                </div>
                                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                                    {experience.employmentType}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Current badge */}
                                        {index === 0 && (
                                            <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 shadow-sm">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                                </span>
                                                <span className="text-xs font-semibold text-green-700">
                                                    Current
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="mb-4 leading-relaxed text-gray-600">
                                        {experience.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="mb-4">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Award className="h-4 w-4 text-primary" />
                                            <h4 className="text-sm font-semibold text-gray-900">
                                                Key Achievements
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {experience.achievements.map(
                                                (achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="group/item flex items-start gap-2 text-sm text-gray-600"
                                                    >
                                                        <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary transition-transform duration-300 group-hover/item:scale-110" />
                                                        <span className="leading-relaxed">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <Code className="h-4 w-4 text-primary" />
                                            <h4 className="text-sm font-semibold text-gray-900">
                                                Technologies Used
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map(
                                                (tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="cursor-default rounded-lg border border-gray-200 bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                                                    >
                                                        {tech}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Availability Card with animation */}
                    <div
                        className={`relative transition-all duration-700 ${
                            isVisible
                                ? 'translate-x-0 opacity-100'
                                : '-translate-x-10 opacity-0'
                        }`}
                        style={{
                            transitionDelay: `${200 + experiences.length * 150}ms`,
                        }}
                    >
                        {/* Timeline dot for desktop */}
                        <div className="absolute top-8 left-8 hidden h-4 w-4 -translate-x-1/2 md:block">
                            <div className="h-full w-full rounded-full bg-green-500">
                                <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-50" />
                            </div>
                        </div>

                        <div className="md:ml-20">
                            {/* Do availability card */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
