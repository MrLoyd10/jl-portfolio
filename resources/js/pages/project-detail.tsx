import { Lightbox, Screenshot } from '@/components/custom/atoms/ImageLightBox';
import { Footer } from '@/components/custom/organisms/Footer';
import { Header } from '@/components/custom/organisms/Header';
import { Badge } from '@/components/ui/badge';
import { Head, Link } from '@inertiajs/react';
import {
    AlertTriangle,
    ArrowLeft,
    BookOpen,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Code2,
    ExternalLink,
    FileText,
    Github,
    ImageIcon,
    Layers,
    Lightbulb,
    Maximize2,
    Sparkles,
    Star,
    Target,
    User,
    Zap,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface TechGroup {
    label: string;
    items: string[];
}

// NEW: a single downloadable/viewable file attached to a project
interface ProjectFile {
    url: string;
    label: string;
    description?: string;
}

interface CaseStudy {
    introduction: string[];
    challenge: { intro: string; points: string[] };
    solution: string[];
    techStack: TechGroup[];
    screenshots?: Screenshot[];
    files?: ProjectFile[]; // NEW: optional PDF / doc assets
    keyFeatures: string[];
    role: string[];
    technicalChallenges: string[];
    productionUsage?: string;
    projectOutcome?: string;
}

interface Project {
    slug: string;
    title: string;
    systemType?: string;
    highlight?: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string | null;
    githubUrl?: string | null;
    category?: string;
    status?: string;
    caseStudy?: CaseStudy;
}

interface Props {
    project: Project;
}

/* ─── Section config ─────────────────────────────────────────────────────── */

const SECTIONS = [
    { id: 'introduction', label: 'Introduction', mustRead: true },
    { id: 'challenge', label: 'Challenge', mustRead: false },
    { id: 'solution', label: 'Solution', mustRead: false },
    { id: 'tech-stack', label: 'Tech Stack', mustRead: false },
    { id: 'features', label: 'Key Features', mustRead: true },
    { id: 'role', label: 'My Role', mustRead: true },
    { id: 'challenges', label: 'Technical Challenges', mustRead: false },
];

/* ─── Screenshot carousel strip (below hero) ────────────────────────────── */

const HeroScreenshots = ({ screenshots }: { screenshots: Screenshot[] }) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    if (!screenshots.length) return null;

    const updateScrollState = () => {
        const el = trackRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;
        updateScrollState();
        el.addEventListener('scroll', updateScrollState, { passive: true });
        const ro = new ResizeObserver(updateScrollState);
        ro.observe(el);
        return () => {
            el.removeEventListener('scroll', updateScrollState);
            ro.disconnect();
        };
    }, [screenshots]);

    const scroll = (dir: 'left' | 'right') => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === 'left' ? -260 : 260, behavior: 'smooth' });
    };

    return (
        <>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 sm:px-5">
                    <ImageIcon className="h-3.5 w-3.5 text-gray-600" />
                    <span className="text-[11px] font-semibold tracking-widest text-gray-600 uppercase">
                        Screenshots
                    </span>
                    <span className="ml-auto text-[11px] text-gray-600">
                        {screenshots.length} image
                        {screenshots.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {/* Carousel */}
                <div className="relative px-3 pt-1 pb-3">
                    {canScrollLeft && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute top-1/2 left-1.5 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-lg active:scale-95"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-4 w-4 text-gray-600" />
                        </button>
                    )}

                    {canScrollRight && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute top-1/2 right-1.5 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-lg active:scale-95"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-4 w-4 text-gray-600" />
                        </button>
                    )}

                    <div
                        ref={trackRef}
                        className="flex gap-2 overflow-x-auto scroll-smooth"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                    >
                        {screenshots.map((shot, i) => (
                            <button
                                key={i}
                                onClick={() => setLightboxIndex(i)}
                                className="group relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                style={{ width: 220, height: 130 }}
                                aria-label={
                                    shot.caption ?? `Screenshot ${i + 1}`
                                }
                            >
                                <img
                                    src={shot.url}
                                    alt={shot.caption ?? `Screenshot ${i + 1}`}
                                    draggable={false}
                                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/30">
                                    <div className="flex items-center gap-1 rounded-full bg-white/0 px-2.5 py-1 opacity-0 backdrop-blur-sm transition-all duration-200 group-hover:bg-white/90 group-hover:opacity-100">
                                        <Maximize2 className="h-3 w-3 text-gray-700" />
                                        <span className="text-[11px] font-medium text-gray-700">
                                            View
                                        </span>
                                    </div>
                                </div>
                                {shot.caption && (
                                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent px-2 py-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                        <p className="truncate text-[10px] text-white/90">
                                            {shot.caption}
                                        </p>
                                    </div>
                                )}
                                <div className="absolute top-1.5 left-1.5 rounded-full bg-black/40 px-1.5 py-0.5 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                                    {i + 1}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {lightboxIndex !== null && (
                <Lightbox
                    screenshots={screenshots}
                    initialIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(null)}
                />
            )}
        </>
    );
};

const ProjectFiles = ({ files }: { files: ProjectFile[] }) => {
    if (!files.length) return null;

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header — matches Screenshots strip exactly */}
            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5 sm:px-5">
                <FileText className="h-3.5 w-3.5 text-gray-600" />
                <span className="text-[11px] font-semibold tracking-widest text-gray-600 uppercase">
                    Project Files
                </span>
                <span className="ml-auto text-[11px] text-gray-600">
                    {files.length} file{files.length !== 1 ? 's' : ''}
                </span>
            </div>

            {/* File list */}
            <ul className="divide-y divide-gray-50 px-3 py-1">
                {files.map((file, i) => (
                    <li key={i}>
                        <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-all duration-200 hover:bg-primary/5"
                        >
                            {/* PDF icon pill */}
                            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 transition-colors duration-200 group-hover:border-primary/20 group-hover:bg-primary/8">
                                <FileText className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover:text-primary" />
                            </div>

                            {/* Label + description */}
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-gray-800 transition-colors duration-200 group-hover:text-primary">
                                    {file.label}
                                </p>
                                {file.description && (
                                    <p className="truncate text-[11px] text-gray-400">
                                        {file.description}
                                    </p>
                                )}
                            </div>

                            {/* Open button */}
                            <div className="flex flex-shrink-0 items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-gray-500 shadow-sm transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white group-hover:shadow-md">
                                <ExternalLink className="h-3 w-3" />
                                Open
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

/* ─── Animated section ───────────────────────────────────────────────────── */

const AnimatedSection = ({
    children,
    delay = 0,
    id,
}: {
    children: React.ReactNode;
    delay?: number;
    id?: string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.06 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            id={id}
            ref={ref}
            className="scroll-mt-28 transition-all duration-700"
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

/* ─── Section heading ────────────────────────────────────────────────────── */

const SectionHeading = ({
    icon: Icon,
    label,
    accent,
    mustRead = false,
    iconVariant = 'default',
}: {
    icon: React.ElementType;
    label: string;
    accent?: string;
    mustRead?: boolean;
    iconVariant?: 'default' | 'primary' | 'amber' | 'outcome';
}) => {
    const iconStyles = {
        default: 'bg-gray-100 ring-1 ring-gray-200',
        primary: 'bg-primary/8 ring-1 ring-primary/15',
        amber: 'bg-amber-50 ring-1 ring-amber-200',
        outcome: 'bg-primary/8 ring-1 ring-primary/15',
    };
    const iconColorStyles = {
        default: 'text-gray-500',
        primary: 'text-primary',
        amber: 'text-amber-600',
        outcome: 'text-primary',
    };

    return (
        <div className="mb-6 flex items-center gap-3">
            <div
                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${iconStyles[iconVariant]}`}
            >
                <Icon className={`h-4 w-4 ${iconColorStyles[iconVariant]}`} />
            </div>
            <div className="min-w-0">
                {accent && (
                    <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                        {accent}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base font-semibold text-gray-900">
                        {label}
                    </h2>
                    {mustRead && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-200">
                            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                            Must read
                        </span>
                    )}
                </div>
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-gray-100 to-transparent sm:block" />
        </div>
    );
};

/* ─── Sticky sidebar nav ─────────────────────────────────────────────────── */

const SidebarNav = ({ sections }: { sections: typeof SECTIONS }) => {
    const [active, setActive] = useState(sections[0]?.id ?? '');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: '-20% 0px -65% 0px' },
        );
        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [sections]);

    const scrollTo = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <nav className="sticky top-28">
            <p className="mb-3 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                On this page
            </p>
            <ul className="space-y-0.5">
                {sections.map(({ id, label, mustRead }) => (
                    <li key={id}>
                        <button
                            onClick={() => scrollTo(id)}
                            className={`group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ${
                                active === id
                                    ? 'bg-primary/8 font-semibold text-primary'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                            }`}
                        >
                            <span
                                className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-200 ${
                                    active === id
                                        ? 'scale-125 bg-primary/80'
                                        : 'bg-gray-300 group-hover:bg-gray-400'
                                }`}
                            />
                            <span className="flex-1">{label}</span>
                            {mustRead && (
                                <Star className="h-3 w-3 flex-shrink-0 fill-amber-400 text-amber-400" />
                            )}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="mt-5 rounded-xl border border-amber-100 bg-amber-50 p-3">
                <div className="flex items-start gap-2">
                    <Star className="mt-0.5 h-3 w-3 flex-shrink-0 fill-amber-400 text-amber-400" />
                    <p className="text-[11px] leading-relaxed text-amber-700">
                        <span className="font-semibold">Short on time?</span>{' '}
                        Start with the starred sections.
                    </p>
                </div>
            </div>
        </nav>
    );
};

/* ─── Mobile section quick-jump ──────────────────────────────────────────── */

const MobileNav = ({ sections }: { sections: typeof SECTIONS }) => {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(false);
    };

    return (
        <div className="mb-6 xl:hidden">
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm"
            >
                <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Jump to section
                </div>
                <ChevronRight
                    className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
                />
            </button>

            {open && (
                <div className="mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
                    {sections.map(({ id, label, mustRead }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="flex w-full items-center gap-3 border-b border-gray-50 px-4 py-3 text-left text-sm text-gray-700 transition-colors last:border-0 hover:bg-gray-50"
                        >
                            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-primary/60" />
                            <span className="flex-1">{label}</span>
                            {mustRead && (
                                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

/* ─── Main page ──────────────────────────────────────────────────────────── */

export default function ProjectDetail({ project }: Props) {
    const {
        title,
        systemType,
        highlight,
        description,
        image,
        liveUrl,
        githubUrl,
        category,
        status,
        caseStudy,
    } = project;

    const isActiveStatus =
        status?.toLowerCase().includes('active') ||
        status?.toLowerCase().includes('production');

    const screenshots = caseStudy?.screenshots ?? [];
    const files = caseStudy?.files ?? [];

    return (
        <>
            <Head title={`${title} — Case Study`} />
            <Header hideNav />

            <div className="relative min-h-screen w-full bg-gray-50/60 pt-20">
                {/* Ambient blobs */}
                <div className="pointer-events-none fixed inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
                    <div className="absolute bottom-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 pt-2 pb-8 sm:px-6">
                    {/* ── Hero card ─────────────────────────────────────── */}
                    <AnimatedSection delay={60}>
                        <div className="mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            {/* Hero image */}
                            <div className="relative h-52 w-full overflow-hidden sm:h-72 md:h-[22rem]">
                                <img
                                    src={image}
                                    alt={`${title} preview`}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

                                {/* Back pill */}
                                <Link
                                    href="/#project"
                                    className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border-2 border-primary bg-black/50 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_2px_12px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all duration-200 hover:bg-black/65 sm:top-4 sm:left-4"
                                >
                                    <ArrowLeft className="h-3 w-3" />
                                    Back to Projects
                                </Link>

                                {/* Badges */}
                                <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 sm:top-4 sm:right-4">
                                    {category && (
                                        <Badge className="border-primary/20 bg-white/95 shadow-sm backdrop-blur-sm">
                                            <Sparkles className="mr-1 h-3 w-3 text-primary" />
                                            <span className="text-[11px] font-semibold text-primary">
                                                {category}
                                            </span>
                                        </Badge>
                                    )}
                                    {status && (
                                        <Badge
                                            className={`shadow-sm backdrop-blur-sm ${isActiveStatus ? 'border-green-200/60 bg-white/95' : 'border-gray-200 bg-white/95'}`}
                                        >
                                            <span
                                                className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${isActiveStatus ? 'animate-pulse bg-green-500' : 'bg-gray-400'}`}
                                            />
                                            <span
                                                className={`text-[11px] font-semibold ${isActiveStatus ? 'text-green-700' : 'text-gray-600'}`}
                                            >
                                                {status}
                                            </span>
                                        </Badge>
                                    )}
                                </div>

                                {/* Title overlay */}
                                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent px-4 pt-8 pb-4 sm:px-6 sm:pt-12 sm:pb-6 md:px-8 md:pt-16 md:pb-8">
                                    {systemType && (
                                        <p className="mb-1 text-[10px] font-bold tracking-widest text-white/70 uppercase sm:text-[11px]">
                                            {systemType}
                                        </p>
                                    )}
                                    <h1 className="text-lg leading-tight font-semibold text-white drop-shadow-lg sm:text-2xl md:text-4xl">
                                        {title}
                                    </h1>
                                    {highlight && (
                                        <p className="mt-1 text-xs text-white/75 drop-shadow sm:mt-1.5 sm:text-sm md:text-base">
                                            {highlight}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Meta row */}
                            <div className="flex flex-col gap-6 border-t border-gray-100 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-center md:px-8">
                                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                                    {description}
                                </p>
                                {(liveUrl || githubUrl) && (
                                    <div className="flex flex-shrink-0 flex-wrap gap-2">
                                        {liveUrl && (
                                            <a
                                                href={liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
                                            >
                                                <ExternalLink className="h-3.5 w-3.5" />
                                                View Live
                                            </a>
                                        )}
                                        {githubUrl && (
                                            <a
                                                href={githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md"
                                            >
                                                <Github className="h-3.5 w-3.5" />
                                                View Code
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Screenshots strip ─────────────────────────────── */}
                    {screenshots.length > 0 && (
                        <AnimatedSection delay={80}>
                            <div className="mb-4">
                                <HeroScreenshots screenshots={screenshots} />
                            </div>
                        </AnimatedSection>
                    )}

                    {/* ── Project Files strip (NEW) ─────────────────────── */}
                    {files.length > 0 && (
                        <AnimatedSection delay={90}>
                            <div className="mb-4">
                                <ProjectFiles files={files} />
                            </div>
                        </AnimatedSection>
                    )}

                    {/* ── Body ──────────────────────────────────────────── */}
                    {!caseStudy ? (
                        <AnimatedSection delay={100}>
                            <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-12 text-center shadow-sm">
                                <p className="text-sm text-gray-400">
                                    A detailed case study for this project is
                                    coming soon.
                                </p>
                            </div>
                        </AnimatedSection>
                    ) : (
                        <>
                            {/* Mobile jump nav */}
                            <MobileNav sections={SECTIONS} />

                            <div className="flex gap-8">
                                {/* Sidebar — xl only */}
                                <aside className="hidden w-48 flex-shrink-0 xl:block">
                                    <SidebarNav sections={SECTIONS} />
                                </aside>

                                {/* Content */}
                                <div className="min-w-0 flex-1 space-y-5">
                                    {/* ── Introduction ──────────────── */}
                                    <AnimatedSection
                                        delay={100}
                                        id="introduction"
                                    >
                                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={Layers}
                                                label="Introduction"
                                                accent="Overview"
                                                iconVariant="primary"
                                                mustRead
                                            />
                                            <div className="space-y-3">
                                                {caseStudy.introduction.map(
                                                    (p, i) => (
                                                        <p
                                                            key={i}
                                                            className="text-sm leading-relaxed text-gray-600"
                                                        >
                                                            {p}
                                                        </p>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── Challenge ─────────────────── */}
                                    <AnimatedSection delay={100} id="challenge">
                                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={Target}
                                                label="The Challenge"
                                                accent="Problem"
                                                iconVariant="default"
                                            />
                                            <p className="mb-4 text-sm leading-relaxed text-gray-600">
                                                {caseStudy.challenge.intro}
                                            </p>
                                            <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 sm:p-5">
                                                <p className="mb-3 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                                                    The system needed to
                                                </p>
                                                <ul className="space-y-2.5">
                                                    {caseStudy.challenge.points.map(
                                                        (point, i) => (
                                                            <li
                                                                key={i}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary/60" />
                                                                <span className="text-sm text-gray-700">
                                                                    {point}
                                                                </span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── Solution ──────────────────── */}
                                    <AnimatedSection delay={100} id="solution">
                                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={Lightbulb}
                                                label="The Solution"
                                                accent="Approach"
                                                iconVariant="primary"
                                            />
                                            <div className="space-y-3">
                                                {caseStudy.solution.map(
                                                    (p, i) => (
                                                        <p
                                                            key={i}
                                                            className="text-sm leading-relaxed text-gray-600"
                                                        >
                                                            {p}
                                                        </p>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── Tech Stack ────────────────── */}
                                    <AnimatedSection
                                        delay={100}
                                        id="tech-stack"
                                    >
                                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={Code2}
                                                label="Technology Stack"
                                                accent="Built With"
                                                iconVariant="default"
                                            />
                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {caseStudy.techStack.map(
                                                    (group, i) => (
                                                        <div
                                                            key={i}
                                                            className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
                                                        >
                                                            <p className="mb-2.5 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
                                                                {group.label}
                                                            </p>
                                                            <div className="flex flex-wrap gap-1.5">
                                                                {group.items.map(
                                                                    (
                                                                        item,
                                                                        j,
                                                                    ) => (
                                                                        <Badge
                                                                            key={
                                                                                j
                                                                            }
                                                                            variant="outline"
                                                                            className="cursor-default border-gray-200 bg-white text-xs text-gray-600 transition-colors hover:border-primary/30 hover:bg-primary/8 hover:text-primary"
                                                                        >
                                                                            {
                                                                                item
                                                                            }
                                                                        </Badge>
                                                                    ),
                                                                )}
                                                            </div>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── Key Features ──────────────── */}
                                    <AnimatedSection delay={100} id="features">
                                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={CheckCircle2}
                                                label="Key Features"
                                                accent="Capabilities"
                                                iconVariant="primary"
                                                mustRead
                                            />
                                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                                {caseStudy.keyFeatures.map(
                                                    (feature, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3.5 transition-all duration-200 hover:border-primary/20 hover:bg-primary/5"
                                                        >
                                                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                                                            <span className="text-sm text-gray-700">
                                                                {feature}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── My Role ───────────────────── */}
                                    <AnimatedSection delay={100} id="role">
                                        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={User}
                                                label="My Role"
                                                accent="Contribution"
                                                iconVariant="primary"
                                                mustRead
                                            />
                                            <div className="space-y-3">
                                                {caseStudy.role.map((p, i) => (
                                                    <p
                                                        key={i}
                                                        className="text-sm leading-relaxed text-gray-600"
                                                    >
                                                        {p}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── Technical Challenges ──────── */}
                                    <AnimatedSection
                                        delay={100}
                                        id="challenges"
                                    >
                                        <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 shadow-sm sm:p-7">
                                            <SectionHeading
                                                icon={AlertTriangle}
                                                label="Technical Challenges"
                                                accent="Complexity"
                                                iconVariant="amber"
                                            />
                                            <div className="space-y-3">
                                                {caseStudy.technicalChallenges.map(
                                                    (p, i) => (
                                                        <p
                                                            key={i}
                                                            className="text-sm leading-relaxed text-gray-600"
                                                        >
                                                            {p}
                                                        </p>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </AnimatedSection>

                                    {/* ── Production Usage / Outcome ── */}
                                    {(caseStudy.productionUsage ||
                                        caseStudy.projectOutcome) && (
                                        <AnimatedSection delay={100}>
                                            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5 shadow-sm sm:p-7">
                                                <SectionHeading
                                                    icon={
                                                        caseStudy.productionUsage
                                                            ? Zap
                                                            : Star
                                                    }
                                                    label={
                                                        caseStudy.productionUsage
                                                            ? 'Production Usage'
                                                            : 'Project Outcome'
                                                    }
                                                    accent={
                                                        caseStudy.productionUsage
                                                            ? 'Live Impact'
                                                            : 'Result'
                                                    }
                                                    iconVariant="outcome"
                                                    mustRead
                                                />
                                                <p className="text-sm leading-relaxed text-gray-700">
                                                    {caseStudy.productionUsage ??
                                                        caseStudy.projectOutcome}
                                                </p>
                                            </div>
                                        </AnimatedSection>
                                    )}

                                    {/* ── Footer CTA ────────────────── */}
                                    <AnimatedSection delay={100}>
                                        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-gray-200 bg-white py-10 text-center shadow-sm">
                                            <p className="text-sm text-gray-500">
                                                Want to see more of my work?
                                            </p>
                                            <Link
                                                href="/#project"
                                                className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-primary/30 hover:bg-white hover:text-primary hover:shadow-md"
                                            >
                                                <ArrowLeft className="h-3.5 w-3.5" />
                                                Back to All Projects
                                            </Link>
                                        </div>
                                    </AnimatedSection>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
