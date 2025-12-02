import { Badge } from '@/components/ui/badge';
import {
    Award,
    BookOpen,
    Calendar,
    GraduationCap,
    School,
    Sparkles,
    TrendingUp,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
interface EducationItemProps {
    degree: string;
    institution: string;
    period: string;
    description: string;
    icon: React.ReactNode;
    yearRange: string;
    achievements?: string[];
    status?: 'completed' | 'ongoing';
    gpa?: string;
    skills?: string[];
}

export function EducationJourney() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const education: EducationItemProps[] = [
        {
            degree: 'Matriculation',
            institution: 'Army Public School Ahmedabad',
            period: '2020 - 2021',
            description:
                'Completed with Science stream, building a strong foundation in core subjects and developing critical thinking abilities.',
            icon: <BookOpen className="h-6 w-6" />,
            yearRange: '2020 - 2021',
            status: 'completed',
            achievements: [
                'Developed strong analytical and problem-solving skills',
                'Excellence in Mathematics and Science subjects',
                'Built foundation for higher studies in STEM',
            ],
            skills: ['Mathematics', 'Science', 'Problem Solving'],
        },
        {
            degree: 'Intermediate (Class XII)',
            institution: 'Army Public School Ahmedabad',
            period: '2021 - 2023',
            description:
                'Specialized in Physics, Chemistry and Mathematics with high distinction, preparing for engineering entrance exams.',
            icon: <GraduationCap className="h-6 w-6" />,
            yearRange: '2021 - 2023',
            status: 'completed',
            achievements: [
                'High distinction in PCM stream',
                'Advanced understanding of mathematical concepts',
                'Prepared foundation for engineering studies',
                'Strong performance in competitive examinations',
            ],
            skills: [
                'Physics',
                'Chemistry',
                'Mathematics',
                'Analytical Thinking',
            ],
        },
        {
            degree: "Bachelor's Degree in Computer Science",
            institution: 'B.Tech, CMR University',
            period: '2023 - 2027',
            description:
                'Computer Science and Engineering, specializing in AI & ML with focus on cutting-edge technologies and practical application development.',
            icon: <School className="h-6 w-6" />,
            yearRange: '2023 - 2027',
            status: 'ongoing',
            gpa: '8.5/10',
            achievements: [
                'Specialization in Artificial Intelligence & Machine Learning',
                'Building expertise in modern web technologies',
                'Active participation in coding projects and hackathons',
                'Contributing to open-source projects',
                'Maintaining strong academic performance',
            ],
            skills: [
                'AI/ML',
                'Web Development',
                'DSA',
                'Software Engineering',
                'Cloud Computing',
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

    // Calculate stats
    const totalYears = 7; // 2020 - 2027
    const completedCount = education.filter(
        (e) => e.status === 'completed',
    ).length;
    const ongoingCount = education.filter((e) => e.status === 'ongoing').length;

    return (
        <section
            id="education"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Enhanced Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="absolute bottom-1/4 -left-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/5 blur-3xl"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <div
                    className={`mb-12 transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-12"
                        title="Education Journey"
                        subtitle="Building a strong foundation through continuous learning and academic excellence"
                        icon={GraduationCap}
                    />
                </div>

                {/* Timeline */}
                <div className="relative mt-12">
                    {/* Animated Timeline Line with Gradient */}
                    <div className="absolute inset-y-0 left-8 w-1 md:left-[200px]">
                        {/* Background line */}
                        <div className="h-full w-full rounded-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />
                        {/* Animated gradient line */}
                        <div
                            className={`absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-primary to-blue-500 shadow-lg transition-all duration-[2000ms] ease-out ${
                                isVisible ? 'h-full' : 'h-0'
                            }`}
                        />
                        {/* Glowing effect */}
                        <div
                            className={`absolute top-0 left-1/2 w-2 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary to-blue-500 opacity-50 blur-sm transition-all duration-[2000ms] ease-out ${
                                isVisible ? 'h-full' : 'h-0'
                            }`}
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-16">
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

                    {/* End Cap */}
                    <div
                        className={`absolute bottom-0 left-8 -translate-x-1/2 transition-all duration-700 md:left-[200px] ${
                            isVisible
                                ? 'scale-100 opacity-100'
                                : 'scale-0 opacity-0'
                        }`}
                        style={{ transitionDelay: '2000ms' }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping rounded-full bg-primary/50 opacity-75" />
                            <div className="relative h-6 w-6 rounded-full bg-gradient-to-br from-primary to-blue-600 shadow-lg" />
                        </div>
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
    yearRange,
    achievements = [],
    status = 'completed',
    gpa,
    skills = [],
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
    const gradientColors = [
        {
            bg: 'from-blue-500 to-blue-600',
            ring: 'ring-blue-500/30',
            glow: 'shadow-blue-500/50',
            light: 'bg-blue-500/10',
        },
        {
            bg: 'from-purple-500 to-purple-600',
            ring: 'ring-purple-500/30',
            glow: 'shadow-purple-500/50',
            light: 'bg-purple-500/10',
        },
        {
            bg: 'from-green-500 to-green-600',
            ring: 'ring-green-500/30',
            glow: 'shadow-green-500/50',
            light: 'bg-green-500/10',
        },
    ];

    const color = gradientColors[index % gradientColors.length];

    return (
        <div
            className={`relative flex items-start gap-8 transition-all duration-700 ${
                isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: `${400 + index * 200}ms` }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Year Label (Desktop) */}
            <div className="hidden w-44 pt-1 pr-8 text-right md:block">
                <div className="space-y-2">
                    <div
                        className={`text-4xl font-bold transition-all duration-300 ${
                            isActive
                                ? 'scale-110 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'
                                : 'text-gray-400'
                        }`}
                    >
                        {yearRange.split(' - ')[0]}
                    </div>
                    <div
                        className={`h-0.5 w-full rounded-full transition-all duration-300 ${
                            isActive ? 'bg-primary' : 'bg-gray-300'
                        }`}
                    />
                    <div
                        className={`text-2xl font-semibold transition-all duration-300 ${
                            isActive ? 'text-primary' : 'text-gray-400'
                        }`}
                    >
                        {yearRange.split(' - ')[1]}
                    </div>
                </div>
            </div>

            {/* Enhanced Timeline Dot with Pulsing Ring */}
            <div className="absolute left-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center md:left-[200px]">
                {/* Outer pulsing ring */}
                {isActive && (
                    <>
                        <div
                            className={`absolute h-16 w-16 animate-ping rounded-full bg-gradient-to-br ${color.bg} opacity-20`}
                        />
                        <div
                            className={`absolute h-12 w-12 animate-pulse rounded-full bg-gradient-to-br ${color.bg} opacity-30`}
                        />
                    </>
                )}

                {/* Main dot with gradient */}
                <div
                    className={`absolute h-full w-full rounded-full bg-gradient-to-br ${color.bg} shadow-lg transition-all duration-300 ${
                        isActive ? `scale-150 ${color.glow}` : 'scale-100'
                    }`}
                />

                {/* Inner white dot */}
                <div
                    className={`relative h-4 w-4 rounded-full bg-white ring-4 ${color.ring} shadow-inner`}
                >
                    {status === 'ongoing' && (
                        <div className="absolute inset-0 animate-pulse rounded-full bg-green-400" />
                    )}
                </div>
            </div>

            {/* Content Card */}
            <div className="ml-16 flex-1 md:ml-6">
                {/* Year Label (Mobile) */}
                <div className="mb-4 flex items-center gap-3 md:hidden">
                    <div className="text-3xl font-bold text-gray-400">
                        {yearRange}
                    </div>
                </div>

                <div className="group relative">
                    {/* Enhanced Glow Effect */}
                    <div
                        className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 blur-2xl transition-all duration-500 ${
                            isActive ? 'opacity-100' : ''
                        }`}
                    />

                    {/* Main Card with Enhanced Design */}
                    <div className="relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all duration-500 hover:border-primary/30 hover:shadow-2xl">
                        {/* Top accent bar */}
                        <div
                            className={`h-2 w-full bg-gradient-to-r ${color.bg}`}
                        />

                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                {/* Enhanced Icon with Gradient Background */}
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        {/* Glow ring */}
                                        {isActive && (
                                            <div
                                                className={`absolute -inset-2 animate-pulse rounded-xl bg-gradient-to-br ${color.bg} opacity-30 blur-md`}
                                            />
                                        )}
                                        {/* Icon container */}
                                        <div
                                            className={`relative flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-white shadow-lg transition-all duration-300 ${
                                                isActive
                                                    ? 'scale-110 rotate-6'
                                                    : ''
                                            }`}
                                        >
                                            {icon}
                                        </div>
                                        {/* Sparkle on hover */}
                                        {isActive && (
                                            <div className="absolute -top-1 -right-1">
                                                <Sparkles className="h-5 w-5 animate-pulse fill-yellow-400 text-yellow-400" />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    {/* Header Section */}
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                                {degree}
                                            </h3>
                                            <p className="flex items-center gap-2 text-base font-medium text-gray-700">
                                                <GraduationCap className="h-5 w-5 text-primary" />
                                                {institution}
                                            </p>
                                        </div>

                                        {/* Badges Container */}
                                        <div className="flex flex-wrap gap-2">
                                            <Badge
                                                variant="outline"
                                                className="border-gray-300 bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10"
                                            >
                                                <Calendar className="mr-1.5 h-3.5 w-3.5" />
                                                {period}
                                            </Badge>

                                            {gpa && (
                                                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
                                                    <TrendingUp className="mr-1.5 h-3.5 w-3.5" />
                                                    GPA: {gpa}
                                                </Badge>
                                            )}

                                            {status === 'ongoing' && (
                                                <div className="flex items-center gap-2 rounded-full border-2 border-green-200 bg-green-50 px-3 py-1.5 shadow-sm">
                                                    <span className="relative flex h-2.5 w-2.5">
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                                                    </span>
                                                    <span className="text-xs font-bold text-green-700">
                                                        In Progress
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-base leading-relaxed text-gray-600">
                                        {description}
                                    </p>

                                    {/* Skills Tags */}
                                    {skills && skills.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill, idx) => (
                                                <Badge
                                                    key={idx}
                                                    variant="outline"
                                                    className="border-primary/30 bg-primary/5 text-primary transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}

                                    {/* Achievements Section */}
                                    {achievements &&
                                        achievements.length > 0 && (
                                            <div className="space-y-3 rounded-xl bg-gray-50 p-4">
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className={`rounded-lg ${color.light} p-1.5`}
                                                    >
                                                        <Award className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <h4 className="text-sm font-bold text-gray-900">
                                                        Key Highlights &
                                                        Achievements
                                                    </h4>
                                                </div>
                                                <ul className="space-y-2">
                                                    {achievements.map(
                                                        (achievement, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start gap-3 text-sm text-gray-600 transition-colors duration-300 hover:text-gray-900"
                                                            >
                                                                <div className="mt-1.5 flex-shrink-0">
                                                                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-blue-500 shadow-sm" />
                                                                </div>
                                                                <span className="leading-relaxed">
                                                                    {
                                                                        achievement
                                                                    }
                                                                </span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="relative h-1.5 w-full overflow-hidden bg-gray-100">
                            <div
                                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${color.bg} transition-all duration-1000 ${
                                    isActive ? 'w-full' : 'w-0'
                                }`}
                            />
                        </div>

                        {/* Corner Decoration */}
                        <div
                            className={`absolute top-0 right-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-bl ${color.light} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
