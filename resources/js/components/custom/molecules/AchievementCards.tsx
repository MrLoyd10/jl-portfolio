import { Badge } from '@/components/ui/badge';
import {
    Award,
    Building2,
    Calendar,
    ExternalLink,
    Hash,
    Sparkles,
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
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:border-primary/30 hover:shadow-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Gradient Border Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/10 via-yellow-500/10 to-primary/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Certificate Image */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                {/* Loading skeleton */}
                {!imageLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-gray-200" />
                )}

                {/* Verified Badge */}
                <div className="absolute top-3 right-3 z-10">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-green-500/50 opacity-75 blur-md" />
                        <Badge className="relative border-green-200 bg-white/95 shadow-lg backdrop-blur-sm">
                            <Sparkles className="mr-1.5 h-3 w-3 text-green-600" />
                            <span className="text-xs font-semibold text-green-700">
                                Verified
                            </span>
                        </Badge>
                    </div>
                </div>

                {/* Image */}
                <img
                    src={image}
                    alt={`${title} certificate`}
                    onLoad={() => setImageLoaded(true)}
                    className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Shimmer Effect */}
                <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ${
                        isHovered ? 'translate-x-full' : '-translate-x-full'
                    }`}
                    style={{ width: '50%' }}
                />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Header */}
                <div>
                    <div className="mb-3 flex items-start gap-3">
                        <div className="flex items-center justify-center rounded-lg bg-primary/10 p-2">
                            <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                            <h3 className="mb-1 text-lg leading-tight font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                                {title}
                            </h3>
                            <div className="h-0.5 w-0 rounded-full bg-gradient-to-r from-primary to-yellow-500 transition-all duration-500 group-hover:w-full" />
                        </div>
                    </div>

                    {/* Issuer and Date with Icons */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Building2 className="h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="font-semibold">{issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                    {description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                    {certificateId && (
                        <Badge
                            variant="outline"
                            className="flex items-center gap-1.5 border-gray-300 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10"
                        >
                            <Hash className="h-3 w-3" />
                            <span className="font-mono text-xs">
                                {certificateId}
                            </span>
                        </Badge>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                        >
                            <span className="relative">
                                View Certificate
                                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover/link:w-full" />
                            </span>
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                    )}
                </div>

                {/* Progress Bar Decoration */}
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary via-yellow-500 to-primary transition-all duration-1000 ${
                            isHovered ? 'w-full' : 'w-0'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
};
