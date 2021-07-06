<template>
    <div id="app">
        <Spinner :is-loading="isLoading"></Spinner>
        <button @click="activate">Click me</button>
        <Pagination></Pagination>
    </div>
</template>

<script>
    import Spinner from "@/components/Spinner.vue";
    import {mapMutations, mapGetters} from "vuex";
    import {tableService} from "@/services/tableService";
    import Pagination from "@/components/Pagination";
    export default {
        name: "App",
        components: {
            Pagination,
            Spinner
        },
        methods: {
            ...mapMutations(["setIsLoading"]),
            activate() {
                tableService
                    .getTableItems()
                    .then(response => {
                        console.log(response);
                    })
                    .catch(err => {
                        console.error(err);
                    })
                    .finally(() => {
                        this.setIsLoading(false);
                    });
            }
        },
        computed: {
            ...mapGetters(["isLoading"])
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
