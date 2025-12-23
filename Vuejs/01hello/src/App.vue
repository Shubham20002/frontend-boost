<template>
  <div>
  <h1>hello</h1>
  <ChildComponent :name="username" @edit-name="editname"/>
  </div>
</template>

<script>
  import ChildComponent from './components/ChildComponent.vue';
  export default {
    components:{ChildComponent},
    data(){
      return{
        username:"shubham"
      }
    },
    methods:{
      editname(name){
        this.username=name

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>