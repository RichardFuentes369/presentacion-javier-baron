let routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/project', component: Project },
    { path: '/resource', component: Resource }
];

let router = new VueRouter({
    routes: routes,
    mode: 'history',
    base: '/'
});

let app = new Vue({
    el: '#app',
    router: router
})