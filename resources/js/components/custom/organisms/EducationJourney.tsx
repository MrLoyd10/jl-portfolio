import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Calendar, GraduationCap, School } from 'lucide-react';
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
                'Completed with Science stream, building a strong foundation in core subjects',
            icon: <BookOpen className="h-6 w-6" />,
            yearRange: '2020 - 2021',
            status: 'completed',
            achievements: [
                'Developed strong analytical and problem-solving skills',
                'Excellence in Mathematics and Science subjects',
            ],
        },
        {
            degree: 'Intermediate',
            institution: 'Army Public School Ahmedabad',
            period: '2021 - 2023',
            description:
                'Specialized in Physics, Chemistry and Mathematics with high distinction',
            icon: <GraduationCap className="h-6 w-6" />,
            yearRange: '2021 - 2023',
            status: 'completed',
            achievements: [
                'High distinction in PCM stream',
                'Advanced understanding of mathematical concepts',
                'Prepared foundation for engineering studies',
            ],
        },
        {
            degree: "Bachelor's Degree in Computer Science",
            institution: 'B.Tech, CMR University',
            period: '2023 - 2027',
            description:
                'Computer Science and Engineering, specializing in AI & ML with focus on cutting-edge technologies',
            icon: <School className="h-6 w-6" />,
            yearRange: '2023 - 2027',
            status: 'ongoing',
            achievements: [
                'Specialization in Artificial Intelligence & Machine Learning',
                'Building expertise in modern web technologies',
                'Active participation in coding projects and hackathons',
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
            id="education"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
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
                        subtitle="My academic background and qualifications"
                        icon={GraduationCap}
                    />
                </div>

                {/* Timeline */}
                <div className="relative mt-12">
                    {/* Animated Timeline Line */}
                    <div className="absolute inset-y-0 left-8 w-0.5 md:left-[180px]">
                        <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                        <div
                            className={`absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 transition-all duration-2000 ${
                                isVisible ? 'h-full' : 'h-0'
                            }`}
                        />
                    </div>

                    {/* Timeline Items */}
                    <div className="space-y-12">
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
    yearRange,
    achievements = [],
    status = 'completed',
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
    const iconColors = [
        { bg: 'bg-blue-500', ring: 'ring-blue-500/20' },
        { bg: 'bg-purple-500', ring: 'ring-purple-500/20' },
        { bg: 'bg-green-500', ring: 'ring-green-500/20' },
    ];

    const color = iconColors[index % iconColors.length];

    return (
        <div
            className={`relative flex items-start gap-8 transition-all duration-700 ${
                isVisible
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: `${200 + index * 150}ms` }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Year Label (Desktop) */}
            <div className="hidden w-40 pt-1 pr-4 text-right md:block">
                <div
                    className={`text-3xl font-bold transition-all duration-300 ${
                        isActive ? 'scale-110 text-primary' : 'text-gray-400'
                    }`}
                >
                    {yearRange}
                </div>
            </div>

            {/* Enhanced Timeline Dot */}
            <div className="absolute left-8 flex h-8 w-8 -translate-x-1/2 items-center justify-center md:left-[180px]">
                <div
                    className={`absolute h-full w-full rounded-full ${color.bg} transition-all duration-300 ${
                        isActive
                            ? 'scale-150 shadow-lg shadow-primary/50'
                            : 'scale-100'
                    }`}
                >
                    {isActive && (
                        <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                    )}
                </div>
                <div
                    className={`relative h-3 w-3 rounded-full bg-white ring-4 ${color.ring}`}
                />
            </div>

            {/* Content Card */}
            <div className="ml-16 flex-1 md:ml-6">
                {/* Year Label (Mobile) */}
                <div className="mb-3 text-2xl font-bold text-gray-400 md:hidden">
                    {yearRange}
                </div>

                <div className="group relative">
                    {/* Glow Effect */}
                    <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 ${
                            isActive ? 'opacity-100' : ''
                        }`}
                    />

                    {/* Card */}
                    <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-500 hover:border-primary/30 hover:shadow-xl">
                        <div className="flex items-start gap-4">
                            {/* Enhanced Icon */}
                            <div className="flex-shrink-0">
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${color.bg} text-white shadow-lg transition-all duration-300 ${
                                        isActive ? 'scale-110 rotate-6' : ''
                                    }`}
                                >
                                    {icon}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-4">
                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                    <div>
                                        <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                            {degree}
                                        </h3>
                                        <p className="flex items-center gap-2 text-sm text-gray-700">
                                            <GraduationCap className="h-4 w-4 text-primary" />
                                            {institution}
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Badge
                                            variant="outline"
                                            className="border-gray-300 transition-all duration-300 hover:border-primary hover:bg-primary/10"
                                        >
                                            <Calendar className="mr-1 h-3 w-3" />
                                            {period}
                                        </Badge>
                                        {status === 'ongoing' && (
                                            <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1 shadow-sm">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                                </span>
                                                <span className="text-xs font-semibold text-green-700">
                                                    Ongoing
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="leading-relaxed text-gray-600">
                                    {description}
                                </p>

                                {/* Achievements */}
                                {achievements && achievements.length > 0 && (
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Award className="h-4 w-4 text-primary" />
                                            <h4 className="text-sm font-semibold text-gray-900">
                                                Key Highlights
                                            </h4>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {achievements.map(
                                                (achievement, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm text-gray-600"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                        <span className="leading-relaxed">
                                                            {achievement}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                                className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 transition-all duration-1000 ${
                                    isActive ? 'w-full' : 'w-0'
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
