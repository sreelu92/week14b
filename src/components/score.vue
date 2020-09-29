<template>
    <div>
        <h4>{{"Your Score:"+win}}</h4>
        <h4>{{"Computer Score:"+loses}}</h4>
        <h4>{{"Ties"+ties}}</h4>



    </div>
</template>

<script>
    export default {
        name: "score-page",
        computed: {
            win() {
                return this.$store.state.wins;
            },
            loses(){
                return this.$store.state.loses;
            
            },
            ties(){
                return this.$store.state.ties;
            }
        },
    }
</script>

<style scoped>

</style>