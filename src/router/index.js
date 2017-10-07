import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Hello1 from './../components/Hello1';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect:'/vertical'
        },
        {
            path:'/vertical',
            component:Hello
        },
        {
            path:'/horizontal',
            component:Hello1
        }
    ]
})
