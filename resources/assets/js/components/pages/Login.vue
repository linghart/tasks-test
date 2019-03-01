<template>
    <main class="login-form">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">



                            <form class="auth-form">
                                <div class="form-group row">
                                    <label for="username" class="col-md-4 col-form-label text-md-right">Username</label>
                                    <div class="col-md-6">
                                        <input type="text" id="username" v-model="data.body.username" class="form-control" required autofocus>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                    <div class="col-md-6">
                                        <input type="password" id="password" v-model="data.body.password" class="form-control" name="password" required>
                                    </div>
                                </div>

                                <div class="col-md-6 offset-md-4">
                                    <button @click="login" type="button" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>



                </div>
            </div>
        </div>

    </main>
</template>

<script>
    export default {
        data() {
            return {
                context: 'login context',

                data: {
                    body: {
                        username: 'admin',
                        password: 'admin'
                    },
                    fetchUser: true
                },

                error: null
            };
        },

        mounted() {
            console.log(this.$auth.redirect());
        },

        methods: {
            login() {
                var redirect = this.$auth.redirect();

                this.$auth.login({
                    body: this.data.body, // Vue-resource
                    data: this.data.body, // Axios
                    rememberMe: false,
                    redirect: '/',
                    fetchUser: this.data.fetchUser
                })
                .then((response) => {
                    console.log('response', response);
                    console.log('success ' + this.context);
                }, (res) => {
                    console.log('error ' + this.context);

                    this.error = res.data;
                });
            }
        }
    }
</script>