<template>
    <div>
<input type="text" v-model="localname">

<button @click="changename">change name</button>

<h1>name{{ localname }}</h1>
</div>
</template>
<script>
export default{
    props:{
      username:String
    },
    data(){
        return{
        localname:""
        }
    },
    mounted(){
        this.localname=username
    },
    methods:{
        changename(){
            this,$emit('edit-name',this.localname)
        }
    }
}
</script>

<style></style>