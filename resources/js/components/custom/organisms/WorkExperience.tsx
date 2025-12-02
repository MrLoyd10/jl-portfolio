import { Button } from '@/components/ui/button';
import {
    ArrowRight,
    Award,
    Briefcase,
    Calendar,
    CheckCircle2,
    Clock,
    Code,
    Mail,
    MapPin,
    Sparkles,
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
            title: 'Web Developer',
            company: 'MetriStambh',
            location: 'Remote',
            period: 'Aug 2024 - May 2025',
            employmentType: 'Full-time',
            description:
                'Worked as a web developer for MetriStambh, creating their company portfolio and managing their website for project uploads and details. Gained expertise in website development, project management, and technical support during this role.',
            achievements: [
                "Developed and maintained MetriStambh's company portfolio and website",
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
        {
            title: 'Frontend Developer',
            company: 'CreativeSync Digital',
            location: 'Makati, Philippines',
            period: 'Jan 2023 - Jun 2024',
            employmentType: 'Contract',
            description:
                'Led UI implementation for multiple client-facing applications. Focused on responsive design, component-driven architecture, and optimizing performance across browsers and devices.',
            achievements: [
                'Developed scalable UI components using React and TailwindCSS',
                'Improved Lighthouse performance scores by up to 40%',
                'Collaborated with designers to refine UX workflows',
                'Reduced bundle size by applying code splitting and asset optimization',
            ],
            technologies: [
                'React.js',
                'Next.js',
                'TailwindCSS',
                'JavaScript',
                'Vercel',
            ],
        },
        {
            title: 'Full Stack Developer',
            company: 'CodeForge Solutions',
            location: 'Quezon City, Philippines',
            period: 'Jul 2022 - Dec 2023',
            employmentType: 'Part-time',
            description:
                'Handled full-stack development for internal tools and SaaS-based products. Responsible for API development, automation scripts, and database maintenance.',
            achievements: [
                'Built REST APIs improving workflow automation by 30%',
                'Integrated CI/CD pipelines for faster deployment cycles',
                'Implemented authentication and role-based access',
                'Designed relational database schemas for new app modules',
            ],
            technologies: [
                'Laravel',
                'MySQL',
                'React.js',
                'Docker',
                'GitHub Actions',
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
            className="relative w-full px-6 py-16"
        >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl">
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

                <div className="absolute top-30 bottom-0 left-8 hidden w-0.5 bg-gradient-to-b from-primary/40 via-blue-500/40 to-primary/40 md:block" />

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
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                                />

                                <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                                    <div className="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row">
                                        <div className="flex-1">
                                            <div className="mb-2 flex items-start gap-3">
                                                <div className="flex items-center justify-center rounded-lg bg-primary/5 p-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/10">
                                                    <Briefcase className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
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
                                                <div className="flex items-center gap-1.5 transition-all duration-300 hover:text-primary">
                                                    <MapPin className="h-4 w-4 text-primary transition-transform duration-300 hover:scale-125 hover:animate-bounce" />
                                                    <span>
                                                        {experience.location}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1.5 transition-all duration-300 hover:text-primary">
                                                    <Calendar className="h-4 w-4 text-primary transition-transform duration-300 hover:scale-125 hover:rotate-12" />
                                                    <span>
                                                        {experience.period}
                                                    </span>
                                                </div>
                                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/20 hover:shadow-sm">
                                                    {experience.employmentType}
                                                </span>
                                            </div>
                                        </div>

                                        {index === 0 && (
                                            <div className="animate-pulse-subtle flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 shadow-sm">
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

                                    <p className="mb-4 leading-relaxed text-gray-600">
                                        {experience.description}
                                    </p>

                                    <div className="mb-4">
                                        <div className="mb-3 flex items-center gap-2">
                                            <div className="rounded-md bg-primary/10 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                                                <Award className="h-4 w-4 text-primary/60" />
                                            </div>
                                            <h4 className="text-sm font-semibold text-gray-900">
                                                Key Achievements
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {experience.achievements.map(
                                                (achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="group/item flex items-start gap-2 text-sm text-gray-600 transition-all duration-300 hover:translate-x-1"
                                                    >
                                                        <TrendingUp className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60 transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12 group-hover/item:text-primary/50" />
                                                        <span className="leading-relaxed group-hover/item:text-gray-900">
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
                                                <Code className="h-4 w-4 text-primary/60" />
                                            </div>
                                            <h4 className="text-sm font-semibold text-gray-900">
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
                                                        className="group/tech relative cursor-default overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:border-primary/50 hover:from-primary/10 hover:to-primary/20 hover:text-primary hover:shadow-md"
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
                        <div className="absolute top-8 left-8 hidden h-4 w-4 -translate-x-1/2 md:block">
                            <div className="h-full w-full rounded-full bg-green-500 shadow-lg shadow-green-500/50">
                                <div className="absolute inset-0 animate-ping rounded-full bg-green-500 opacity-50" />
                            </div>
                        </div>

                        <div className="group/avail md:ml-20">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover/avail:opacity-100" />

                            <div className="relative overflow-hidden rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 via-white to-primary/5 p-6 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-green-300 hover:shadow-2xl">
                                <div className="pointer-events-none absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-green-400 to-primary/40 blur-3xl" />
                                    <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-gradient-to-tr from-primary/40 to-green-400 blur-3xl" />
                                </div>

                                <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-start gap-3">
                                            <div className="rounded-xl bg-gradient-to-br from-green-500 to-green-600 p-3 shadow-lg transition-all duration-300 group-hover/avail:scale-110 group-hover/avail:rotate-6 group-hover/avail:shadow-green-500/50">
                                                <Sparkles className="h-6 w-6 animate-pulse text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900">
                                                    Open to Opportunities
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-600">
                                                    Currently seeking new
                                                    challenges
                                                </p>
                                            </div>
                                        </div>

                                        <p className="leading-relaxed text-gray-700">
                                            I'm actively looking for exciting
                                            projects and full-time opportunities
                                            where I can contribute my skills in
                                            web development and create impactful
                                            solutions.
                                        </p>

                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm">
                                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                <span className="text-sm font-medium text-gray-700">
                                                    Immediate Start
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm">
                                                <Clock className="h-4 w-4 text-blue-600" />
                                                <span className="text-sm font-medium text-gray-700">
                                                    Flexible Hours
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm">
                                                <MapPin className="h-4 w-4 text-purple-600" />
                                                <span className="text-sm font-medium text-gray-700">
                                                    Remote/Hybrid
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 md:w-auto">
                                        {/* Email Button */}
                                        <Button
                                            asChild
                                            className="group/btn flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                                        >
                                            <a href="mailto:your-email@example.com">
                                                <Mail className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:rotate-12" />
                                                Email Me
                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </a>
                                        </Button>

                                        {/* Schedule Call Button */}
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="group/btn flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
                                        >
                                            <a href="#">
                                                <Calendar className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:-rotate-12" />
                                                Schedule Call
                                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                    </span>
                                    <span className="text-xs font-semibold text-green-700">
                                        Available Now
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
