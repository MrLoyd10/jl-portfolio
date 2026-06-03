import { Badge } from '@/components/ui/badge';
import {
    ArrowUpRight,
    Code,
    ExternalLink,
    Github,
    Sparkles,
} from 'lucide-react';
import { useState } from 'react';

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    category?: string;
    systemType?: string;
    highlight?: string;
    viewMode?: 'grid' | 'list';
}

export const ProjectCard = ({
    title,
    description,
    technologies,
    image,
    liveUrl,
    githubUrl,
    category,
    systemType,
    highlight,
    viewMode = 'grid',
}: ProjectCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const hasActions = liveUrl || githubUrl;

    const TechBadges = () => (
        <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
                <Badge
                    key={i}
                    variant="outline"
                    className="cursor-default border-gray-200 bg-gray-50 text-gray-600 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                >
                    {tech}
                </Badge>
            ))}
        </div>
    );

    const ActionButtons = () => {
        if (!hasActions) {
            return (
                <span className="text-xs text-gray-400 italic">
                    Private project
                </span>
            );
        }
        return (
            <>
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md"
                    >
                        <ExternalLink className="h-3.5 w-3.5" />
                        View Project
                    </a>
                )}
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-4 py-1.5 text-xs font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:bg-gray-200 hover:shadow-md"
                    >
                        <Github className="h-3.5 w-3.5" />
                        View Code
                    </a>
                )}
            </>
        );
    };

    if (viewMode === 'list') {
        return (
            <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative h-52 w-full flex-shrink-0 overflow-hidden bg-gray-100 md:h-auto md:w-64">
                        {category && (
                            <div className="absolute top-3 left-3 z-10">
                                <Badge className="border-primary/20 bg-white/95 shadow-sm backdrop-blur-sm">
                                    <Sparkles className="mr-1 h-3 w-3 text-primary" />
                                    <span className="text-[11px] font-semibold text-primary">
                                        {category}
                                    </span>
                                </Badge>
                            </div>
                        )}
                        {!imageLoaded && (
                            <div className="absolute inset-0 animate-pulse bg-gray-200" />
                        )}
                        <img
                            src={image}
                            alt={`${title} preview`}
                            onLoad={() => setImageLoaded(true)}
                            className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-5">
                        <div className="space-y-3">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    {systemType && (
                                        <p className="mb-0.5 text-[10px] font-semibold tracking-wider text-primary/60 uppercase">
                                            {systemType}
                                        </p>
                                    )}
                                    <h3 className="text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary">
                                        {title}
                                    </h3>
                                </div>
                                <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                            </div>

                            {highlight && (
                                <p className="text-xs font-medium text-primary">
                                    {highlight}
                                </p>
                            )}

                            <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
                                {description}
                            </p>

                            <div>
                                <div className="mb-2 flex items-center gap-1.5">
                                    <Code className="h-3.5 w-3.5 text-primary/50" />
                                    <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                                        Built With
                                    </p>
                                </div>
                                <TechBadges />
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">
                            <ActionButtons />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl">
            {/* Image */}
            <div className="relative h-44 overflow-hidden bg-gray-100">
                {category && (
                    <div className="absolute top-3 left-3 z-10">
                        <Badge className="border-primary/20 bg-white/95 shadow-sm backdrop-blur-sm">
                            <Sparkles className="mr-1 h-3 w-3 animate-pulse text-primary" />
                            <span className="text-[11px] font-semibold text-primary">
                                {category}
                            </span>
                        </Badge>
                    </div>
                )}
                {!imageLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200" />
                )}
                <img
                    src={image}
                    alt={`${title} preview`}
                    onLoad={() => setImageLoaded(true)}
                    className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>

            {/* Content */}
            <div className="flex flex-col space-y-3 p-5">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                        {systemType && (
                            <p className="mb-0.5 text-[10px] font-semibold tracking-wider text-primary/60 uppercase">
                                {systemType}
                            </p>
                        )}
                        <h3 className="text-base leading-snug font-bold text-gray-900 transition-colors duration-200 group-hover:text-primary">
                            {title}
                        </h3>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>

                {highlight && (
                    <p className="text-xs font-medium text-primary">
                        {highlight}
                    </p>
                )}

                <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {description}
                </p>

                <div>
                    <div className="mb-2 flex items-center gap-1.5">
                        <Code className="h-3.5 w-3.5 text-primary/50" />
                        <p className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">
                            Built With
                        </p>
                    </div>
                    <TechBadges />
                </div>

                <div className="flex items-center gap-2 border-t border-gray-100 pt-3">
                    <ActionButtons />
                </div>
            </div>
        </div>
    );
};
