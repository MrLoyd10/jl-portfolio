// Achievements.tsx
import { Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';
import {
    AchievementCard,
    AchievementCardProps,
} from '../molecules/AchievementCards';

export const Achievements = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const achievements: AchievementCardProps[] = [
        {
            title: 'Job Ready Cohort',
            issuer: 'Sheryians Coding School',
            date: 'Nov 03, 2025',
            description:
                'Completed comprehensive training in Frontend Development, Data Structures & Algorithms, Backend Development, and DevOps practices including CI/CD, Docker, and Kubernetes.',
            certificateId: '96015788',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
            link: '#',
        },
        {
            title: 'JavaScript (Intermediate)',
            issuer: 'HackerRank',
            date: 'Aug 09, 2025',
            description:
                'Passed the HackerRank skill certification test demonstrating intermediate proficiency in JavaScript programming.',
            certificateId: '8DD58332539',
            image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
            link: '#',
        },
        {
            title: 'Frontend Developer (React)',
            issuer: 'HackerRank',
            date: 'Nov 03, 2025',
            description:
                'Passed the HackerRank role certification test for Frontend Developer specializing in React.',
            certificateId: '89D04252665',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
            link: '#',
        },
        {
            title: 'Complete JavaScript Programming: From Novice to Expert',
            issuer: 'Udemy - Knowledge Nest',
            date: 'June 6, 2025',
            description:
                'Completed comprehensive JavaScript course covering fundamentals to advanced concepts. Total duration: 3.5 hours.',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
            link: '#',
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
            id="achievements"
            ref={sectionRef}
            className="relative w-full px-6 py-16"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />
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
                        title="Achievements & Badges"
                        subtitle="Professional certifications and accomplishments"
                        icon={Award}
                    />
                </div>

                {/* Achievement Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${
                                isVisible
                                    ? 'translate-y-0 opacity-100'
                                    : 'translate-y-10 opacity-0'
                            }`}
                            style={{
                                transitionDelay: `${200 + index * 100}ms`,
                            }}
                        >
                            <AchievementCard {...achievement} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
