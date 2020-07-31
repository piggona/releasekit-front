import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: ()=>
                import(/* webpackChunkName: "releaser" */ "./layout/BasicLayout"),
            children: [
                {
                    path: "/release",
                    name: "release",
                    component: ()=>
                        import(/* webpackChunkName: "releaser" */ "./views/Releaser/Release")
                },
                {
                    path: "*",
                    name: "404",
                    component: () => import(/* webpackChunkName: "releaser" */ "./views/404")
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;