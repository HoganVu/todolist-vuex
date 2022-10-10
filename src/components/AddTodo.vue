<template>
  <div class="container">
    <div class="">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <h1>Create New Todo</h1>
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                class="form-control"
                placeholder="Input title..."
                v-model="todoInfor.title"
              />
              <label for="title">Content</label>
              <input
                type="text"
                class="form-control"
                placeholder="Input Content..."
                v-model="todoInfor.content"
              />
              <label for="title">Time</label>
              <input
                type="time"
                class="form-control"
                v-model="todoInfor.time"
                @keydown.enter = "addTodoI"
              />
            </div>
            <button @click="addTodoI" class="btn btn-success">Add New</button>
            <router-link to="/todolist" class="btn btn-secondary">
              Back
            </router-link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  data() {
    return {
      todoInfor: {},
    };
  },
  methods: {
    ...mapActions({
      setAddTodo : "todoList/addTodo"
    }),
    addTodoI() {
      this.setAddTodo({
        id: v1(),
        title: this.todoInfor.title,
        content: this.todoInfor.content,
        time: this.todoInfor.time,
      });
      this.$router.go(-1);
    },
  },
};
</script>

<style>
  .btn{
    margin: 10px;
  }
</style>