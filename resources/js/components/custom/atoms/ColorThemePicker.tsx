import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { COLOR_THEMES, useColorTheme } from '@/hooks/use-color-theme';

export function ColorThemePicker() {
    const { theme, setTheme } = useColorTheme();
    const current = COLOR_THEMES.find((t) => t.id === theme);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    aria-label="Change color theme"
                    className="flex h-9 w-9 items-center justify-center rounded-md p-2 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <span
                        className="h-4 w-4 rounded-full ring-2 ring-offset-2 ring-offset-white transition-transform duration-150 hover:scale-110 dark:ring-offset-gray-900"
                        style={{
                            backgroundColor: current?.color,
                            boxShadow: `0 0 0 1.5px ${current?.color}`,
                        }}
                    />
                </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-52 p-3">
                <p className="mb-2.5 text-xs font-medium text-muted-foreground">
                    Color Theme
                </p>
                <div className="grid grid-cols-3 gap-2">
                    {COLOR_THEMES.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTheme(t.id)}
                            className={`group flex flex-col items-center gap-1.5 rounded-lg p-2 transition-all duration-150 hover:bg-accent ${
                                theme === t.id ? 'bg-accent' : ''
                            }`}
                        >
                            <span
                                className={`h-6 w-6 rounded-full transition-all duration-150 group-hover:scale-110 ${
                                    theme === t.id
                                        ? 'scale-110 ring-2 ring-primary ring-offset-2'
                                        : 'ring-1 ring-black/10 dark:ring-white/20'
                                }`}
                                style={{ backgroundColor: t.color }}
                            />
                            <span
                                className={`text-xs transition-colors ${
                                    theme === t.id
                                        ? 'font-medium text-foreground'
                                        : 'text-muted-foreground group-hover:text-foreground'
                                }`}
                            >
                                {t.label}
                            </span>
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
