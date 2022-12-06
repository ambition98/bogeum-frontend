<template>
    <div class="search-container">
        <v-row justify="center">
            <v-col sm="5">
                <v-text-field
                    v-model="keyword"
                    solo
                    label="보금자리 검색"
                    clearable
                    @keydown.enter="search"
                ></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'BogeumSearch',
    props: ['k'],
    created() {
        this.keyword = this.k
    },
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        search() {
            this.$router.push({
                name: 'search',
                query: {
                    keyword: this.keyword.trim()
                }
            })
        }
    }
}
</script>
<style scoped>
.search-container {
    margin-top: 70px;
}
</style>
