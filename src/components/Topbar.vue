<template>
    <div class="p-2 mb-2 bg-gray-100">
        <!-- Control buttons -->
        <div class="flex flex-row select-none item-center justify-center">
            <div class="control-button bg-red-500">
                <span class="">x</span>
            </div>
            <div class="control-button bg-yellow-500">
                <span class="">-</span>
            </div>
            <div class="control-button bg-green-500">
                <span class="">+</span>
            </div>
            <div class="flex-auto m-1">
                <input class="w-full" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Topbar"
    };
</script>

<style lang="scss" scoped>
    .control-button {
        @apply inline-flex py-2 px-2 m-2 rounded-full text-center flex items-center justify-center font-mono;
        & > span {
            @apply absolute text-opacity-0 text-transparent hover:opacity-100 hover:text-white;
        }
    }
</style>
