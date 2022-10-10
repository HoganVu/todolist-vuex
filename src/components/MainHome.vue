<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1>Todo and Setting</h1>
        <router-link to="/todolist">
      <button class="btn btn-warning">Todo</button>
    </router-link>
    <router-link to="/setting">
      <button class="btn btn-info">Setting</button>
    </router-link>
    <router-link to="/count">
      <button class="btn btn-outline-success">CounterNumb</button>
    </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MainHome'
}
</script>

<style scoped>
  .btn{
    margin: 10px;
  }
</style>