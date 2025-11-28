import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

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
    return (
        <div className="group bg-gray-50 border border-gray-200 hover:border-gray-400 rounded-lg transition-all overflow-hidden">
            {/* Certificate Image */}
            <div className="relative bg-gray-100 w-full h-48 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} certificate`}
                    className="w-full h-full transition-transform object-cover group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="space-y-4 p-6">
                {/* Header */}
                <div>
                    <h3 className="mb-2 font-bold text-lg leading-tight">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-800 text-sm">
                        <span className="font-semibold">{issuer}</span>
                        <span>•</span>
                        <span>{date}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-2">
                    {certificateId && (
                        <Badge variant="outline" className="border-slate-600">
                            ID: {certificateId}
                        </Badge>
                    )}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary text-sm hover:underline"
                        >
                            View Certificate
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
