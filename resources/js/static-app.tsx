import '../css/app.css';

import type { ProjectCardProps } from '@/components/custom/molecules/ProjectCards';
import { Footer } from '@/components/custom/organisms/Footer';
import { Header } from '@/components/custom/organisms/Header';
import { initializeTheme } from '@/hooks/use-appearance';
import { env } from '@/lib/env';
import Home from '@/pages/home';
import ProjectDetail, { type Project } from '@/pages/project-detail';
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import projectData from '../data/projects.json';

const projects = projectData as Project[];
const path = window.location.pathname.replace(/\/+$/, '') || '/';
const projectSlug = /^\/projects\/([^/]+)$/.exec(path)?.[1];

const homeProjects: ProjectCardProps[] = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    technologies: project.technologies,
    image: project.image,
    liveUrl: project.liveUrl ?? undefined,
    githubUrl: project.githubUrl ?? undefined,
    category: project.category,
    systemType: project.systemType,
    highlight: project.highlight,
}));

function NotFound() {
    useEffect(() => {
        document.title = `Page not found - ${env.appName}`;
    }, []);

    return (
        <>
            <Header hideNav />
            <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
                <h1 className="text-3xl font-bold">Page not found</h1>
                <p className="text-muted-foreground">
                    This project page does not exist.
                </p>
                <a href="/#project" className="text-primary underline">
                    View all projects
                </a>
            </main>
            <Footer />
        </>
    );
}

const project = projects.find((item) => item.slug === projectSlug);
const page =
    path === '/' ? (
        <Home projects={homeProjects} />
    ) : project ? (
        <ProjectDetail project={project} />
    ) : (
        <NotFound />
    );

initializeTheme();
createRoot(document.getElementById('app')!).render(
    <StrictMode>{page}</StrictMode>,
);
