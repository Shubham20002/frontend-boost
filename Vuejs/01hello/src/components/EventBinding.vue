<template>
    <div>
        <h1>count:{{ count }}</h1>
        <button v-on:click="inccount">Inc count</button>
        <button v-on:click="deccount">Dec count</button>
    </div>
</template>

<script> 
 export default{
    name:"EventBinding",
    data(){
        return{
            count:0
        }
    },
    methods:{
        inccount(){
            this.count++
        },
        deccount(){
            this.count--
        }
    }
 }
</script>

<style scoped>

</style>