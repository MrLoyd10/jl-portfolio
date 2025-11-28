import { Award } from 'lucide-react';
import { SectionHeader } from '../atoms/SectionHeader';
import {
    AchievementCard,
    AchievementCardProps,
} from '../molecules/AchievementCards';

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
