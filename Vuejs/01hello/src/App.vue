<template>
  <div>
  <h1>{{ name }}</h1>
  <a v-bind:href='link'>chatgpt</a>
  <Method/>
  <EventBinding/>
  </div>
</template>

<script>
import Method from './components/Method.vue';
import EventBinding from './components/EventBinding.vue';
export default {
  components: { Method,EventBinding },
  name:"App",
  data(){
    return{
      name:"shubham",
      link:'https://chatgpt.com/'
    }
  }
}
</script>

<style>

</style>