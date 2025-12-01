import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { useState } from 'react';

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    liveUrl?: string;
    githubUrl?: string;
    category?: string;
}

export const ProjectCard = ({
    title,
    description,
    technologies,
    image,
    liveUrl,
    githubUrl,
    category,
}: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative transform overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animation: 'slideUp 0.6s ease-out forwards',
            }}
        >
            {/* Gradient Border Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Category Badge */}
            {category && (
                <div className="absolute top-4 left-4 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-primary/50 opacity-75 blur-md" />
                        <Badge className="relative border-primary/20 bg-background/95 shadow-lg backdrop-blur-sm">
                            <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
                            <span className="font-semibold text-primary">
                                {category}
                            </span>
                        </Badge>
                    </div>
                </div>
            )}

            {/* Image Container */}
            <div className="relative h-56 overflow-hidden bg-muted">
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
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
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
                            className="flex transform items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
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
                            className="flex transform items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-secondary/90 hover:shadow-xl"
                        >
                            <Github className="h-4 w-4" />
                            Code
                        </a>
                    )}
                </div>

                {/* Shimmer Effect */}
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
                        isHovered ? 'translate-x-full' : '-translate-x-full'
                    }`}
                />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Title with Arrow */}
                <div className="flex items-start justify-between gap-2">
                    <h3 className="flex-1 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {title}
                    </h3>
                    <ArrowUpRight
                        className={`h-5 w-5 text-muted-foreground transition-all duration-300 ${
                            isHovered
                                ? 'translate-x-1 -translate-y-1 text-primary'
                                : ''
                        }`}
                    />
                </div>

                {/* Description */}
                <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                {/* Technologies */}
                <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="transform cursor-default border-primary/30 transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary/10"
                                style={{
                                    animation: `fadeInScale 0.3s ease-out ${index * 0.05}s forwards`,
                                    opacity: 0,
                                }}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Static Links for Mobile */}
                <div className="flex items-center gap-2 border-t border-border pt-2 md:hidden">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
                            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
                        >
                            <Github className="h-4 w-4" />
                            Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
