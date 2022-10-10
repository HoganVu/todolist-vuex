<template>
  <div class="hello">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h1>List Todo Vuex</h1>
          <router-link to="/add" class="btn btn-success"> Add </router-link>
          <router-link to="/main" class="btn btn-secondary"> Back </router-link>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Date</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in getListTodo" :key="todo.key">
                <td>{{ todo.title }}</td>
                <td>{{ todo.content }}</td>
                <td>{{ todo.time }}</td>
                <td>
                  <router-link to="/update" class="btn btn-primary">
                    Edit
                  </router-link>
                  <button class="btn btn-danger" @click="setdeleteTodo(todo.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  computed: mapState({
    getListTodo: (state) => state.todoList.todos
  }),
  methods: {
    ...mapActions({
      setdeleteTodo:"todoList/deleteTodo",
    }),

  },
};
</script>


<style scoped>
.btn {
  margin: 10px;
  color: #fff !important;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
