<?php

use App\Data\Projects;
use App\Http\Controllers\ProjectController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
  return Inertia::render('home', [
    'projects' => Projects::summaries(),
  ]);
})->name('home');

Route::get('/projects/{slug}', [ProjectController::class, 'show'])->name('projects.show');

// ! Disable dashboard for now, we don't have anything to show there
// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__ . '/settings.php';
// Auth like /login and /register are registered by Fortify you can customize them in FortifyServiceProvider.
