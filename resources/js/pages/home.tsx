import { Achievements } from '@/components/custom/organisms/Achievements';
import { FeaturedProjects } from '@/components/custom/organisms/FeaturedProjects';
import { ProfileSummary } from '@/components/custom/organisms/ProfileSummary';
import { WorkExperience } from '@/components/custom/organisms/WorkExperience';
import {
    PublicHeaderLayout,
    PublicLayout,
    PublicMainContentLayout,
} from '@/layouts/custom/public-layout';
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
            <PublicLayout>
                <PublicHeaderLayout withSpacer={false} />

                <PublicMainContentLayout>
                    <ProfileSummary />
                    <WorkExperience />
                    <FeaturedProjects />
                    <Achievements />
                </PublicMainContentLayout>
            </PublicLayout>
        </>
    );
}
