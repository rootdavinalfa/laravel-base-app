<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('easter')->group(function () {
    Route::get('component', function () {
        return Inertia::render('Dev/ComponentPreview');
    });
});
