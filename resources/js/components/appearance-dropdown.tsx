import { useAppearance } from '@/hooks/use-appearance';
import { Moon, Sun } from 'lucide-react';
import { HTMLAttributes } from 'react';

const modes = ['light', 'dark'] as const;

const icons = {
    light: Sun,
    dark: Moon,
};

export default function AppearanceToggle({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const cycle = () => {
        const current = modes.indexOf(appearance as (typeof modes)[number]);
        // if current is -1 (e.g. was 'system'), defaults to index 0 → 'light'
        const next = modes[(current + 1) % modes.length] ?? 'light';
        updateAppearance(next);
    };

    const Icon = icons[appearance as keyof typeof icons] ?? Sun;

    return (
        <div className={className} {...props}>
            <button
                onClick={cycle}
                aria-label={`Current theme: ${appearance}. Click to cycle.`}
                className="flex h-9 w-9 items-center justify-center rounded-md text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
            >
                <Icon className="h-5 w-5" />
            </button>
        </div>
    );
}
