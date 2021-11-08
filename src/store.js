import Vue from "vue";
import Vuex from "vuex";
import axios from "./plugins/axios";
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        Policies: [],
        Persons: [],
    },
    mutations: {
        setPolicies: (state, payload) => (state.Policies = payload),
        setPersons: (state, payload) => (state.Persons = payload),
    },
    actions: {
        getPolicies(context) {
            axios("policy")
                .then((res) => context.commit("setPolicies", res.data))
                .catch(console.log);
        },
        getPersons(context) {
            axios("person")
                .then((res) => context.commit("setPersons", res.data))
                .catch(console.log);
        },
    },
});

export default store;
