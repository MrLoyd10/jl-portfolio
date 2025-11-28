import { Briefcase } from 'lucide-react';
import { SectionHeader } from '../atoms/SectionHeader';
import {
    AvailabilityCard,
    ExperienceCard,
    ExperienceCardProps,
} from '../molecules/WorkExperienceCards';

export const WorkExperience = () => {
    const experiences: ExperienceCardProps[] = [
        {
            title: 'Web Developer',
            company: 'MetriStambh',
            location: 'Remote',
            period: 'Aug 2024 - May 2025',
            employmentType: 'Full-time',
            description:
                'Worked as a web developer for Metristanbh, creating their company portfolio and managing their website for project uploads and details. Gained expertise in website development, project management, and technical support during this role.',
            achievements: [
                "Developed and maintained Metristanbh's company portfolio and website",
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
    ];

    return (
        <section
            id="experience"
            className="mx-auto px-6 py-10 max-w-6xl min-h-screen"
        >
            <div>
                <SectionHeader
                    mainDivClassName="mb-4"
                    title="Work Experience"
                    subtitle="My professional journey and key accomplishments"
                    icon={Briefcase}
                />

                {/* Experience Cards */}
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} {...experience} />
                    ))}

                    {/* Availability Card */}
                    <AvailabilityCard />
                </div>
            </div>
        </section>
    );
};
