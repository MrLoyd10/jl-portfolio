import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../atoms/SectionHeader';

interface AchievementCardProps {
    title: string;
    issuer: string;
    date: string;
    description: string;
    certificateId?: string;
    image: string;
    link?: string;
}

export const Achievements = () => {
    const achievements: AchievementCardProps[] = [
        {
            title: 'Job Ready Cohort',
            issuer: 'Sheryians Coding School',
            date: 'Nov 03, 2025',
            description:
                'Completed comprehensive training in Frontend Development, Data Structures & Algorithms, Backend Development, and DevOps practices including CI/CD, Docker, and Kubernetes.',
            certificateId: '96015788',
            image: 'https://picsum.photos/seed/cert1/600/400',
            link: '#',
        },
        {
            title: 'JavaScript (Intermediate)',
            issuer: 'HackerRank',
            date: 'Aug 09, 2025',
            description:
                'Passed the HackerRank skill certification test demonstrating intermediate proficiency in JavaScript programming.',
            certificateId: '8DD58332539',
            image: 'https://picsum.photos/seed/cert2/600/400',
            link: '#',
        },
        {
            title: 'Frontend Developer (React)',
            issuer: 'HackerRank',
            date: 'Nov 03, 2025',
            description:
                'Passed the HackerRank role certification test for Frontend Developer specializing in React.',
            certificateId: '89D04252665',
            image: 'https://picsum.photos/seed/cert3/600/400',
            link: '#',
        },
        {
            title: 'Complete JavaScript Programming: From Novice to Expert',
            issuer: 'Udemy - Knowledge Nest',
            date: 'June 6, 2025',
            description:
                'Completed comprehensive JavaScript course covering fundamentals to advanced concepts. Total duration: 3.5 hours.',
            image: 'https://picsum.photos/seed/cert4/600/400',
            link: '#',
        },
    ];

    return (
        <section
            id="achievements"
            className="mx-auto px-6 py-10 max-w-6xl min-h-screen"
        >
            <div>
                <SectionHeader
                    mainDivClassName="mb-4"
                    title="Achievements & Badges"
                    subtitle="Professional certifications and accomplishments"
                    icon={Award}
                />

                {/* Achievement Cards Grid */}
                <div className="gap-6 grid md:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <AchievementCard key={index} {...achievement} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const AchievementCard = ({
    title,
    issuer,
    date,
    description,
    certificateId,
    image,
    link,
}: AchievementCardProps) => {
    return (
        <div className="group bg-gray-50 border border-gray-200 hover:border-gray-400 rounded-lg transition-all overflow-hidden">
            {/* Certificate Image */}
            <div className="relative bg-gray-100 w-full h-48 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} certificate`}
                    className="w-full h-full transition-transform object-cover group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Header */}
                <div>
                    <h3 className="mb-2 font-bold text-lg leading-tight">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-800 text-sm">
                        <span className="font-semibold">{issuer}</span>
                        <span>•</span>
                        <span>{date}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-2">
                    {certificateId && (
                        <Badge variant="outline" className="border-slate-600">
                            ID: {certificateId}
                        </Badge>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary text-sm hover:underline"
                        >
                            View Certificate
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
