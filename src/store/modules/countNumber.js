const state = {
    count: 0
}

const getters = {
    getCount: state => {
        return  state.count
    },
    counterSquared(state){
        return state.count * state.count
    }
}

const mutations = {
    increment(state){
        return state.count ++
    },
    descrement(state){
        return state.count --
    }
}

const actions = {
    increment({commit}, count){
        commit('increment',count)
    },
    descrement({commit}, count){
        commit('descrement',count)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}