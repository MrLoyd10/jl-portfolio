<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Data\Projects;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
  public function show(Request $request, string $slug): Response
  {
    $project = Projects::findBySlug($slug);

    abort_if($project === null, 404);

    return Inertia::render('project-detail', [
      'project' => $project,
    ]);
  }
}
