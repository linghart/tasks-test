<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="/">Tasks</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" :class="checkRoute('default')" @click="$router.push({name: 'default'})">Home</a>
                    </li>
                    <li class="nav-item" v-show="!$auth.check()">
                        <a class="nav-link" :class="checkRoute('login')" @click="$router.push({name: 'login'})">Login</a>
                    </li>
                    <li class="nav-item" v-show="!$auth.check()">
                        <a class="nav-link" :class="checkRoute('register')" @click="$router.push({name: 'register'})">Register</a>
                    </li>
                    <!--v-show="$auth.check()"-->
                    <li class="nav-item" v-show="$auth.check()">
                        <a class="nav-link" v-on:click="logout()" href="javascript:void(0);">Logout</a>
                    </li>
                </ul>

            </div>
        </nav>

        <div v-if="$auth.ready() && loaded">
            <router-view></router-view>
        </div>

        <div v-if="!$auth.ready() || !loaded">
            <div style="text-align:center; padding-top:50px;">
                Loading site...
            </div>
        </div>
    </div>
</template>

<script>
    import "@mdi/font/css/materialdesignicons.min.css"
    export default {
        data() {
            return {
                context: 'app context',
                loaded: false
            };
        },

        mounted() {
            var _this = this;

            // Set up $auth.ready with other arbitrary loaders (ex: language file).
            setTimeout(function () {
                _this.loaded = true;
            }, 500);
        },

        created() {
            var _this = this;

            this.$auth.ready(function () {
                console.log('ready ' + this.context);
            });

            // Vue.http.interceptors.push(function (req, next) {
            //     next(function (res) {
            //         if ( ! res.ok) {
            //             _this.$router.push({name: 'error-502'})
            //         }
            //     });
            // });
        },

        methods: {
            checkRoute(val){
                return this.$route.name === val ? 'active' : ''
            },
            logout() {
                this.$auth.logout({
                    makeRequest: true,
                    success() {
                        console.log('success ' + this.context);
                    },
                    error() {
                        console.log('error ' + this.context);
                    }
                });
            },

            unimpersonate() {
                this.$auth.unimpersonate({
                    success() {
                        console.log('success ' + this.context);
                    },
                    error() {
                        console.log('error ' + this.context);
                    }
                });
            }
        }
    }
</script>