<?php

namespace App\Data;

class Projects
{
    /** @return array<int, array<string, mixed>> */
    public static function all(): array
    {
        $projects = json_decode(
            file_get_contents(resource_path('data/projects.json')),
            true,
            512,
            JSON_THROW_ON_ERROR,
        );

        return $projects;
    }

    /** @return array<string, mixed>|null */
    public static function findBySlug(string $slug): ?array
    {
        foreach (static::all() as $project) {
            if ($project['slug'] === $slug) {
                return $project;
            }
        }

        return null;
    }

    /** @return array<int, array<string, mixed>> */
    public static function summaries(): array
    {
        return array_map(
            fn (array $project) => array_diff_key($project, ['caseStudy' => true]),
            static::all(),
        );
    }
}
