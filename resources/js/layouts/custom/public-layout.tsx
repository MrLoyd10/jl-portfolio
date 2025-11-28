import { Header } from '@/components/custom/organisms/Header';

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="flex flex-col items-center mx-auto min-h-screen container">
            {children}
        </main>
    );
};

export const PublicHeaderLayout = ({
    withSpacer = true,
}: {
    withSpacer?: boolean;
}) => {
    return (
        <>
            <Header />
            {withSpacer && <hr className="h-[74px]" />}
        </>
    );
};

export const PublicMainContentLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return <main className="flex flex-col flex-1 w-full">{children}</main>;
};

export const PublicFooterLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <footer className="bg-transparent px-4 py-6 w-full">{children}</footer>
    );
};
