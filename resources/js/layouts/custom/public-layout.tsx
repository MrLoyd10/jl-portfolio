import { Header } from '@/components/custom/organisms/Header';

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="container mx-auto flex min-h-screen flex-col items-center">
            {children}
        </main>
    );
};

export const PublicHeaderLayout = () => {
    return (
        <>
            <Header />
            <hr className="h-[74px]" />
        </>
    );
};

export const PublicMainContentLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return <main className="flex w-full flex-1 flex-col p-4">{children}</main>;
};

export const PublicFooterLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <footer className="w-full bg-transparent px-4 py-6">{children}</footer>
    );
};
