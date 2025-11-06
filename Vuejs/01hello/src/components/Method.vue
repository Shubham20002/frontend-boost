
<template>
  <div>
    <h1>{{findgoal()}}</h1>
  </div>
</template>

<script>
export default {

 data(){
    return{
        goal1:"learn vue",
        goal2:"master vue"
    }
 },
 methods:{
    findgoal(){
        const randomnumber=Math.random();
        if(randomnumber>0.5){
            return this.goal1
        }
        else{
            return this.goal2
        }
    }
 }

}
</script>

<style>

</style>