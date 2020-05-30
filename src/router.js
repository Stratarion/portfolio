
import Router               from 'vue-router'
import home                 from '@/pages/home'
import vueProjects          from '@/pages/vueProjects'
import jsProjects           from '@/pages/jsProjects'
import htmlProjects         from '@/pages/htmlProjects'
import freezeProjects       from '@/pages/freezeProjects'
import otherPage            from '@/pages/otherPage'




export default new Router({
    mode: 'history',
    base: 'portfolio',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/html-projects',
            name: 'htmlProjects',
            component: htmlProjects
        },
        {
            path: '/vue-projects',
            name: 'vueProjects',
            component: vueProjects
        },
        {
            path: '/js-projects',
            name: 'jsProjects',
            component: jsProjects
        },
        {
            path: '/other-page',
            name: 'otherPage',
            component: otherPage
        },
        {
            path: '/freeze-projects',
            name: 'freezeProjects',
            component: freezeProjects
        }
    ]
})