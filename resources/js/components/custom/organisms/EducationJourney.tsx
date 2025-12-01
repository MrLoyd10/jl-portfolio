import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, School } from 'lucide-react';
import React from 'react';

interface EducationItemProps {
    degree: string;
    institution: string;
    period: string;
    description: string;
    icon: React.ReactNode;
    yearRange: string;
}

export const EducationJourney = () => {
    const education: EducationItemProps[] = [
        {
            degree: 'Matriculation',
            institution: 'Army Public School Ahmedabad',
            period: '2020 - 2021',
            description: 'Completed with Science stream',
            icon: <BookOpen className="w-6 h-6 text-blue-400" />,
            yearRange: '2020 - 2021',
        },
        {
            degree: 'Intermediate',
            institution: 'Army Public School Ahmedabad',
            period: '2021 - 2023',
            description:
                'Specialized in Physics, Chemistry and Mathematics with high distinction',
            icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
            yearRange: '2021 - 2023',
        },
        {
            degree: "Bachelor's Degree",
            institution: 'B.Tech, CMR University',
            period: '2023 - 2027',
            description:
                'Computer Science and Engineering, specializing in AI & ML',
            icon: <School className="w-6 h-6 text-green-400" />,
            yearRange: '2023 - 2027',
        },
    ];

    return (
        <section
            id="education"
            className="mx-auto px-6 py-10 w-full max-w-6xl min-h-screen"
        >
            <div>
                {/* Section Header */}
                <div className="mb-4">
                    <h2 className="flex items-center gap-2 mb-2 font-bold text-2xl text-primary/80">
                        <GraduationCap className="w-6 h-6" />
                        Education Journey
                    </h2>
                    <p className="text-gray-800 text-lg">
                        My academic background and qualifications
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-12">
                    {/* Timeline Line */}
                    <div className="left-8 md:left-[180px] absolute inset-y-0 border-gray-300 border-l-2" />

                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {education.map((item, index) => (
                            <EducationItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const EducationItem = ({
    degree,
    institution,
    period,
    description,
    icon,
    yearRange,
}: EducationItemProps) => {
    return (
        <div className="relative flex items-start gap-8">
            {/* Year Label (Desktop) */}
            <div className="md:block text-right hidden pt-1 w-40 font-bold text-3xl text-gray-400">
                {yearRange}
            </div>

            {/* Timeline Dot */}
            <div className="left-8 md:left-[180px] absolute flex justify-center items-center bg-gray-700 border-4 border-gray-300 rounded-full w-8 h-8 -translate-x-1/2">
                <div className="bg-gray-400 rounded-full w-3 h-3" />
            </div>

            {/* Content Card */}
            <div className="flex-1 ml-16 md:ml-0">
                {/* Year Label (Mobile) */}
                <div className="md:hidden mb-3 font-bold text-2xl text-gray-400">
                    {yearRange}
                </div>

                <div className="bg-gray-50 p-6 border border-gray-200 hover:border-gray-400 rounded-lg transition-colors">
                    <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="flex justify-center items-center bg-gray-700 rounded-lg w-14 h-14">
                                {icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                            {/* Header */}
                            <div className="flex flex-wrap justify-between items-start gap-2">
                                <div>
                                    <h3 className="mb-1 font-bold text-xl">
                                        {degree}
                                    </h3>
                                    <p className="flex items-center gap-2 text-gray-800 text-sm">
                                        <GraduationCap className="w-4 h-4" />
                                        {institution}
                                    </p>
                                </div>
                                <Badge
                                    variant="outline"
                                    className="border-slate-600"
                                >
                                    {period}
                                </Badge>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
