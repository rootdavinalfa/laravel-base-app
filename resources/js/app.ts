import '../css/app.css';
import './bootstrap';

import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {createApp, DefineComponent, h} from 'vue';
import {ZiggyVue} from '../../vendor/tightenco/ziggy';
import DefaultLayout from "@/Layouts/DefaultLayout.vue";


await createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => {
        let page = resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
        )
        page.then((module) => {
            module.default.layout = module.default.layout || DefaultLayout;
        })
        return page
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
