<template>
    <div v-if="selection.name!=undefined">
        <h2>User selected</h2>
        <h3>{{selection.name}}</h3>
        <img :src="selection.image" alt="user image">



    </div>
</template>

<script>
    export default {
        name:"user-page",
        computed: {
            selection() {
                return this.$store.state.choice
            },
           
        },
    }
</script>

<style scoped>

</style>