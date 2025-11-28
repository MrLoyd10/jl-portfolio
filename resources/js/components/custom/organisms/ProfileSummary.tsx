import { Button } from '@/components/ui/button';
import { Calendar, Github, Instagram, Linkedin, MapPin } from 'lucide-react';

export const ProfileSummary = () => {
    const socialLinks = [
        { icon: Github, href: 'https://github.com/mrloyd', label: 'GitHub' },
        {
            icon: Linkedin,
            href: 'https://linkedin.com/in/mrloyd',
            label: 'LinkedIn',
        },
        {
            icon: Instagram,
            href: 'https://instagram.com/mrloyd',
            label: 'Instagram',
        },
    ];

    const handleScheduleCall = () => {
        // Replace with your actual scheduling link (e.g., Calendly)
        window.open('https://calendly.com/your-link', '_blank');
    };

    return (
        <section
            id="home"
            className="flex items-center mx-auto max-w-6xl min-h-[calc(100vh)]"
        >
            <div className="items-center gap-12 grid md:grid-cols-5">
                {/* Left Column: Image and Social Links */}
                <div className="flex justify-center md:col-span-2">
                    <div className="flex flex-col justify-center items-center space-y-6">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="border-2 border-primary/50 rounded-full w-64 h-64 overflow-hidden">
                                <img
                                    src="https://picsum.photos/400"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-800">
                            <MapPin className="w-5 h-5" />
                            <span>Ngp, Maharashtra, India</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-muted-foreground/10 p-3 border border-gray-400 rounded-full transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </a>
                            ))}
                            {/* X (Twitter) Icon - Custom since not in lucide */}
                            <a
                                href="https://x.com/mrloyd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-muted-foreground/10 p-3 border border-gray-400 rounded-full transition-colors"
                                aria-label="X (Twitter)"
                            >
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="space-y-6 md:col-span-3 text-center md:text-left">
                    {/* Schedule Button */}
                    <div className="flex justify-center md:justify-start">
                        <Button
                            onClick={handleScheduleCall}
                            variant="outline"
                            // className="border-primary/50"
                        >
                            <Calendar className="mr-2 w-4 h-4" />
                            Schedule a call
                        </Button>
                    </div>

                    {/* Name */}
                    <h1 className="font-bold text-5xl text-primary md:text-6xl lg:text-7xl">
                        Aditya Domle
                    </h1>

                    {/* Title */}
                    <p className="text-gray-800 text-xl md:text-2xl">
                        Full-Stack Developer | Next.js, React, Node.js
                    </p>

                    {/* Description */}
                    <p className="max-w-2xl text-base text-gray-600 md:text-lg leading-relaxed">
                        Self-taught Full-Stack Developer from India,
                        specializing in modern web technologies and open-source
                        development. Passionate about building scalable
                        applications with Next.js and contributing to the
                        developer community through open-source projects.
                    </p>
                </div>
            </div>
        </section>
    );
};
