<template>
    <div class="flex flex-col my-12 select-none">
        <div
            v-if="pagesNumber >= 3"
            class="inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
        >
            <!--    prev arrow      -->
            <div
                class="h-8 w-8 ml-1 flex justify-center items-center border"
                :class="[
                    prevArrowDisabled
                        ? 'bg-gray-200 text-gray-500 cursor-default'
                        : 'cursor-pointer'
                ]"
                @click="prevArrowClicked"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-left w-4 h-4"
                >
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </div>
            <div
                class="flex h-8 font-medium"
                v-for="pageNumber of pages"
                :key="pageNumber"
            >
                <div
                    class="
                        g-white
                        border-gray-300
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-2
                        border
                        text-sm
                        font-medium
                        cursor-pointer
                    "
                    :class="[
                        selectedPage === pageNumber
                            ? 'text-gray-500'
                            : 'text-gray-300'
                    ]"
                    @click="updatedSelectedPage(pageNumber)"
                >
                    {{ pageNumber }}
                </div>
            </div>
            <!--    next arrow      -->
            <div
                class="h-8 w-8 ml-1 flex justify-center items-center border"
                :class="[
                    nextArrowDisabled
                        ? 'bg-gray-200 text-gray-500 cursor-default'
                        : 'cursor-pointer'
                ]"
                @click="nextArrowClicked"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-chevron-right w-4 h-4"
                >
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            pagesNumber: {
                type: Number,
                default: 5
            },
            selectedPage: {
                type: Number,
                required: true
            },
            availablePages: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                startRange: this.selectedPage,
                endRange: this.selectedPage + this.availablePages - 1,
                pages: []
            };
        },
        mounted() {
            this.pages = this.getPagesToShow();
        },
        computed: {
            arrowsDisabled() {
                return this.pagesNumber <= this.availablePages;
            },
            prevArrowDisabled() {
                return this.arrowsDisabled || this.selectedPage <= 1;
            },
            nextArrowDisabled() {
                return (
                    this.arrowsDisabled || this.selectedPage >= this.pagesNumber
                );
            }
        },
        watch: {
            selectedPage() {
                this.pages = this.getPagesToShow();
            }
        },
        methods: {
            // get array of the size provided (availablePages) that contains numbers between right and left range
            getPagesToShow() {
                let startRange = this.startRange;
                let endRange = this.endRange;
                let len = this.availablePages;
                if (this.pagesNumber <= this.availablePages) {
                    len = this.pagesNumber;
                    startRange = 1;
                    endRange = len;
                } else {
                    if (this.selectedPage > endRange) {
                        endRange = this.selectedPage;
                        startRange++;
                    } else if (this.selectedPage < startRange) {
                        startRange = this.selectedPage;
                        endRange--;
                    }
                }
                this.startRange = startRange;
                this.endRange = endRange;
                return Array.from({length: len}, (_, i) => startRange + i);
            },
            updatedSelectedPage(newVal) {
                this.$emit("update:selectedPage", newVal);
            },
            prevArrowClicked() {
                if (!this.prevArrowDisabled) {
                    this.updatedSelectedPage(this.selectedPage - 1);
                }
            },
            nextArrowClicked() {
                if (!this.nextArrowDisabled) {
                    this.updatedSelectedPage(this.selectedPage + 1);
                }
            }
        }
    };
</script>

<style scoped></style>
