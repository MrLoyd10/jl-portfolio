import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

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
    return (
        <div className="group bg-gray-50 border border-gray-200 hover:border-gray-400 rounded-lg transition-all overflow-hidden">
            {/* Project Image */}
            <div className="relative bg-gray-100 w-full h-52 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} preview`}
                    className="w-full h-full transition-transform object-cover group-hover:scale-105"
                />
                {category && (
                    <div className="top-4 right-4 absolute">
                        <Badge
                            variant="default"
                            className="bg-primary/90 backdrop-blur-sm"
                        >
                            {category}
                        </Badge>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Header with Links */}
                <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-xl">{title}</h3>
                    <div className="flex items-center gap-2">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 hover:bg-gray-200 p-2 border border-gray-300 rounded-lg transition-colors"
                                aria-label="Live Demo"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-100 hover:bg-gray-200 p-2 border border-gray-300 rounded-lg transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div>
                    <h4 className="mb-2 font-semibold text-sm">
                        Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <Badge
                                key={index}
                                variant="outline"
                                className="border-slate-600"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
