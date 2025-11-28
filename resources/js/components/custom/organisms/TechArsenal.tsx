import { Atom } from 'lucide-react';
import React from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface TechItemProps {
    name: string;
    icon: React.ReactNode;
    color: string;
}

export const TechArsenal = () => {
    const technologies: TechItemProps[] = [
        {
            name: 'JavaScript',
            icon: (
                <div className="flex justify-center items-center bg-yellow-400 rounded-lg w-16 h-16">
                    <span className="font-bold text-2xl text-black">JS</span>
                </div>
            ),
            color: 'yellow',
        },
        {
            name: 'TypeScript',
            icon: (
                <div className="flex justify-center items-center bg-blue-500 rounded-lg w-16 h-16">
                    <span className="font-bold text-2xl text-white">TS</span>
                </div>
            ),
            color: 'blue',
        },
        {
            name: 'Tailwind',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.61 7.15 14.5 6 12 6zM7 14c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.39 18.85 9.5 20 12 20c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.61 15.15 9.5 14 7 14z"
                        fill="currentColor"
                        className="text-cyan-400"
                    />
                </svg>
            ),
            color: 'cyan',
        },
        {
            name: 'SCSS',
            icon: (
                <div className="flex justify-center items-center bg-pink-500 rounded-full w-16 h-16">
                    <span className="font-bold text-2xl text-white italic">
                        S
                    </span>
                </div>
            ),
            color: 'pink',
        },
        {
            name: 'Framer',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"
                        fill="currentColor"
                        className="text-pink-500"
                    />
                </svg>
            ),
            color: 'pink',
        },
        {
            name: 'React',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <circle
                        cx="12"
                        cy="12"
                        r="2"
                        fill="currentColor"
                        className="text-cyan-400"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        className="text-cyan-400"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        transform="rotate(60 12 12)"
                        className="text-cyan-400"
                    />
                    <ellipse
                        cx="12"
                        cy="12"
                        rx="8"
                        ry="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        transform="rotate(120 12 12)"
                        className="text-cyan-400"
                    />
                </svg>
            ),
            color: 'cyan',
        },
        {
            name: 'Redux',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061c-.923.047-1.66.84-1.614 1.801.035.465.198.87.465 1.154-1.024 1.988-2.573 3.448-4.848 4.897-1.542 1.013-3.178 1.392-4.862 1.154-1.401-.203-2.496-.943-3.178-2.143-.998-1.754-1.093-3.663-.263-5.55.605-1.392 1.543-2.425 2.011-2.896-.316-.914-.57-2.143-.663-3.13-6.027 4.318-5.355 10.15-3.551 12.822 1.354 1.988 4.145 3.178 7.276 3.178.61 0 1.231-.047 1.841-.141 4.145-.707 7.276-2.896 9.287-6.492zm5.452-3.272c-2.479-2.896-6.142-4.5-10.287-4.5h-.516c-.281-.61-.937-1.013-1.709-1.013h-.061c-.923.047-1.66.84-1.614 1.801.047.914.797 1.648 1.709 1.648h.061c.805-.047 1.448-.562 1.66-1.295h.57c2.479 0 4.813.707 6.938 2.143 1.613 1.06 2.76 2.425 3.413 4.084.562 1.295.516 2.566-.094 3.708-.937 1.754-2.48 2.708-4.533 2.708-1.331 0-2.62-.422-3.272-.703-.422.328-.937.797-1.331 1.154 1.331.61 2.62.937 3.88.937 2.854 0 4.957-1.566 5.824-3.13 1.013-1.894.796-5.316-1.438-8.354zM6.49 17.042c.047.914.796 1.648 1.709 1.648h.061c.923-.047 1.66-.84 1.614-1.801-.047-.914-.796-1.648-1.709-1.648h-.061c-.047 0-.141 0-.188.047-1.072-1.801-1.518-3.755-1.354-5.877.094-1.566.562-2.943 1.401-4.084.703-1.013 2.057-1.519 3.037-1.566 2.714-.047 3.85 3.366 3.944 4.738.516.141 1.354.422 1.941.656-.516-6.867-4.145-10.385-7.885-10.385-3.413 0-6.564 2.472-7.461 6.14-1.189 4.738.141 9.287 2.387 12.822.703 1.013 2.011 1.613 3.272 1.613.047-.89.797-1.648 1.709-1.648h.061c-.089-.047-.089-.047-.089-.047z"
                        fill="currentColor"
                        className="text-purple-500"
                    />
                </svg>
            ),
            color: 'purple',
        },
        {
            name: 'Next.js',
            icon: (
                <div className="flex justify-center items-center bg-white rounded-full w-16 h-16">
                    <span className="font-bold text-2xl text-black">N</span>
                </div>
            ),
            color: 'white',
        },
        {
            name: 'Node.js',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.47c0 .66-.68 1.31-1.77.76L4.4 16.5c-.02-.01-.04-.04-.04-.07V7.85c0-.03.02-.06.04-.07l7.44-4.3c.02-.01.05-.01.08 0l7.44 4.3c.02.01.04.04.04.07v8.58c0 .03-.02.06-.04.07l-7.44 4.3c-.02.01-.05.01-.08 0l-1.88-1.12c-.02-.01-.04-.01-.06 0-.32.18-.38.21-.68.3-.07.03-.18.06.04.17l2.46 1.45c.24.14.5.2.78.2s.54-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.85c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2zm1.93 5.02c-1.89 0-3.22.8-3.22 2.15 0 1.45 1.12 1.86 3.14 2.03 2.4.21 2.58.53 2.58.95 0 .73-.59 1.04-1.97 1.04-1.74 0-2.13-.44-2.26-1.31-.02-.11-.11-.2-.22-.2h-.97c-.12 0-.22.11-.22.23 0 1.24.68 2.72 3.67 2.72 2.19 0 3.44-.86 3.44-2.37 0-1.5-1.01-1.9-3.13-2.18-2.11-.29-2.58-.43-2.58-1.03 0-.46.2-1.07 1.97-1.07 1.57 0 2.15.34 2.38 1.4.02.1.11.17.21.17h.97c.06 0 .12-.03.16-.07.05-.04.07-.1.06-.17-.1-1.43-1.19-2.33-3.81-2.33z"
                        fill="currentColor"
                        className="text-green-500"
                    />
                </svg>
            ),
            color: 'green',
        },
        {
            name: 'Express',
            icon: (
                <div className="flex justify-center items-center w-16 h-16">
                    <span className="font-bold text-3xl text-gray-400">ex</span>
                </div>
            ),
            color: 'gray',
        },
        {
            name: 'MongoDB',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 4.604-3.254 4.292-11.375z"
                        fill="currentColor"
                        className="text-green-600"
                    />
                </svg>
            ),
            color: 'green',
        },
        {
            name: 'Supabase',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M13.1 22.928c-.456.653-1.486.317-1.486-.485V13.88h9.014c1.02 0 1.538 1.234.82 1.957l-8.348 7.091zm-2.2-21.856c.456-.653 1.486-.317 1.486.485v8.563H3.372c-1.02 0-1.538-1.234-.82-1.957l8.348-7.091z"
                        fill="currentColor"
                        className="text-green-500"
                    />
                </svg>
            ),
            color: 'green',
        },
        {
            name: 'Sanity',
            icon: (
                <div className="flex justify-center items-center w-16 h-16">
                    <div className="flex justify-center items-center bg-gradient-to-br from-red-400 to-red-600 rounded-lg w-12 h-12">
                        <span className="font-bold text-2xl text-white">S</span>
                    </div>
                </div>
            ),
            color: 'red',
        },
        {
            name: 'Docker',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.37-1.128-1.16-1.698-1.85-2.123-.023-.014-.048-.027-.073-.038l-.15-.074-.073.14c-.274.522-.335 1.35-.317 1.774.038.578.213 1.112.52 1.553a2.918 2.918 0 01-1.539.42c-7.924 0-8.22 7.585-8.22 7.585v.078c0 .637.26 1.249.725 1.697 1.047.998 2.726 1.5 4.995 1.5.984 0 1.968-.089 2.929-.265 1.807-.328 3.467-1.005 4.932-2.01.87-.596 1.602-1.334 2.171-2.191.996-1.5 1.617-3.304 1.617-4.728 0-.061-.006-.12-.006-.183a1.92 1.92 0 00.725-1.248c.013-.03.02-.061.027-.092l.03-.143-.146-.076z"
                        fill="currentColor"
                        className="text-blue-500"
                    />
                </svg>
            ),
            color: 'blue',
        },
        {
            name: 'Vercel',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L2 19.777h20L12 2z"
                        fill="currentColor"
                        className="text-white"
                    />
                </svg>
            ),
            color: 'white',
        },
        {
            name: 'Git',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.658 2.66a1.838 1.838 0 011.9 3.039 1.837 1.837 0 01-2.6 0 1.846 1.846 0 01-.404-1.996L12.86 8.955v6.525c.176.086.342.203.487.348a1.848 1.848 0 010 2.6 1.836 1.836 0 01-2.592 0 1.848 1.848 0 010-2.6c.13-.13.277-.233.435-.328V8.99a1.844 1.844 0 01-1.006-2.408L7.392 3.783.45 10.725a1.55 1.55 0 000 2.188l10.479 10.479a1.55 1.55 0 002.188 0l10.43-10.43a1.55 1.55 0 000-2.188"
                        fill="currentColor"
                        className="text-orange-600"
                    />
                </svg>
            ),
            color: 'orange',
        },
        {
            name: 'Postman',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="currentColor"
                        className="text-orange-500"
                    />
                    <path
                        d="M13.527 14.4l-1.764 1.763a.196.196 0 01-.277 0l-2.155-2.155 1.764-1.763 2.432 2.155zm3.46-7.96c-.04-.04-.098-.04-.137 0L9.434 13.85l-1.764-1.764L14.45 5.3a2.118 2.118 0 012.98 0l.137.137a2.118 2.118 0 010 2.98l-6.686 6.686 1.764 1.764 7.372-7.372a.196.196 0 010-.277l-3.03-3.03z"
                        fill="white"
                    />
                </svg>
            ),
            color: 'orange',
        },
        {
            name: 'Cloudflare',
            icon: (
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M16.5 13.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-6 0c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
                        fill="currentColor"
                        className="text-orange-400"
                    />
                    <path
                        d="M20.5 12c0 .343-.034.678-.098 1h.848c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-.75zm-17.5 0h-.75c-.276 0-.5.224-.5.5s.224.5.5.5h.848a7.978 7.978 0 01-.098-1z"
                        fill="currentColor"
                        className="text-orange-400"
                    />
                </svg>
            ),
            color: 'orange',
        },
    ];

    return (
        <section
            id="tech-arsenal"
            className="mx-auto px-6 py-10 w-full max-w-6xl min-h-screen"
        >
            <div>
                <SectionHeader
                    mainDivClassName="mb-4"
                    title="Tech Arsenal"
                    subtitle="Technologies and tools I work with"
                    icon={Atom}
                />

                {/* Tech Grid */}
                <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {technologies.map((tech, index) => (
                        <TechItem key={index} {...tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechItem = ({ name, icon }: TechItemProps) => {
    return (
        <div className="group flex flex-col justify-center items-center bg-gray-50 hover:bg-gray-100 p-6 border border-gray-200 hover:border-gray-400 rounded-lg transition-all">
            <div className="mb-4 transition-transform group-hover:scale-110">
                {icon}
            </div>
            <span className="font-semibold text-center text-gray-800 text-sm">
                {name}
            </span>
        </div>
    );
};
