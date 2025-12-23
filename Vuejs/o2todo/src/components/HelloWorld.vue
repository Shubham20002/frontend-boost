<template>
  <div>
  <div>
    <div>
      <input v-model="task" />
      <button v-on:click="addtask">Add Task</button>
    </div>

  </div>
    <table>
      <tr v-for='item in todo' :key="item">
            <td>{{ item.task }}</td>
            <td :style="{color: item.iscompleted ? 'green' :'red'}">{{ item.iscompleted ? "done" :"not done" }}</td>
            <td><button @click="toggletask(item.task)">Toggle</button></td>
            <td><button @click="deleteitem(item.task)">delete</button></td>
      </tr>
    </table>
  </div>

</template>

<script>
  export default {
    data(){
      return {
        task:"",
        todo:[
          {task:"learn vue",iscompleted:false}
        ]
      }
    },
    methods:{
          addtask(){
            this.todo.push({
              task:this.task,
              iscompleted:false
            })
          },
          deleteitem(item){
           this.todo= this.todo.filter((e)=>e.task !==item);
           console.log()
          },
          toggletask(item){
            var task=this.todo.find((e)=>e.task==item)
            console.log("task",task)
             this.todo= this.todo.filter((e)=>e.task !==item);
            task.iscompleted=!task.iscompleted
            this.todo.push(task)


          }
    }

    
  }
</script>

<style lang="scss" scoped>

</style>