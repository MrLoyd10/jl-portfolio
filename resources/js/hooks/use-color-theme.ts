import { useEffect, useState } from 'react';

export type ColorTheme =
    | 'teal'
    | 'violet'
    | 'rose'
    | 'amber'
    | 'emerald'
    | 'sky'
    | 'orange'
    | 'pink'
    | 'cyan';

export const COLOR_THEMES: { id: ColorTheme; label: string; color: string }[] =
    [
        { id: 'teal', label: 'Teal', color: 'oklch(0.511 0.096 186.391)' },
        { id: 'emerald', label: 'Emerald', color: 'oklch(0.53 0.15 155)' },
        { id: 'sky', label: 'Sky', color: 'oklch(0.55 0.15 232)' },
        { id: 'violet', label: 'Violet', color: 'oklch(0.491 0.18 277.5)' },
        { id: 'rose', label: 'Rose', color: 'oklch(0.548 0.2 13.5)' },
        { id: 'pink', label: 'Pink', color: 'oklch(0.56 0.22 340)' },
        { id: 'amber', label: 'Amber', color: 'oklch(0.72 0.17 60)' },
        { id: 'orange', label: 'Orange', color: 'oklch(0.65 0.19 42)' },
        { id: 'cyan', label: 'Cyan', color: 'oklch(0.58 0.14 210)' },
    ];

export function useColorTheme() {
    const [theme, setTheme] = useState<ColorTheme>(() => {
        return (localStorage.getItem('color-theme') as ColorTheme) ?? 'teal';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('color-theme', theme);
    }, [theme]);

    return { theme, setTheme };
}
