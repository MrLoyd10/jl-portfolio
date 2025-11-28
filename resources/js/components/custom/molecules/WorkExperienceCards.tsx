import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import React from 'react';

export interface ExperienceCardProps {
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

export const ExperienceCard = ({
    title,
    company,
    location,
    period,
    employmentType,
    description,
    achievements,
    technologies,
    icon,
}: ExperienceCardProps) => {
    return (
        <div className="bg-gray-50 p-6 border border-gray-200 hover:border-gray-400 rounded-lg transition-colors">
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                    <div className="flex justify-center items-center bg-gray-700 rounded-lg w-14 h-14">
                        {icon || (
                            <Briefcase className="w-7 h-7 text-gray-100" />
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                    {/* Header */}
                    <div>
                        <h3 className="mb-2 font-bold text-xl">{title}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-gray-800 text-sm">
                            <span className="font-semibold">{company}</span>
                            <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {location}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {period}
                            </span>
                            <Badge
                                variant="outline"
                                className="border-slate-600"
                            >
                                {employmentType}
                            </Badge>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                        <h4 className="flex items-center gap-2 mb-3 font-semibold text-lg">
                            Key Achievements:
                        </h4>
                        <ul className="space-y-2 text-gray-600">
                            {achievements.map((achievement, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <span className="flex-shrink-0 bg-primary mt-2 rounded-full w-2 h-2" />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h4 className="mb-2 font-semibold text-sm">
                            Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2 text-gray-800">
                            {technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="border-slate-600"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AvailabilityCard = () => {
    let availabilityBadges = [
        {
            label: 'Open to Work',
            variant: 'default' as const,
            color: 'bg-green-600 hover:bg-green-700',
        },
        { label: 'Remote Friendly', variant: 'outline' as const },
        { label: 'Full-time', variant: 'outline' as const },
        {
            label: 'Freelance',
            variant: 'outline' as const,
            color: 'border-yellow-600 text-yellow-600',
        },
    ];

    availabilityBadges = []; // To test empty state

    if (!availabilityBadges.length) {
        return null;
    }

    return (
        <div className="bg-gray-50 p-6 border border-gray-200 hover:border-gray-400 rounded-lg transition-colors">
            <h3 className="flex items-center gap-3 mb-4 font-bold text-2xl">
                <span className="bg-green-500 rounded-full w-3 h-3 animate-pulse" />
                Currently Available
            </h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
                I'm actively seeking new opportunities to contribute to
                innovative projects and collaborate with talented teams. Open to
                full-time positions, freelance projects, and consulting
                opportunities.
            </p>
            <div className="flex flex-wrap gap-2">
                {availabilityBadges.map((badge, index) => (
                    <Badge
                        key={index}
                        variant={badge.variant}
                        className={badge.color || 'border-slate-600'}
                    >
                        {badge.label}
                    </Badge>
                ))}
            </div>
        </div>
    );
};
