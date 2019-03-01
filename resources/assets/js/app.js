import App from './components/App.vue';

// Router
Vue.router = new VueRouter({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        name: 'default',
        component: require('./components/pages/Home.vue')
    }, {
        path: '/login',
        name: 'login',
        component: require('./components/pages/Login.vue'),
        meta: {auth: false}
    }, {
        path: '/register',
        name: 'register',
        component: require('./components/pages/Register.vue'),
        meta: {
            auth: false,
        }
    }, {
        path: '/404',
        name: 'error-404',
        component: require('./components/pages/404.vue')
    }, {
        path: '/403',
        name: 'error-403',
        component: require('./components/pages/403.vue')
    }, {
        path: '/502',
        name: 'error-502',
        component: require('./components/pages/502.vue')
    }]
});

// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios, axios);
// Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// Http
Vue.http.options.root = 'http://127.0.0.1:8000/api';

// Vue Auth
Vue.use(require('../src/index.js'), {
    auth: require('../drivers/auth/bearer.js'),
    http: require('../drivers/http/vue-resource.1.x.js'),
    // http: require('../drivers/http/axios.1.x.js'),
    router: require('../drivers/router/vue-router.2.x.js'),
    rolesVar: 'role',
    facebookOauth2Data: {
        // clientId: '196729390739201'
    },
    googleOauth2Data: {
        // clientId: '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com'
    }
});

// Start
var component = require('./components/App.vue');

component.router = Vue.router;

new Vue(component).$mount('#app');