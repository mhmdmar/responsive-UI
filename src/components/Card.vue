<template>
    <div class="border h-full w-full">
        <div class="w-full">
            <img
                class="object-fit h-48 w-full"
                :src="imageUrl"
                :alt="imageTitle"
            />
        </div>
        <div class="px-3 pb-2">
            <div class="pt-1">
                <div class="mb-2 text-sm line-clamp-2">
                    <span class="font-medium mr-2" :title="title">{{
                        title
                    }}</span>
                </div>
            </div>
            <div class="pt-2">
                <div class="mb-2 text-sm line-clamp-3">
                    <span class="font-medium mr-2" :title="content">{{
                        content
                    }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: {
            title: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            },
            imageTitle: {
                type: String,
                default: ""
            },
            imageUrl: {
                type: String,
                default: ""
            }
        },
        mounted() {}
    };
</script>

<style scoped></style>
