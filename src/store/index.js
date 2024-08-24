import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            data: []
        }
    },
    mutations: {
       storeExams(state, exams) {
           state.data = exams;
           console.log(state.data);
       }
    },
});

export default store;