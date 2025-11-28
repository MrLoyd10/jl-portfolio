import { cn } from '@/lib/utils';

export const SectionHeader = ({
    mainDivClassName,
    iconClassName,
    title,
    subtitle,
    icon: Icon,
}: {
    mainDivClassName?: string;
    iconClassName?: string;
    title: string;
    subtitle?: string;
    icon?: React.ComponentType<{ className?: string }>;
}) => {
    return (
        <div className={cn('mb-4', mainDivClassName)}>
            <h2 className="flex items-center gap-2 mb-2 font-bold text-2xl text-primary/80">
                {Icon && <Icon className={cn('w-6 h-6', iconClassName)} />}
                {title}
            </h2>
            {subtitle && <p className="text-gray-800 text-lg">{subtitle}</p>}
        </div>
    );
};
