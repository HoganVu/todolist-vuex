<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">{{ getMessage }}</h3>
      </div>
      <div class="panel-body">
        <!--Only code you need is this label-->
        <label class="switch">
          <input type="checkbox" @click="toggleCheckbox" />
          <div class="slider round"></div>
        </label>
        <p>{{ textCheckBox }}</p>
      </div>
    </div>
    <router-link to="/">
      <button class="btn btn-primary" @click="saveSetting">Save</button>
    </router-link>
    <br />
    <input type="text" v-model="textCheckBox" />
  </div>
</template>

<script>
import { mapGetters, mapState,mapActions } from "vuex";
export default {
  data() {
    return {
      checkbox: false,
    };
  },
  name: "SettingList",
  computed: {
    ...mapState({
      getMessage: (state) => state.setting.message,
    }),
    ...mapGetters({
      textCheckBox : "setting/getCheckbox"
    })
  },
  methods: {
    ...mapActions({
      toggleCheckbox: "setting/toggleCheckBox",
      saveSetting: "setting/saveSetting"
    })
  },
};
</script>

<style>
textarea {
  margin-top: 10px;
  padding: 30px;
}
.btn {
  margin: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
body {
  text-align: center;
  background: linear-gradient(#e66465, #9198e5) no-repeat;
  padding: 50px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #101010;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>