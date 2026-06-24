const getEnv = (key: string, fallback: string) => {
    const value = import.meta.env[key];

    return typeof value === 'string' && value.trim() !== '' ? value : fallback;
};

const normalizePhoneHref = (phone: string) =>
    `tel:${phone.replace(/[^\d+]/g, '')}`;

export const env = {
    appName: getEnv('VITE_APP_NAME', 'Laravel'),
    resumeUrl: getEnv(
        'VITE_RESUME_DOWNLOAD_URL',
        'https://drive.google.com/uc?export=download&id=11t7Bk8HAh2jnpJ-1KWeYwr-TQdmnvBcm',
    ),
    profile: {
        name: getEnv('VITE_PROFILE_NAME', 'Jhon Loyd Ocoy'),
        address: getEnv('VITE_PROFILE_ADDRESS', 'Parañaque City, Philippines'),
        imageUrl: getEnv(
            'VITE_PROFILE_IMAGE_URL',
            'https://drive.google.com/thumbnail?id=17-D7hyQaL011JD4kttgqAHsyKGnLHtCJ&sz=w1000',
        ),
        yearsExperience: getEnv('VITE_PROFILE_YEARS_EXPERIENCE', '2+'),
        systemsProjects: getEnv('VITE_PROFILE_SYSTEMS_PROJECTS', '10+'),
        coreStack: getEnv('VITE_PROFILE_CORE_STACK', 'Laravel + React'),
    },
    contact: {
        email: getEnv('VITE_CONTACT_EMAIL', 'jl.ocoy.work@gmail.com'),
        phone: getEnv('VITE_CONTACT_PHONE', '+63 994 696 5365'),
        location: getEnv('VITE_PROFILE_ADDRESS', 'Parañaque City, Philippines'),
        availabilityTitle: 'Available for Opportunities',
        availabilityStatus: 'Open to Work',
        availabilityDescription:
            "Currently open to freelance projects, full-time positions, and exciting collaborations. Let's build something great together.",
        interests: getEnv(
            'VITE_CONTACT_INTERESTS',
            'Web Development,Frontend,Backend,Full-Stack',
        )
            .split(',')
            .map((interest) => interest.trim())
            .filter(Boolean),
        responseNote: getEnv(
            'VITE_CONTACT_RESPONSE_NOTE',
            'Reach out via email or phone above — I typically reply within 24 hours.',
        ),
    },
    socials: {
        githubUrl: getEnv(
            'VITE_SOCIAL_GITHUB_URL',
            'https://github.com/mrloyd10',
        ),
        instagramUrl: getEnv(
            'VITE_SOCIAL_INSTAGRAM_URL',
            'https://instagram.com/jhonloyd.cy',
        ),
        facebookUrl: getEnv(
            'VITE_SOCIAL_FACEBOOK_URL',
            'https://facebook.com/jhonloydocoy',
        ),
    },
    footer: {
        brandName: 'MrLoyd',
        brandTitle: getEnv('VITE_FOOTER_BRAND_TITLE', 'Full Stack Developer'),
        brandDescription:
            'Building scalable web applications with clean code and production-ready solutions.',
        builtWith: 'React · TailwindCSS · Shadcn',
        madeIn: 'the Philippines',
        availabilityText: 'Open to opportunities',
    },
};

export const contactLinks = {
    emailHref: `mailto:${env.contact.email}`,
    phoneHref: normalizePhoneHref(env.contact.phone),
};
