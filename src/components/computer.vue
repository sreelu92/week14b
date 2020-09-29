<template>
    <div v-if="selection.name!=undefined">
        <h3>Computer selection</h3>
        <h2>{{selection.name}}</h2>
        <img :src="selection.image" alt="computer image">


    </div>
</template>

<script>
    export default {
        name:"computer-page",
        computed: {
            selection() {
                return this.$store.state.option;
            },
           
        },
    }
</script>

<style scoped>

</style>