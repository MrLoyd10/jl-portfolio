import {
    Award,
    Building2,
    Calendar,
    ExternalLink,
    Shield,
    Trophy,
} from 'lucide-react';
import { useState } from 'react';

export interface AchievementCardProps {
    title: string;
    issuer: string;
    date: string;
    description: string;
    certificateId?: string;
    image: string;
    link?: string;
}

export const AchievementCard = ({
    title,
    issuer,
    date,
    description,
    certificateId,
    image,
    link,
}: AchievementCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className="group relative h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Outer glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary via-blue-500 to-purple-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-lg transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl">
                {/* Top accent bar */}
                <div className="h-2 w-full bg-gradient-to-r from-primary via-blue-500 to-primary" />

                {/* Certificate Image Section */}
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    {!imageLoaded && (
                        <div className="absolute inset-0 animate-pulse bg-gray-200" />
                    )}

                    {/* Verified badge */}
                    <div className="absolute top-3 left-3 z-10">
                        <div className="flex items-center gap-1.5 rounded-full border-2 border-green-500/20 bg-white/95 px-2.5 py-1 shadow-md backdrop-blur-sm">
                            <Shield className="h-3.5 w-3.5 text-green-600" />
                            <span className="text-xs font-bold text-green-700">
                                Certified
                            </span>
                        </div>
                    </div>

                    <img
                        src={image}
                        alt={title}
                        onLoad={() => setImageLoaded(true)}
                        className={`h-full w-full object-cover transition-all duration-700 ${
                            imageLoaded
                                ? 'scale-100 opacity-100'
                                : 'scale-105 opacity-0'
                        } group-hover:scale-110`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Trophy icon overlay on hover */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="rounded-full bg-gradient-to-br from-primary to-blue-600 p-4 shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                            <Trophy className="h-8 w-8 text-white" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col p-6">
                    {/* Title with icon */}
                    <div className="mb-4 flex items-start gap-3">
                        <div className="mt-0.5 rounded-lg bg-primary/10 p-2 shadow-sm transition-colors duration-300 group-hover:bg-primary/15">
                            <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-1 text-xl leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                {title}
                            </h3>
                            {/* Animated underline */}
                            <div className="h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-500 group-hover:w-full" />
                        </div>
                    </div>

                    {/* Issuer & Date */}
                    <div className="mb-4 space-y-2.5">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="rounded-md bg-gray-100 p-1.5 transition-colors duration-300 group-hover:bg-primary/10">
                                <Building2 className="h-3.5 w-3.5 text-gray-600 transition-colors duration-300 group-hover:text-primary" />
                            </div>
                            <span className="font-semibold text-gray-700">
                                {issuer}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="rounded-md bg-gray-100 p-1.5 transition-colors duration-300 group-hover:bg-primary/10">
                                <Calendar className="h-3.5 w-3.5 text-gray-600 transition-colors duration-300 group-hover:text-primary" />
                            </div>
                            <span className="text-gray-600">{date}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                        {description}
                    </p>

                    {/* View Certificate Button */}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md active:scale-95"
                        >
                            View Certificate
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
