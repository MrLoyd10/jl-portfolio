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
    buttonLabel?: string;
}

export const AchievementCard = ({
    title,
    issuer,
    date,
    description,
    certificateId,
    image,
    link,
    buttonLabel,
}: AchievementCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className="group relative h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Outer glow */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary via-blue-500 to-purple-500 opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />

            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-primary/30 group-hover:shadow-xl">
                {/* Image */}
                <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    {!imageLoaded && (
                        <div className="absolute inset-0 animate-pulse bg-gray-200" />
                    )}

                    {/* Verified badge */}
                    <div className="absolute top-2 left-2 z-10">
                        <div className="flex items-center gap-1 rounded-full border border-green-200 bg-white/95 px-2 py-0.5 shadow-sm backdrop-blur-sm">
                            <Shield className="h-3 w-3 text-green-600" />
                            <span className="text-[10px] font-bold text-green-700">
                                Certified
                            </span>
                        </div>
                    </div>

                    <img
                        src={image}
                        alt={title}
                        onLoad={() => setImageLoaded(true)}
                        className={`h-full w-full object-cover transition-all duration-500 ${
                            imageLoaded
                                ? 'scale-100 opacity-100'
                                : 'scale-105 opacity-0'
                        } group-hover:scale-105`}
                    />

                    {/* Bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                    {/* Accent bar at bottom of image — slides in on hover */}
                    <div className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 transition-transform duration-500 group-hover:scale-x-100" />

                    {/* Trophy overlay */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[2px] transition-all duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="rounded-full bg-gradient-to-br from-primary to-blue-600 p-3 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                            <Trophy className="h-5 w-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2.5 p-4">
                    {/* Title */}
                    <div className="flex items-center gap-2">
                        <div className="mt-0.5 shrink-0 rounded-lg bg-primary/10 p-1.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary/20">
                            <Award className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <h3 className="text-sm leading-snug font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                            {title}
                        </h3>
                    </div>

                    {/* Issuer + Date tags */}
                    <div className="flex flex-wrap gap-1.5">
                        <div className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-[11px] text-gray-600 transition-colors duration-300 group-hover:bg-primary/5 group-hover:text-primary/80">
                            <Building2 className="h-2.5 w-2.5 shrink-0 text-primary/50" />
                            <span className="font-medium">{issuer}</span>
                        </div>
                        <div className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1 text-[11px] text-gray-600 transition-colors duration-300 group-hover:bg-primary/5">
                            <Calendar className="h-2.5 w-2.5 shrink-0 text-primary/50" />
                            <span className="font-medium">{date}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="line-clamp-2 flex-1 text-[11px] leading-relaxed text-gray-700">
                        {description}
                    </p>

                    {/* Button */}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn mt-2 flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary hover:shadow-md active:scale-95"
                        >
                            {buttonLabel || 'View Certificate'}
                            <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
