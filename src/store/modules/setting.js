const state = {
    message : "Vue.js switch toggle",
    checkbox : false
};
const getters = { 
    getCheckbox: (state) => {
        console.log(state.checkbox)
        return state.checkbox
    }
};
const mutations = {
    toggle_checkbox(state) {
        state.checkbox = !state.checkbox;
      },
      save_setting() {
        alert("Save success");
      },
 };
const actions = { 
    toggleCheckBox({commit},checkbox){
        commit('toggle_checkbox',checkbox)
    },
    saveSetting(commit){
        commit('save_setting')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}