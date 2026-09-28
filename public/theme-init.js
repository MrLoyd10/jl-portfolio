(function () {
    const themes = [
        'teal',
        'emerald',
        'sky',
        'violet',
        'rose',
        'pink',
        'amber',
        'orange',
        'cyan',
    ];
    const savedTheme = localStorage.getItem('color-theme');
    let theme = themes.includes(savedTheme) ? savedTheme : 'teal';
    const mode = localStorage.getItem('color-theme-mode');
    const now = Date.now();
    const selectDifferentTheme = () => {
        const alternatives = themes.filter((candidate) => candidate !== theme);
        theme = alternatives[Math.floor(Math.random() * alternatives.length)];
    };
    const configuredManualMinutes = Number(
        window.__PORTFOLIO_ENV__?.VITE_COLOR_THEME_MANUAL_EXPIRY_MINUTES,
    );
    const manualMinutes =
        Number.isFinite(configuredManualMinutes) && configuredManualMinutes > 0
            ? configuredManualMinutes
            : 60;
    const isManual =
        mode === 'manual' || (mode === null && savedTheme !== null);

    if (isManual) {
        localStorage.setItem('color-theme-mode', 'manual');
        const savedSelectedAt = localStorage.getItem(
            'color-theme-manual-selected-at',
        );
        const selectedAt = Number(savedSelectedAt);

        // Existing manual choices begin their expiration on the first visit after this update.
        if (
            savedSelectedAt === null ||
            !Number.isFinite(selectedAt) ||
            selectedAt <= 0 ||
            selectedAt > now
        ) {
            localStorage.setItem('color-theme-manual-selected-at', String(now));
        } else if (now - selectedAt >= manualMinutes * 60 * 1000) {
            selectDifferentTheme();
            localStorage.setItem('color-theme-mode', 'auto');
            localStorage.removeItem('color-theme-manual-selected-at');
            localStorage.setItem('color-theme-last-auto-change', String(now));
        }
    } else {
        localStorage.setItem('color-theme-mode', 'auto');

        const configuredMinutes = Number(
            window.__PORTFOLIO_ENV__?.VITE_COLOR_THEME_ROTATION_MINUTES,
        );
        const intervalMinutes =
            Number.isFinite(configuredMinutes) && configuredMinutes > 0
                ? configuredMinutes
                : 5;
        const lastChange = Number(
            localStorage.getItem('color-theme-last-auto-change'),
        );

        if (
            !Number.isFinite(lastChange) ||
            lastChange <= 0 ||
            lastChange > now
        ) {
            localStorage.setItem('color-theme-last-auto-change', String(now));
        } else if (now - lastChange >= intervalMinutes * 60 * 1000) {
            selectDifferentTheme();
            localStorage.setItem('color-theme-last-auto-change', String(now));
        }
    }

    localStorage.setItem('color-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
})();
