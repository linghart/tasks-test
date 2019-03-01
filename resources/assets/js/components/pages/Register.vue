<template>
    <main class="register-form">
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
                            <button @click="register" type="button" class="btn btn-primary">
                                Register
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
                context: 'register context',
                
                data: {
                    body: {
                        username: '',
                        password: '',
                    },
                    autoLogin: true,
                    rememberMe: true
                },

                formData: new FormData(),

                error: null
            };
        },

        methods: {

            register() {
                var formData = new FormData();

                formData.append('username', this.data.body.username);
                formData.append('password', this.data.body.password);

                this.$auth.register({
                    body: formData,
                    data: formData,
                    autoLogin: this.data.autoLogin,
                    rememberMe: this.data.rememberMe,
                    redirect: '/',
                    success: function () {
                        console.log('success ' + this.context);
                    },
                    error: function (res) {
                        console.log('error ' + this.context);
                        this.error = res.data;
                    }
                });
            }
        }
    }
</script>