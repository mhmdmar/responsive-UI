<template>
    <div class="flex flex-col my-12 select-none">
        <div
            v-if="pagesNumber >= 3"
            class="inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
        >
            <!--    prev arrow      -->
            <div
                class="arrow-btn"
                :class="[
                    prevArrowDisabled
                        ? 'arrow-btn-disabled'
                        : 'arrow-btn-enabled'
                ]"
                @click="prevArrowClicked"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    class="page-item"
                    :class="{selected: selectedPage === pageNumber}"
                    @click="updatedSelectedPage(pageNumber)"
                >
                    {{ pageNumber }}
                </div>
            </div>
            <!--    next arrow      -->
            <div
                class="arrow-btn"
                :class="[
                    nextArrowDisabled
                        ? 'arrow-btn-disabled'
                        : 'arrow-btn-enabled'
                ]"
                @click="nextArrowClicked"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            let startRange = this.selectedPage;
            let endRange = startRange + this.availablePages - 1;
            if (endRange > this.pagesNumber) {
                endRange = this.pagesNumber;
                startRange = endRange - this.availablePages + 1;
                startRange = startRange <= 0 ? 1 : startRange;
            }
            return {
                startRange,
                endRange,
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
                const pages = [];
                for (let i = startRange; i <= endRange; i++) {
                    pages.push(i);
                }
                return pages;
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

<style lang="scss" scoped>
    .arrow-btn {
        @apply h-8 w-8 ml-1 flex justify-center items-center border;
        svg {
            @apply w-4 h-4 stroke-2 stroke-current;
        }
    }
    .arrow-btn-disabled {
        @apply bg-gray-200 text-gray-400 cursor-default;
    }
    .arrow-btn-enabled {
        @apply cursor-pointer;
    }
    .page-item {
        @apply bg-white border-gray-300 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border
        text-sm font-medium cursor-pointer text-gray-300;
        &.selected {
            @apply text-gray-500;
        }
    }
</style>
