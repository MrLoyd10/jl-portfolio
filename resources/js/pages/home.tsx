import { Achievements } from '@/components/custom/organisms/Achievements';
import { ContactMe } from '@/components/custom/organisms/ContactMe';
import { EducationJourney } from '@/components/custom/organisms/EducationJourney';
import { FeaturedProjects } from '@/components/custom/organisms/FeaturedProjects';
import { Header } from '@/components/custom/organisms/Header';
import { ProfileSummary } from '@/components/custom/organisms/ProfileSummary';
import { TechArsenal } from '@/components/custom/organisms/TechArsenal';
import { WorkExperience } from '@/components/custom/organisms/WorkExperience';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Home({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Home" />
            <Header />
            <main className="min-h-screen">
                <div className="flex w-full flex-1 flex-col">
                    <ProfileSummary />
                    <WorkExperience />
                    <FeaturedProjects />
                    <Achievements />
                    <TechArsenal />
                    <EducationJourney />
                    <ContactMe />
                </div>
            </main>
        </>
    );
}
