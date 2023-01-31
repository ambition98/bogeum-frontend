async function logout(vue) {
    await vue.$axios.post('/auth/logout')
    vue.$store.dispatch('setUser', '')
    vue.$router.go('/')
}

export default {
    install(Vue) {
        Vue.prototype.$logout = global.logout
        Vue.prototype.$callUserApi = global.callUserApi
    }
}

export const global = {
    async callUserApi(method) {
        try {
            await this.$axios.get('/user/verify')
            method()
        } catch (err) {
            if (err.response.status === 401) {
                try {
                    await this.$axios.get('/auth/refresh')
                    console.log('Refreshed')
                    method()
                } catch (err2) {
                    logout(this)
                }
            } else {
                logout(this)
            }
        }
    },
    logout: logout
}
