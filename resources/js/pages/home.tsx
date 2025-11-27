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
                <PublicHeaderLayout />

                <PublicMainContentLayout>Hello</PublicMainContentLayout>
            </PublicLayout>
        </>
    );
}
