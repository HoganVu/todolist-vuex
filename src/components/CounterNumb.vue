<template>
    <div>
      <h1>Counter</h1>
      <p>Number: {{getCount}}</p>
      <div>
          <button class="btn btn-primary" @click="summation">+</button>
          <button class="btn btn-danger" @click="subtraction">-</button>
      </div>
      <div class="counter-squared">
        Exponential: {{getCount}}
          <sup>2</sup> =
          {{countSquared}}
      </div>
    </div>
  </template>
  
  <script>
  import {  mapActions, mapGetters } from 'vuex';
  export default {
      computed:{
        ...mapGetters({
          getCount: "countNumber/getCount",
          countSquared: "countNumber/counterSquared"
        }
      ),
      },
      methods: {
        ...mapActions({
          summation: "countNumber/increment",
          subtraction: "countNumber/descrement"
        })
          
      }
  };
  </script>
  
  <style>
  .btn {
    margin: 10px;
  }
  </style>