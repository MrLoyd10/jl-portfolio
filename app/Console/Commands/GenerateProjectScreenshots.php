<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class GenerateProjectScreenshots extends Command
{
  /**
   * The name and signature of the console command.
   *
   * php artisan screenshots:generate
   * php artisan screenshots:generate --project=atlas
   * php artisan screenshots:generate --output=array|json
   */
  protected $signature = 'screenshots:generate
                            {--project= : Limit to a specific project folder (e.g. atlas)}
                            {--output=array : Output format: array or json}';

  protected $description = 'Generate a screenshots array from public/images/projects subdirectories';

  /** Image extensions to include */
  private array $imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];

  public function handle(): int
  {
    $baseDir = public_path('images/projects');

    if (! File::isDirectory($baseDir)) {
      $this->error("Directory not found: {$baseDir}");
      $this->line('Make sure public/images/projects exists.');
      return self::FAILURE;
    }

    $projectFilter = $this->option('project');
    $outputFormat  = $this->option('output');

    // Collect all project folders (or just the one requested)
    $projectDirs = collect(File::directories($baseDir))
      ->when($projectFilter, fn($dirs) => $dirs->filter(
        fn($dir) => basename($dir) === $projectFilter
      ));

    if ($projectDirs->isEmpty()) {
      $this->warn('No project folders found' . ($projectFilter ? " matching \"{$projectFilter}\"" : '') . '.');
      return self::FAILURE;
    }

    $results = [];

    foreach ($projectDirs as $projectDir) {
      $projectSlug = basename($projectDir);
      $screenshots  = $this->buildScreenshots($projectDir, $projectSlug);

      if (empty($screenshots)) {
        $this->warn("No images found in project: {$projectSlug}");
        continue;
      }

      $results[$projectSlug] = $screenshots;
    }

    if (empty($results)) {
      $this->warn('No screenshots were found across any project folder.');
      return self::FAILURE;
    }

    $this->renderOutput($results, $outputFormat);

    return self::SUCCESS;
  }

    // -----------------------------------------------------------------------
    // Helpers
    // -----------------------------------------------------------------------

  /**
   * Build the screenshots array for a single project directory.
   */
  private function buildScreenshots(string $projectDir, string $projectSlug): array
  {
    $files = collect(File::files($projectDir))
      ->filter(fn($file) => in_array(
        strtolower($file->getExtension()),
        $this->imageExtensions
      ))
      ->sortBy(fn($file) => $file->getFilename());

    $screenshots = [];

    foreach ($files as $file) {
      $filename  = $file->getFilenameWithoutExtension(); // e.g. "transaction-page"
      $caption   = $this->toCaption($filename);           // e.g. "Transaction Page"
      $url       = $this->toPublicUrl($projectSlug, $file->getFilename());

      $screenshots[] = [
        'url'     => $url,
        'caption' => $caption,
      ];
    }

    return $screenshots;
  }

  /**
   * Convert a filename (slug) to a human-readable caption.
   *
   * "transaction-page"  → "Transaction Page"
   * "user_management"   → "User Management"
   * "dashboard"         → "Dashboard"
   */
  private function toCaption(string $filename): string
  {
    // Replace hyphens and underscores with spaces, then title-case
    return Str::title(str_replace(['-', '_'], ' ', $filename));
  }

  /**
   * Return a root-relative asset path so the frontend resolves it
   * against whatever base URL is in use — no hardcoding needed.
   *
   * Output example: /images/projects/atlas/dashboard.png
   *
   * In your React component use it directly:
   *   <img src={shot.url} />          ← works on any domain / subdomain
   *   or wrap with asset():  asset($shot['url'])  in Blade
   */
  private function toPublicUrl(string $projectSlug, string $filename): string
  {
    return "/images/projects/{$projectSlug}/{$filename}";
  }

  // -----------------------------------------------------------------------
  // Output rendering
  // -----------------------------------------------------------------------

  private function renderOutput(array $results, string $format): void
  {
    foreach ($results as $project => $screenshots) {
      $this->newLine();
      $this->line("<fg=cyan;options=bold>Project: {$project}</>");
      $this->line(str_repeat('─', 60));

      if ($format === 'json') {
        $this->renderJson($screenshots);
      } else {
        $this->renderPhpArray($project, $screenshots);
      }
    }
  }

  private function renderPhpArray(string $project, array $screenshots): void
  {
    $lines = ["'screenshots' => ["];

    foreach ($screenshots as $item) {
      $url     = $item['url'];
      $caption = $item['caption'];
      $lines[] = "    ['url' => '{$url}', 'caption' => '{$caption}'],";
    }

    $lines[] = "],";

    $this->line(implode(PHP_EOL, $lines));
  }

  private function renderJson(array $screenshots): void
  {
    $this->line(json_encode(['screenshots' => $screenshots], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
  }
}
