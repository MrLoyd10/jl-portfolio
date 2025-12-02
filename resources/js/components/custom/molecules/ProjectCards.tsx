import { Badge } from '@/components/ui/badge';
import {
    ArrowUpRight,
    Code,
    ExternalLink,
    Github,
    Sparkles,
    Zap,
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
    viewMode = 'grid',
}: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    if (viewMode === 'list') {
        return (
            <div
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:border-primary/30 hover:shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient Border Glow Effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex flex-col md:flex-row">
                    {/* Image Container - List View */}
                    <div className="relative h-64 w-full overflow-hidden bg-gray-100 md:h-auto md:w-80">
                        {/* Category Badge */}
                        {category && (
                            <div className="absolute top-4 left-4 z-20">
                                <Badge className="relative border-primary/20 bg-white/95 shadow-lg backdrop-blur-sm">
                                    <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
                                    <span className="font-semibold text-primary">
                                        {category}
                                    </span>
                                </Badge>
                            </div>
                        )}

                        {/* Loading skeleton */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 animate-pulse bg-gray-200" />
                        )}

                        {/* Image */}
                        <img
                            src={image}
                            alt={`${title} preview`}
                            onLoad={() => setImageLoaded(true)}
                            className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                                imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    {/* Content - List View */}
                    <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                        <div className="space-y-4">
                            {/* Title with Arrow */}
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="flex-1 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                    {title}
                                </h3>
                                <ArrowUpRight
                                    className={`h-6 w-6 text-gray-400 transition-all duration-300 ${
                                        isHovered
                                            ? 'translate-x-1 -translate-y-1 text-primary'
                                            : ''
                                    }`}
                                />
                            </div>

                            {/* Description */}
                            <p className="leading-relaxed text-gray-600">
                                {description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 pt-2">
                                {technologies.map((tech, index) => (
                                    <Badge
                                        key={index}
                                        variant="outline"
                                        className="cursor-default border-gray-300 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-6">
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    Live Demo
                                </a>
                            )}
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white hover:shadow-lg"
                                >
                                    <Github className="h-4 w-4" />
                                    Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Grid View (Default)
    return (
        <div
            className="group relative transform overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient Border Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Category Badge */}
            {category && (
                <div className="absolute top-4 left-4 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/50 opacity-75 blur-md" />
                        <Badge className="relative border-primary/20 bg-white/95 shadow-lg backdrop-blur-sm">
                            <Sparkles className="mr-1.5 h-3.5 w-3.5 animate-pulse text-primary" />
                            <span className="font-semibold text-primary">
                                {category}
                            </span>
                        </Badge>
                    </div>
                </div>
            )}

            {/* Tech Count Badge */}
            <div className="absolute top-4 right-4 z-20">
                <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-500/50 opacity-75 blur-md" />
                    <Badge className="relative border-blue-200 bg-white/95 shadow-lg backdrop-blur-sm">
                        <Code className="mr-1.5 h-3.5 w-3.5 text-blue-600" />
                        <span className="font-semibold text-blue-600">
                            {technologies.length} Tech
                        </span>
                    </Badge>
                </div>
            </div>

            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                {/* Loading skeleton */}
                {!imageLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200" />
                )}

                {/* Gradient Overlay */}
                <div
                    className={`absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                        isHovered ? 'opacity-100' : 'opacity-60'
                    }`}
                />

                {/* Image */}
                <img
                    src={image}
                    alt={`${title} preview`}
                    onLoad={() => setImageLoaded(true)}
                    className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Hover Action Buttons */}
                <div
                    className={`absolute inset-0 z-20 flex items-center justify-center gap-3 transition-all duration-500 ${
                        isHovered
                            ? 'translate-y-0 opacity-100'
                            : 'translate-y-4 opacity-0'
                    }`}
                >
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex transform items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-primary/90 hover:shadow-xl active:scale-95"
                        >
                            <Zap className="h-4 w-4" />
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex transform items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-800 hover:shadow-xl active:scale-95"
                        >
                            <Github className="h-4 w-4" />
                            Code
                        </a>
                    )}
                </div>

                {/* Shimmer Effect */}
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${
                        isHovered ? 'translate-x-full' : '-translate-x-full'
                    }`}
                    style={{ width: '50%' }}
                />

                {/* Corner Accent */}
                <div className="absolute right-0 bottom-0 h-24 w-24 rounded-tl-3xl bg-gradient-to-tl from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Title with Arrow */}
                <div className="flex items-start justify-between gap-2">
                    <h3 className="flex-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                        {title}
                    </h3>
                    <ArrowUpRight
                        className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
                            isHovered
                                ? 'translate-x-1 -translate-y-1 rotate-45 text-primary'
                                : ''
                        }`}
                    />
                </div>

                {/* Description */}
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
                    {description}
                </p>

                {/* Technologies */}
                <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className={`transform cursor-default border-gray-300 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10 ${
                                    isHovered ? 'animate-bounce-subtle' : ''
                                }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                }}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Progress Bar Decoration */}
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 transition-all duration-1000 ${
                            isHovered ? 'w-full' : 'w-0'
                        }`}
                    />
                </div>

                {/* Static Links for Mobile */}
                <div className="flex items-center gap-2 border-t border-gray-200 pt-4 md:hidden">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90 active:scale-95"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 active:scale-95"
                        >
                            <Github className="h-4 w-4" />
                            Code
                        </a>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes bounce-subtle {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-2px) scale(1.05); }
                }
                .animate-bounce-subtle {
                    animation: bounce-subtle 0.6s ease-in-out;
                }
            `}</style>
        </div>
    );
};
