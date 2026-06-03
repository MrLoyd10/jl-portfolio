import { Badge } from '@/components/ui/badge';
import {
    Award,
    BookOpen,
    Calendar,
    GraduationCap,
    School,
    Sparkles,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface EducationItemProps {
    degree: string;
    institution: string;
    period: string;
    description: string;
    icon: React.ReactNode;
    achievements?: string[];
    status?: 'completed' | 'ongoing';
    gpa?: string;
    skills?: string[];
    colorIndex: number;
}

const COLOR_CONFIGS = [
    {
        dot: 'from-slate-400 to-slate-500',
        badge: 'bg-slate-50 text-slate-600 border-slate-200',
        accent: 'bg-slate-400',
        light: 'bg-slate-50',
        text: 'text-slate-500',
        bar: 'from-slate-400 to-slate-500',
    },
    {
        dot: 'from-indigo-300 to-indigo-400',
        badge: 'bg-indigo-50 text-indigo-500 border-indigo-100',
        accent: 'bg-indigo-300',
        light: 'bg-indigo-50/60',
        text: 'text-indigo-400',
        bar: 'from-indigo-300 to-indigo-400',
    },
    {
        dot: 'from-emerald-400 to-emerald-500',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        accent: 'bg-emerald-500',
        light: 'bg-emerald-50',
        text: 'text-emerald-600',
        bar: 'from-emerald-500 to-emerald-600',
    },
    {
        dot: 'from-primary to-blue-600',
        badge: 'bg-primary/10 text-primary border-primary/20',
        accent: 'bg-primary',
        light: 'bg-primary/5',
        text: 'text-primary',
        bar: 'from-primary to-blue-600',
    },
] as const;

export function EducationJourney() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const education: EducationItemProps[] = [
        {
            degree: 'Elementary Education',
            institution: 'Masville Elementary School',
            period: '2008 – 2014',
            description:
                'Completed primary education, building foundational knowledge and developing early interest in technology and problem-solving.',
            icon: <BookOpen className="h-4 w-4" />,
            status: 'completed',
            achievements: [],
            skills: [],
            colorIndex: 0,
        },
        {
            degree: 'Junior High School',
            institution: 'Masville National High School',
            period: '2014 – 2018',
            description:
                'Completed secondary education with focus on academic excellence and preparation for specialized studies.',
            icon: <School className="h-4 w-4" />,
            status: 'completed',
            achievements: [],
            skills: [],
            colorIndex: 1,
        },
        {
            degree: 'Senior High School — ABM Strand',
            institution: 'APEC School Sta. Rita, Parañaque City',
            period: '2018 – 2020',
            description:
                'Specialized in Accountancy, Business, and Management, developing business acumen and analytical skills that complement technical expertise.',
            icon: <GraduationCap className="h-4 w-4" />,
            status: 'completed',
            achievements: [
                'Completed Accountancy strand with distinction',
                'Developed strong analytical and business skills',
                'Enhanced mathematical and logical reasoning abilities',
            ],
            skills: [
                'Accounting',
                'Business Management',
                'Financial Analysis',
                'Critical Thinking',
            ],
            colorIndex: 2,
        },
        {
            degree: 'BS Computer Science',
            institution: 'College of Saint Lawrence, Balagtas, Bulacan',
            period: '2020 – 2024',
            description:
                'Graduated with a BS in Computer Science, specializing in full-stack web development with hands-on experience in modern JavaScript frameworks and backend technologies.',
            icon: <GraduationCap className="h-4 w-4" />,
            status: 'completed',
            achievements: [
                'Completed thesis on RFID College Attendance System',
                'Gained fundamentals of React, Vue, C#, and Laravel PHP',
                'Completed Harvard CS50 Introduction to Computer Science',
                'Received Best in Internship Award',
                'Departmental Awardee and Leadership Awardee',
            ],
            skills: [
                'JavaScript/TypeScript',
                'React & Vue',
                'Laravel PHP',
                'MySQL',
                'Git & GitHub',
            ],
            colorIndex: 3,
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="education"
            ref={sectionRef}
            className="relative w-full px-6 py-12"
        >
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-1/4 -left-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/5 blur-3xl"
                    style={{ animationDelay: '2s' }}
                />
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
                        mainDivClassName="mb-10"
                        title="Education Journey"
                        subtitle="Building a strong foundation through continuous learning and academic excellence"
                        icon={GraduationCap}
                    />
                </div>

                {/* Timeline */}
                <div className="relative mt-8">
                    {/* Vertical line */}
                    <div className="absolute top-3 bottom-3 left-[15px] w-0.5 md:left-[19px]">
                        <div className="h-full w-full rounded-full bg-gray-200" />
                        <div
                            className={`absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-primary/70 to-blue-500/70 transition-all duration-[1800ms] ease-out ${
                                isVisible ? 'h-full' : 'h-0'
                            }`}
                        />
                    </div>

                    <div className="space-y-5">
                        {education.map((item, index) => (
                            <EducationItem
                                key={index}
                                {...item}
                                index={index}
                                isVisible={isVisible}
                                isActive={activeIndex === index}
                                onHover={() => setActiveIndex(index)}
                                onLeave={() => setActiveIndex(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const EducationItem = ({
    degree,
    institution,
    period,
    description,
    icon,
    achievements = [],
    status,
    gpa,
    skills = [],
    colorIndex,
    index,
    isVisible,
    isActive,
    onHover,
    onLeave,
}: EducationItemProps & {
    index: number;
    isVisible: boolean;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
}) => {
    const cfg = COLOR_CONFIGS[colorIndex % COLOR_CONFIGS.length];
    const hasDetails = achievements.length > 0 || skills.length > 0;

    return (
        <div
            className={`relative flex items-start gap-5 transition-all duration-500 ${
                isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Timeline dot */}
            <div className="relative z-10 mt-3.5 flex-shrink-0">
                <div
                    className={`h-[30px] w-[30px] rounded-full bg-gradient-to-br ${cfg.dot} flex items-center justify-center text-white shadow-md transition-all duration-300 ${
                        isActive ? 'scale-110 shadow-lg' : 'scale-100'
                    }`}
                >
                    {icon}
                </div>
            </div>

            {/* Card */}
            <div className="group relative min-w-0 flex-1 pb-1">
                <div
                    className={`relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 ${
                        isActive
                            ? 'border-gray-300 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                >
                    {/* Top accent */}
                    <div
                        className={`h-0.5 w-full bg-gradient-to-r ${cfg.bar} transition-all duration-500 ${
                            isActive
                                ? 'opacity-100'
                                : 'opacity-40 group-hover:opacity-70'
                        }`}
                    />

                    <div className="p-4">
                        {/* Header row */}
                        <div className="flex flex-wrap items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                    <h3
                                        className={`text-base leading-snug font-bold text-gray-900 transition-colors duration-200 ${
                                            isActive
                                                ? cfg.text
                                                : 'group-hover:text-gray-700'
                                        }`}
                                    >
                                        {degree}
                                    </h3>
                                    {status === 'ongoing' && (
                                        <div className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2 py-0.5">
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                                            </span>
                                            <span className="text-[10px] font-semibold text-green-700">
                                                In Progress
                                            </span>
                                        </div>
                                    )}
                                    {isActive && hasDetails && (
                                        <Sparkles className="h-3.5 w-3.5 animate-pulse fill-yellow-400 text-yellow-400" />
                                    )}
                                </div>

                                <p className="mt-0.5 flex items-center gap-1.5 text-sm text-gray-500">
                                    <GraduationCap
                                        className={`h-3.5 w-3.5 flex-shrink-0 ${cfg.text}`}
                                    />
                                    {institution}
                                </p>
                            </div>

                            {/* Period + GPA */}
                            <div className="flex flex-wrap items-center gap-1.5">
                                <Badge
                                    variant="outline"
                                    className="border-gray-200 bg-gray-50 text-xs text-gray-500"
                                >
                                    <Calendar className="mr-1 h-3 w-3" />
                                    {period}
                                </Badge>
                                {gpa && (
                                    <Badge
                                        className={`text-xs ${cfg.badge} border`}
                                    >
                                        GPA {gpa}
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="mt-2.5 text-sm leading-relaxed text-gray-500">
                            {description}
                        </p>

                        {/* Skills */}
                        {skills.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className={`rounded-md border px-2 py-0.5 text-[11px] font-medium transition-all duration-200 hover:scale-105 ${cfg.badge}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Achievements */}
                        {achievements.length > 0 && (
                            <div
                                className={`mt-3 rounded-lg p-3 transition-colors duration-300 ${
                                    isActive ? cfg.light : 'bg-gray-50'
                                }`}
                            >
                                <div className="mb-2 flex items-center gap-1.5">
                                    <Award
                                        className={`h-3.5 w-3.5 ${cfg.text}`}
                                    />
                                    <span className="text-xs font-semibold text-gray-700">
                                        Key Highlights
                                    </span>
                                </div>
                                <ul className="space-y-1.5">
                                    {achievements.map((achievement, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start gap-2 text-xs text-gray-600"
                                        >
                                            <div
                                                className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${cfg.accent}`}
                                            />
                                            <span className="leading-relaxed">
                                                {achievement}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
