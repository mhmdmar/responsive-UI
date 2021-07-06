<template>
    <div
        class="grid grid-cols-1 md:grid-cols-3 m-6 md:m-12 gap-y-4 md:gap-x-16"
    >
        <div v-for="(card, index) in cards" :key="index">
            <Card
                :title="card.title"
                :content="card.content"
                :imageUrl="card.imageUrl"
            ></Card>
        </div>
    </div>
</template>

<script>
    import Card from "@/components/Card.vue";

    export default {
        name: "RecordsContainer",
        components: {
            Card
        },
        props: {
            records: {
                type: Array,
                default: () => {}
            }
        },
        computed: {
            cards() {
                return this.records.map(record => {
                    const imageText = record.fields["Header image"];
                    return {
                        title: record.fields.Headline,
                        content: record.fields["Sub-headline"],
                        imageUrl: this.extractImageUrl(imageText)
                    };
                });
            }
        },
        methods: {
            extractImageUrl(imageText = "") {
                if (imageText) {
                    // regex extracts string between round brackets
                    const regex = /\(([^)]+)\)/;
                    return imageText.match(regex)[1];
                } else {
                    return "";
                }
            }
        }
    };
</script>

<style scoped></style>
