<?php

namespace Fbo\LarabergCustomBlocks;

use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script("nova-gutenberg-jquery", "https://code.jquery.com/jquery-1.12.4.min.js");
            Nova::script('nova-gutenberg', __DIR__ . '/../dist/js/field.js');
            Nova::style('nova-gutenberg', __DIR__ . '/../dist/css/field.css');
            Nova::script("nova-gutenberg-react", "https://unpkg.com/react@16.8.6/umd/react.production.min.js");
            Nova::script("nova-gutenberg-react-dom", "https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js");
            // Nova::script("nova-gutenberg-moment", "https://unpkg.com/moment@2.22.1/min/moment.min.js");
            Nova::script("nova-gutenberg-laraberg", base_path("vendor/van-ons/laraberg/public/js/laraberg.js"));
            Nova::style('nova-gutenberg-laraberg', base_path("vendor/van-ons/laraberg/public/css/laraberg.css"));
            //
            // AOS resources
            // Nova::script('laraberg-custom-blocks', __DIR__.'/../dist/js/aos.js');
            // Nova::style('laraberg-custom-blocks', __DIR__.'/../dist/css/aos.css');
            // blocks resources
            Nova::script('laraberg-custom-blocks', __DIR__.'/../dist/js/editor.js');
            Nova::style('laraberg-custom-blocks', __DIR__.'/../dist/css/editor.css');
            // default resources
            Nova::script('laraberg-custom-blocks-scripts', __DIR__.'/../dist/js/script.js');
            Nova::style('laraberg-custom-blocks-styles', __DIR__.'/../dist/css/style.css');
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(base_path('vendor/van-ons/laraberg/src/config/laraberg.php'), 'laraberg');
    }
}
