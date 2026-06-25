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
}

export function WorkExperience() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const [hoveredTech, setHoveredTech] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const experiences: ExperienceCardProps[] = [
        {
            title: 'Full Stack Web Developer',
            company: 'Skyward Technology Solutions',
            location: 'Parañaque City, Philippines',
            period: 'Nov 2024 - Present',
            employmentType: 'Full-time',
            description:
                'Building and maintaining production web applications focused on government workflows, business operations, and client-specific platforms. I deliver full-stack features from interface to backend logic, while also helping clients shape practical and technically sound solutions.',
            achievements: [
                'Built end-to-end features including authentication, CRUD modules, booking workflows, payment integrations, and courier service integrations',
                'Developed interfaces using React, TypeScript, Vue, and Laravel Blade connected to Laravel backend APIs',
                'Worked directly with clients to clarify requirements, assess technical impact, and align requested changes with existing system processes',
                'Contributed to production-ready systems used for dashboards, document handling, and operational workflows',
            ],
            technologies: [
                'Laravel',
                'PHP',
                'React',
                'TypeScript',
                'Vue',
                'MySQL',
                'Laravel Blade',
            ],
        },
        {
            title: 'Assistant System Administrator',
            company: 'ZAP I.T. Services and I.T. Consultancy',
            location: 'Norzagaray, Bulacan',
            period: 'Mar 2024 - May 2024',
            employmentType: 'OJT',
            description:
                'Completed hands-on technical training in system setup, hardware support, and field troubleshooting. This experience strengthened my practical understanding of device configuration, technical maintenance, and working directly on operational issues.',
            achievements: [
                'Configured IP phones and ensured successful registration and readiness for deployment',
                'Handled off-site computer repair and support tasks for client environments',
                'Built, diagnosed, and troubleshot Windows-based PCs',
                'Supported day-to-day IT operations with a focus on reliability and issue resolution',
            ],
            technologies: [
                'Windows',
                'IP Phone Configuration',
                'Hardware Troubleshooting',
                'Technical Support',
            ],
        },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="relative w-full px-6 py-12"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
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
                        mainDivClassName="mb-12"
                        title="Work Experience"
                        subtitle="Experience building full-stack systems, solving operational problems, and working directly with real client requirements."
                        icon={Briefcase}
                    />
                </div>

                <div className="absolute top-30 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b from-primary/40 via-blue-500/40 to-primary/40 md:block dark:brightness-150" />

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
                            <div className="absolute top-8 left-8 hidden h-4 w-4 -translate-x-1/2 md:block">
                                <div
                                    className={`h-full w-full rounded-full bg-primary transition-all duration-300 ${activeCard === index ? 'scale-150 shadow-lg shadow-primary/50' : 'scale-100'}`}
                                >
                                    <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-50" />
                                </div>
                            </div>

                            <div className="group relative md:ml-20">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 hover:border-primary/30 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800">
                                    <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
                                        <div className="flex-1">
                                            <div className="mb-2 flex items-start gap-3">
                                                <div className="flex items-center justify-center rounded-lg bg-primary/5 p-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10">
                                                    <Briefcase className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 dark:brightness-150" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary dark:text-gray-100">
                                                        {experience.title}
                                                    </h3>
                                                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                                        {experience.company}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                                                <div className="flex items-center gap-1.5 transition-all duration-300 hover:text-primary">
                                                    <MapPin className="h-4 w-4 text-primary transition-transform duration-300 hover:scale-125 hover:animate-bounce dark:brightness-150" />
                                                    <span>
                                                        {experience.location}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5 transition-all duration-300 hover:text-primary">
                                                    <Calendar className="h-4 w-4 text-primary transition-transform duration-300 hover:scale-125 hover:rotate-12 dark:brightness-150" />
                                                    <span>
                                                        {experience.period}
                                                    </span>
                                                </div>
                                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-sm dark:brightness-200">
                                                    {experience.employmentType}
                                                </span>
                                            </div>
                                        </div>

                                        {index === 0 && (
                                            <div className="animate-pulse-subtle flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 shadow-sm dark:border-green-800 dark:bg-green-900/30">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                                </span>
                                                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                                                    Current Role
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                        {experience.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="rounded-md bg-primary/10 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                                <Award className="h-4 w-4 text-primary/60 dark:brightness-150" />
                                            </div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                                Key Contributions
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {experience.achievements.map(
                                                (achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="group/item flex items-start gap-2 text-sm text-gray-600 transition-all duration-300 hover:translate-x-1 dark:text-gray-300"
                                                    >
                                                        <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60 transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:text-primary/50 dark:brightness-150" />
                                                        <span className="text-[13px] leading-relaxed group-hover/item:text-gray-900 dark:group-hover/item:text-gray-100">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="rounded-md bg-primary/10 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
                                                <Code className="h-4 w-4 text-primary/60 dark:brightness-150" />
                                            </div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                                Technologies Used
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map(
                                                (tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        onMouseEnter={() =>
                                                            setHoveredTech(
                                                                `${index}-${idx}`,
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            setHoveredTech(null)
                                                        }
                                                        className="group/tech relative cursor-default overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-primary/50 hover:from-primary/10 hover:to-primary/20 hover:text-primary hover:shadow-md dark:border-gray-700 dark:from-gray-800 dark:to-gray-700 dark:text-gray-300"
                                                    >
                                                        <span className="relative z-10">
                                                            {tech}
                                                        </span>
                                                        <div
                                                            className={`absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ${hoveredTech === `${index}-${idx}` ? 'translate-x-full' : '-translate-x-full'}`}
                                                        />
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes pulse-subtle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.8; }
                }
                .animate-pulse-subtle {
                    animation: pulse-subtle 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
}
