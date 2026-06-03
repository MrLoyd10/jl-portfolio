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
            title: 'Introduction to Computer Science',
            issuer: 'Harvard University',
            date: 'Year 2023',
            description:
                "Completed Harvard University's renowned CS50 online course, covering fundamental computer science concepts, algorithms, data structures, and programming principles.",
            image: '/certificates/Certificate - CS50x.jpg',
            link: '/certificates/Certificate - CS50x.pdf',
            buttonLabel: 'View Certificate',
        },
        {
            title: 'Academic & Professional Awards',
            issuer: 'College of Saint Lawrence & ZAP I.T. Services',
            date: 'Year 2024',
            description:
                'Departmental Awardee - Recognized for outstanding academic performance and contributions within the Computer Science department. Leadership Awardee - Awarded for demonstrating exceptional leadership qualities and positive influence among peers. Best in Internship - Recognized as the top-performing intern at ZAP I.T. Services during OJT period.',
            image: '/certificates/college-award.png',
            link: '/certificates/college-award.png',
            buttonLabel: 'View Photo',
        },
        {
            title: 'Agile Scrum Foundation',
            issuer: 'Simplilearn',
            date: 'April 2024',
            description:
                'Completed online seminar on Agile Scrum Foundation, learning key principles of agile methodology, sprint planning, and team collaboration in software development.',
            image: '/certificates/Certificate - Agile Scrum Foundation.jpg',
            link: '/certificates/Certificate - Agile Scrum Foundation.pdf',
            buttonLabel: 'View Certificate',
        },
        {
            title: 'Introduction to Graphic Design; Basics of UI/UX',
            issuer: 'Simplilearn',
            date: 'April 2024',
            description:
                'Completed online seminar covering fundamental principles of graphic design and user interface/user experience design basics.',
            image: '/certificates/Certificate - Introduction to Graphic Design Basics of UIUX.jpg',
            link: '/certificates/Certificate - Introduction to Graphic Design Basics of UIUX.pdf',
            buttonLabel: 'View Certificate',
        },
        // {
        //     title: 'Basic Office Application Software',
        //     issuer: 'Arellano University',
        //     date: 'Year 2017',
        //     description:
        //         'Completed face-to-face course on basic office application software, covering essential productivity tools and business software applications.',
        //     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
        //     link: '#',
        //     buttonLabel: 'View Certificate',
        // },
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
            id="awards"
            ref={sectionRef}
            className="relative w-full px-6 py-12"
        >
            {/* Background decoration - using your theme colors */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute bottom-1/3 -left-32 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Section Header */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-8"
                        title="Achievements & Certifications"
                        subtitle="Professional milestones and continuous learning journey"
                        icon={Award}
                    />
                </div>

                {/* Achievement Cards Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
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
