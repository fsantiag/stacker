import Vue from 'vue'
import Router from 'vue-router'
import StageRequisitionHeader from './components/stage/StageRequisitionHeader'
import StagePublisherHeader from './components/stage/StagePublisherHeader'
import StageSubscriptionHeader from './components/stage/StageSubscriptionHeader'
import StageRequisitionGeneral from './components/stage/StageRequisitionGeneral'
import HttpPublisher from './components/stage/publishers/HttpPublisher'
import HttpSubscription from './components/stage/subscriptions/HttpSubscription'
import StageEvent from './components/stage/StageEvent'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/requisition/:id",
            component: StageRequisitionHeader,
            children: [
                {
                    path: "general",
                    component: StageRequisitionGeneral
                },
                {
                    path: "onInit",
                    component: StageEvent,
                },
                {
                    path: "onFinish",
                    component: StageEvent,
                }
            ]
        },
        {
            path: "/publisher/:id",
            component: StagePublisherHeader,
            children: [
                {
                    path: "http",
                    component: HttpPublisher
                },
                {
                    path: "onInit",
                    component: StageEvent,
                },
                {
                    path: "onMessageReceived",
                    component: StageEvent,
                },
                {
                    path: "onFinish",
                    component: StageEvent,
                }
            ],

        },
        {
            path: "/subscription/:id",
            component: StageSubscriptionHeader,
            children: [
                {
                    path: "http",
                    component: HttpSubscription
                },
                {
                    path: "onInit",
                    component: StageEvent,
                },
                {
                    path: "onMessageReceived",
                    component: StageEvent,
                },
                {
                    path: "onFinish",
                    component: StageEvent,
                }
            ],

        }

        //     this generates a separate chunk (about.[hash].js) for this route
        //     which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    ]
})
