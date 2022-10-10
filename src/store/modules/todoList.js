const state = {
  todos: [
    {
      id:1,
      title: 'Morning',
      content: 'Get up',
      time: '07:00 '
    },
    {
      id:2,
      title: 'Afternoon',
      content: 'Have lunch',
      time: '13:00'
    },
    {
      id:3,
      title: 'Evening',
      content: 'Go to sleep',
      time: '21:00'
    },
    {
      id:4,
      title: 'Mid Night',
      content: 'Go to sleep',
      time: '24:00'
    },
  ]
};
const  getters = {
  getListTodo(state){
    return state.todos
  }
};
const  mutations = {
  delete_todo(state,id){
    state.todos = state.todos.filter((todo) => todo.id !== id)
    console.log(state.todos)
  },
  add_todo(state,todo){
    state.todos.push(todo)
    console.log(state.todos)
  },
  update_todo(state,todo){
    let index = state.todos.findIndex((t) => t.id == todo.id);
    if (index != -1) {
      state.todos[index] = todo;
    }
    console.log(state.todos)
  }
};
const  actions = {
  deleteTodo({commit},id){
    commit("delete_todo",id)
  },
  addTodo({commit},todo){
    commit("add_todo",todo)
  },
  updateTodo({commit}, todo){
    commit("update_todo",todo)
  }
};

export default {
namespaced: true,
state,
mutations,
actions,
getters
}