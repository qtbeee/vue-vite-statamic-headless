<?php

return [

    /*
    |--------------------------------------------------------------------------
    | GraphQL
    |--------------------------------------------------------------------------
    |
    | Here you may enable the GraphQL API, and select which resources
    | are available to be queried, depending on your site's needs.
    |
    | https://statamic.dev/graphql
    |
    */

    'enabled' => env('STATAMIC_GRAPHQL_ENABLED', true),

    'resources' => [
        'collections' => true,
        'navs' => false,
        'taxonomies' => false,
        'assets' => true,
        'globals' => false,
        'forms' => false,
        'sites' => false,
        'users' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Queries
    |--------------------------------------------------------------------------
    |
    | Here you may list queries to be added to the Statamic schema.
    |
    | https://statamic.dev/graphql#custom-queries
    |
    */

    'queries' => [
        //
    ],

    /*
    |--------------------------------------------------------------------------
    | Middleware
    |--------------------------------------------------------------------------
    |
    | Here you may list middleware to be added to the Statamic schema.
    |
    | https://statamic.dev/graphql#custom-middleware
    |
    */

    'middleware' => [
        //
    ],

    /*
    |--------------------------------------------------------------------------
    | Caching
    |--------------------------------------------------------------------------
    |
    | By default, Statamic will cache each request until the specified
    | expiry, or until content is changed. See the documentation for
    | more details on how to customize your cache implementation.
    |
    | https://statamic.dev/graphql#caching
    |
    */

    // 'cache' => [
        // 'expiry' => 60,
    // ],
    
    // TODO(kristy): https://github.com/statamic/cms/issues/5389
    'cache' => false,

];
