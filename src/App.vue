<template>
    <div id="app" class="md:overflow-hidden md:h-screen">
        <Topbar class="sm-hidden"></Topbar>
        <Separator></Separator>
        <div class="md:overflow-auto md:h-full">
            <RecordsContainer :records="records"></RecordsContainer>
            <div v-if="records.length > 0" class="sm-hidden md:h-36">
                <Pagination
                    class="md:flex md:content-center md:items-center"
                    :selectedPage.sync="selectedPage"
                ></Pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import Pagination from "@/components/Pagination.vue";
    import RecordsContainer from "@/components/RecordsContainer.vue";
    import Topbar from "@/components/Topbar.vue";
    import Separator from "@/components/Separator.vue";
    import {tableService} from "@/services/tableService";
    export default {
        name: "App",
        components: {
            RecordsContainer,
            Pagination,
            Topbar,
            Separator
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
    @import "./assets/shared.scss.css";
</style>
