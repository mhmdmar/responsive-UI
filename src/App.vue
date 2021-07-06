<template>
    <div id="app">
        <RecordsContainer :records="records"></RecordsContainer>
        <Pagination
            v-if="records.length > 0"
            class="hidden md:block md:flex md:content-center md:items-center"
            :selectedPage.sync="selectedPage"
        ></Pagination>
    </div>
</template>

<script>
    import Pagination from "@/components/Pagination.vue";
    import RecordsContainer from "@/components/RecordsContainer.vue";
    import {tableService} from "@/services/tableService";
    export default {
        name: "App",
        components: {
            RecordsContainer,
            Pagination
        },
        methods: {
            handleError(err) {
                console.error(err);
            }
        },
        mounted() {
            tableService
                .getTableItems()
                .then(response => {
                    if (response.error) {
                        this.handleError(response.error);
                    } else {
                        this.records = response.data;
                    }
                })
                .catch(err => {
                    console.error(err);
                });
        },
        data() {
            return {
                selectedPage: 1,
                records: []
            };
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
