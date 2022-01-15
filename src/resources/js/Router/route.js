const routes = [
    {
        path: '/home',
        component: () => import('../Pages/Home.vue'),
        name: 'home'
    },
    {
        path: '/about',
        component: () => import('../Pages/About.vue'),
        name: 'about'
    },
    {
        path: '/test',
        component: () => import('../Pages/Test.vue'),
        name: 'test'
    },
]

export  default routes;
