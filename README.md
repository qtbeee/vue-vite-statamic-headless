# Vue/Vite frontend + headless Statamic CMS Example

### Technologies involved
- Vue 3
- Vite
- Pinia (vuex alternative)
- TailwindCSS 3 (to make my css life easier)
- Statamic 3 (headless cms!)
- Laravel Sail (for a convenient docker of Statamic)
- Graphql
- pnpm

### Basic structure of this repo
- `./statamic` is where the Statamic "server"(?) lives, in the form of a Laravel Sail docker setup.
- The rest of this is your usual Vite + Vue setup

### Running this example project
1. Make sure you have the Docker service running.
2. Go into the statamic folder and start the cms server
```bash
> cd ./statamic
> ./vendor/bin/sail up -d
```
3. Go back to the root of the project, install packages and start the dev server
```bash
> pnpm i
> pnpm dev
```

## NOTES
#### (aka things I learned while putting this together)
- The Graphql API must be turned on for any of this to work properly. That feature is requires PRO mode to be turned on. See `statamic/config/statamic/graphql.php` and `statamic/config/statamic/editions.php`. Also see Statamic docs https://statamic.dev/graphql
- If you have any assets (let's face it, you will) you wanna fetch from the Statamic side, the asset container defined in Statamic needs to be set up with a url path. See `statamic/config/filesystems.php` and `statamic/content/assets/blog_thumbnails.yaml`. Also check out https://statamic.dev/troubleshooting/assets-missing-urls.
- CORS is pain, but at least you can configure allowed origins for Graphql API in `statamic/config/cors.php`
- Since we're going headless, there's no need to define any views or layouts in Statamic. All html is on the Vue side.
- Graphql API cache needs to be turned off to be useful in Live Previews in the control panel, see https://github.com/statamic/cms/issues/5389
- Speaking of Live Preview, this project sets up the Vue portion to be the source of the live preview when editing content while in Statamic Control Panel. See `statamic/content/collections/blog.yaml` as an example of setting the live preview target, and https://statamic.dev/live-preview#headless-frontend-frameworks
- The REST API Statamic has is incomplete relative to the Graphql API so that's why we're stuck with Graphql for now. See https://github.com/statamic/cms/issues/5609 (this issue was closed the same day I saw it but there's no release yet?)
- I'm sure there's plenty of stuff in the `statamic/` directory that could be deleted since we don't use it for this headless cms use-case, but I don't know much about Laravel so I'll be leaving it alone :P 
