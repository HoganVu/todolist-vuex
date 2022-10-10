<template>
  <div class="hello">
    <div class="container">
      <div class="">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1>Update Todo</h1>

              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Input title..."
                  v-model="todoInfor.title"
                />
                <label for="content">Content</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Input Content..."
                  v-model="todoInfor.content"
                />
                <label for="time">Time</label>
                <input
                  type="time"
                  class="form-control"
                  v-model="todoInfor.time"
                />
              </div>
              <button class="btn btn-success" @click="updateTodoI(id)">
                Update Todo
              </button>
              <router-link to="/todolist" class="btn btn-secondary">
                Back
              </router-link>
              <hr />
            </div>
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
      setUpdateTodo: "todoList/updateTodo"
    }),
    updateTodoI() {
      this.setUpdateTodo({
        id: v1(),
        title: this.todoInfor.title,
        content: this.todoInfor.content,
        time: this.todoInfor.time,
      });
      console.log(this.setUpdateTodo)
      this.$router.push({path:`/todoList`})
    },
  },
};
</script>
  <style>
.btn {
  margin: 10px;
}
</style>