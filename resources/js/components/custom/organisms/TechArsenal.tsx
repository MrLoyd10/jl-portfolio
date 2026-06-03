import { Atom, ChevronDown, Layers } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from '../atoms/SectionHeader';

interface TechItemProps {
    name: string;
    iconName: string;
    category: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced';
}

const LEVEL_CONFIG = {
    Advanced: {
        dot: 'bg-emerald-500',
        ring: 'shadow-emerald-100',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        ping: 'bg-emerald-400',
    },
    Intermediate: {
        dot: 'bg-amber-400',
        ring: 'shadow-amber-100',
        badge: 'bg-amber-50 text-amber-700 border-amber-200',
        ping: 'bg-amber-300',
    },
    Beginner: {
        dot: 'bg-gray-400',
        ring: 'shadow-gray-100',
        badge: 'bg-gray-50 text-gray-500 border-gray-200',
        ping: 'bg-gray-300',
    },
} as const;

export function TechArsenal() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [showProjectUsed, setShowProjectUsed] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const technologies: TechItemProps[] = [
        {
            name: 'JavaScript',
            iconName: 'javascript',
            category: 'Languages',
            level: 'Advanced',
        },
        {
            name: 'TypeScript',
            iconName: 'typescript',
            category: 'Languages',
            level: 'Advanced',
        },
        {
            name: 'PHP',
            iconName: 'php',
            category: 'Languages',
            level: 'Advanced',
        },
        {
            name: 'C#',
            iconName: 'csharp',
            category: 'Languages',
            level: 'Intermediate',
        },
        {
            name: 'C++',
            iconName: 'cpp',
            category: 'Languages',
            level: 'Intermediate',
        },
        {
            name: 'Python',
            iconName: 'python',
            category: 'Languages',
            level: 'Beginner',
        },
        { name: 'C', iconName: 'c', category: 'Languages', level: 'Beginner' },
        {
            name: 'React',
            iconName: 'react',
            category: 'Frontend',
            level: 'Advanced',
        },
        {
            name: 'Vue',
            iconName: 'vue',
            category: 'Frontend',
            level: 'Advanced',
        },
        {
            name: 'Next.js',
            iconName: 'next-js',
            category: 'Frontend',
            level: 'Intermediate',
        },
        {
            name: 'Nuxt',
            iconName: 'nuxt-js',
            category: 'Frontend',
            level: 'Intermediate',
        },
        {
            name: 'jQuery',
            iconName: 'jquery',
            category: 'Frontend',
            level: 'Beginner',
        },
        {
            name: 'Tailwind CSS',
            iconName: 'tailwind',
            category: 'CSS',
            level: 'Advanced',
        },
        {
            name: 'Shadcn/UI',
            iconName: 'shadcn',
            category: 'CSS',
            level: 'Advanced',
        },
        { name: 'HTML', iconName: 'html', category: 'CSS', level: 'Advanced' },
        { name: 'CSS', iconName: 'css', category: 'CSS', level: 'Advanced' },
        {
            name: 'Bootstrap',
            iconName: 'bootstrap',
            category: 'CSS',
            level: 'Intermediate',
        },
        {
            name: 'Material UI',
            iconName: 'material-ui',
            category: 'CSS',
            level: 'Intermediate',
        },
        {
            name: 'Laravel',
            iconName: 'laravel',
            category: 'Backend',
            level: 'Advanced',
        },
        {
            name: 'MySQL',
            iconName: 'mysql',
            category: 'Database',
            level: 'Advanced',
        },
        {
            name: 'SQLite',
            iconName: 'sqlite',
            category: 'Database',
            level: 'Intermediate',
        },
        { name: 'Git', iconName: 'git', category: 'Tools', level: 'Advanced' },
        {
            name: 'Bitbucket',
            iconName: 'bitbucket',
            category: 'Tools',
            level: 'Advanced',
        },
        {
            name: 'Postman',
            iconName: 'postman',
            category: 'Tools',
            level: 'Advanced',
        },
        {
            name: 'GitHub',
            iconName: 'github',
            category: 'Tools',
            level: 'Intermediate',
        },
        {
            name: 'Figma',
            iconName: 'figma',
            category: 'Tools',
            level: 'Intermediate',
        },
        {
            name: 'Canva',
            iconName: 'canva',
            category: 'Tools',
            level: 'Intermediate',
        },
        {
            name: 'Webhook.site',
            iconName: 'webhook-site',
            category: 'Tools',
            level: 'Beginner',
        },
        {
            name: 'Vite',
            iconName: 'vite',
            category: 'Build Tools',
            level: 'Intermediate',
        },
        {
            name: 'npm',
            iconName: 'npm',
            category: 'Build Tools',
            level: 'Intermediate',
        },
        {
            name: 'Vercel',
            iconName: 'vercel',
            category: 'Hosting',
            level: 'Intermediate',
        },
        {
            name: 'Netlify',
            iconName: 'netlify',
            category: 'Hosting',
            level: 'Intermediate',
        },
        {
            name: 'Render',
            iconName: 'render',
            category: 'Hosting',
            level: 'Beginner',
        },
        {
            name: 'AWS S3',
            iconName: 'aws-s3',
            category: 'Hosting',
            level: 'Beginner',
        },
        {
            name: 'Laravel Forge',
            iconName: 'laravel-forge',
            category: 'Hosting',
            level: 'Beginner',
        },
    ];

    const categories = [
        'All',
        ...Array.from(new Set(technologies.map((t) => t.category))),
    ];

    const filtered =
        selectedCategory === 'All'
            ? technologies
            : technologies.filter((t) => t.category === selectedCategory);

    const masteryTechs = filtered.filter((t) => t.level === 'Advanced');
    const projectUsedTechs = filtered.filter((t) => t.level !== 'Advanced');

    // Auto-open when a specific category is selected, auto-close when back to All
    useEffect(() => {
        if (selectedCategory !== 'All') {
            setShowProjectUsed(true);
        } else {
            setShowProjectUsed(false);
        }
    }, [selectedCategory]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="relative w-full px-6 py-12"
        >
            {/* Background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 -left-32 h-96 w-96 animate-pulse rounded-full bg-primary/5 blur-3xl" />
                <div
                    className="absolute -right-32 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-blue-500/5 blur-3xl"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute top-3/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-purple-500/5 blur-3xl"
                    style={{ animationDelay: '2s' }}
                />
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Header */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                >
                    <SectionHeader
                        mainDivClassName="mb-8"
                        title="Tech Arsenal"
                        subtitle="Powerful technologies and tools that bring ideas to life"
                        icon={Atom}
                    />
                </div>

                {/* Legend + Category Filters row */}
                <div
                    className={`mb-8 flex flex-col gap-4 transition-all duration-700 sm:flex-row sm:items-center sm:justify-between ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '100ms' }}
                >
                    {/* Legend */}
                    <div className="flex items-center gap-5">
                        {(
                            Object.entries(LEVEL_CONFIG) as [
                                keyof typeof LEVEL_CONFIG,
                                (typeof LEVEL_CONFIG)[keyof typeof LEVEL_CONFIG],
                            ][]
                        ).map(([label, cfg]) => (
                            <div
                                key={label}
                                className="flex items-center gap-2"
                            >
                                <span className="relative flex h-2.5 w-2.5">
                                    <span
                                        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${cfg.ping}`}
                                    />
                                    <span
                                        className={`relative inline-flex h-2.5 w-2.5 rounded-full ${cfg.dot}`}
                                    />
                                </span>
                                <span className="text-xs font-medium text-gray-500">
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Count badge */}
                    <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 shadow-sm">
                        <Layers className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-medium text-gray-600">
                            {technologies.length} technologies
                        </span>
                    </div>
                </div>

                {/* Category Filter Pills */}
                <div
                    className={`mb-8 flex flex-wrap items-center gap-2 transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '180ms' }}
                >
                    {categories.map((category, i) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            style={{ transitionDelay: `${i * 30}ms` }}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'scale-105 bg-primary text-white shadow-md shadow-primary/20'
                                    : 'border border-gray-200 bg-white text-gray-600 hover:scale-105 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-sm'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Mastery Section */}
                <div
                    className={`transition-all duration-700 ${
                        isVisible
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: '250ms' }}
                >
                    <SectionDivider
                        label="Mastery"
                        count={masteryTechs.length}
                        accent
                    />

                    <div className="mb-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                        {masteryTechs.map((tech, index) => (
                            <TechCard
                                key={`mastery-${tech.name}`}
                                {...tech}
                                index={index}
                                isVisible={isVisible}
                                isHovered={
                                    hoveredCard === `mastery-${tech.name}`
                                }
                                onHover={(v) =>
                                    setHoveredCard(
                                        v ? `mastery-${tech.name}` : null,
                                    )
                                }
                            />
                        ))}
                        {masteryTechs.length === 0 && (
                            <p className="col-span-full py-6 text-center text-sm text-gray-400">
                                No advanced technologies in this category.
                            </p>
                        )}
                    </div>
                </div>

                {/* "Used in Projects" Section */}
                {projectUsedTechs.length > 0 && (
                    <div
                        className={`transition-all duration-700 ${
                            isVisible
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-10 opacity-0'
                        }`}
                        style={{ transitionDelay: '350ms' }}
                    >
                        {/* Clickable SectionDivider */}
                        <CollapsibleSectionDivider
                            label="Used in Projects"
                            count={projectUsedTechs.length}
                            isOpen={showProjectUsed}
                            onToggle={() => setShowProjectUsed((prev) => !prev)}
                        />

                        {/* Grid — slide down */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                showProjectUsed
                                    ? 'max-h-[2000px] opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="mb-8 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                                {projectUsedTechs.map((tech, index) => (
                                    <TechCard
                                        key={`project-${tech.name}`}
                                        {...tech}
                                        index={index}
                                        isVisible={showProjectUsed}
                                        isHovered={
                                            hoveredCard ===
                                            `project-${tech.name}`
                                        }
                                        onHover={(v) =>
                                            setHoveredCard(
                                                v
                                                    ? `project-${tech.name}`
                                                    : null,
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* ─── Collapsible Section Divider ────────────────────────────── */
function CollapsibleSectionDivider({
    label,
    count,
    isOpen,
    onToggle,
}: {
    label: string;
    count?: number;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="mb-5 flex items-center gap-3">
            <button
                onClick={onToggle}
                className={`group flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 transition-all duration-300 ${
                    isOpen
                        ? 'border-primary/20 shadow-sm'
                        : 'border-gray-300 bg-white hover:border-primary/30 hover:bg-primary/5 hover:shadow-sm'
                }`}
            >
                <span
                    className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-200 ${
                        isOpen
                            ? 'text-primary/70'
                            : 'text-gray-500 group-hover:text-primary'
                    }`}
                >
                    {label}
                </span>
                {count !== undefined && (
                    <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors duration-200 ${
                            isOpen
                                ? 'bg-primary/10 text-primary/70'
                                : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                        }`}
                    >
                        {count}
                    </span>
                )}
                <ChevronDown
                    className={`h-3.5 w-3.5 shrink-0 transition-all duration-300 ${
                        isOpen
                            ? 'rotate-180 text-primary/80'
                            : 'text-gray-400 group-hover:text-primary'
                    }`}
                />
            </button>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-400 to-transparent" />
        </div>
    );
}

/* ─── Section Divider (non-clickable) ────────────────────────── */
function SectionDivider({
    label,
    count,
    accent = false,
}: {
    label: string;
    count?: number;
    accent?: boolean;
}) {
    return (
        <div className="mb-5 flex items-center gap-3">
            {accent && (
                <span className="h-4 w-1 rounded-full bg-gradient-to-b from-primary to-blue-500" />
            )}
            <span
                className={`text-xs font-semibold tracking-widest uppercase ${
                    accent ? 'text-primary' : 'text-gray-600'
                }`}
            >
                {label}
            </span>
            {count !== undefined && (
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                    {count}
                </span>
            )}
            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
        </div>
    );
}

/* ─── Tech Card ───────────────────────────────────────────────── */
function TechCard({
    name,
    iconName,
    level,
    index = 0,
    isVisible,
    isHovered,
    onHover,
}: TechItemProps & {
    index?: number;
    isVisible: boolean;
    isHovered: boolean;
    onHover: (v: boolean) => void;
}) {
    const cfg = LEVEL_CONFIG[level ?? 'Beginner'];

    return (
        <div
            className={`transition-all duration-500 ${
                isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: `${index * 40}ms` }}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            {/* Outer glow */}
            <div className="group relative">
                <div
                    className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 blur-sm transition-opacity duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                <div
                    className={`relative flex flex-col items-center gap-2 overflow-hidden rounded-xl border bg-white p-3 transition-all duration-300 ${
                        isHovered
                            ? '-translate-y-1.5 border-primary/30 shadow-lg shadow-primary/10'
                            : 'border-gray-200 shadow-sm hover:shadow-md'
                    }`}
                >
                    {/* Level indicator dot with ping */}
                    <span className="absolute top-2 left-2 flex h-2 w-2">
                        <span
                            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-50 ${cfg.ping}`}
                            style={{ animationDuration: '2.5s' }}
                        />
                        <span
                            className={`relative inline-flex h-2 w-2 rounded-full ${cfg.dot}`}
                        />
                    </span>

                    {/* Icon */}
                    <div
                        className={`flex h-9 w-9 items-center justify-center transition-all duration-300 ${
                            isHovered
                                ? 'scale-110 -rotate-3'
                                : 'scale-100 rotate-0'
                        }`}
                    >
                        <img
                            src={`http://127.0.0.1:8000/icons/${iconName}.png`}
                            alt={name}
                            className="h-full w-full object-contain"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const parent = e.currentTarget.parentElement;
                                if (parent) {
                                    parent.innerHTML = `<div class="flex items-center justify-center rounded-lg bg-gray-100 w-9 h-9"><span class="text-xs font-bold text-gray-500">${name.substring(0, 2).toUpperCase()}</span></div>`;
                                }
                            }}
                        />
                    </div>

                    {/* Name */}
                    <span
                        className={`w-full text-center text-[11px] leading-tight font-medium transition-colors duration-200 ${
                            isHovered ? 'text-primary' : 'text-gray-700'
                        }`}
                    >
                        {name}
                    </span>

                    {/* Bottom bar — slides in on hover */}
                    <div className="absolute right-0 bottom-0 left-0 h-0.5 overflow-hidden rounded-b-xl bg-gray-100">
                        <div
                            className={`h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 transition-all duration-500 ${
                                isHovered ? 'w-full' : 'w-0'
                            }`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
