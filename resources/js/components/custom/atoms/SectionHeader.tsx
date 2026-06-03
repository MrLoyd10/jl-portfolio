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
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-primary/80">
                {Icon && <Icon className={cn('h-6 w-6', iconClassName)} />}
                {title}
            </h2>
            {subtitle && <p className="text-base text-gray-800">{subtitle}</p>}
        </div>
    );
};
