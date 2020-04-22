import axios from "axios"

export default {
    state: {
        taskModalShown: false,
        tasks: []
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        },
        taskModalShown(state) {
            return state.taskModalShown;
        }
    },
    actions: {
        fetchTasks(context, params) {
            return axios.post(context.getters.getAPIurl+"/task/list", params).then((res)=>{
                let sourceTasks = Object.values(res.data.data),
                    tasks = [];

                for(let soc of sourceTasks) {
                    for(let t of Object.values(soc)) {
                        for(let l of Object.values(t)) {
                            tasks.push(l);
                        }
                    }
                }

                context.commit("setTasks", tasks);
            });
        },
        cancelTask(context, taskID) {
            return axios.post(context.getters.getAPIurl+"/task/cancel", { order_id: taskID });
        }
    },
    mutations: {
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        openTaskModal(state) {
            state.taskModalShown = true;
        },
        closeTaskModal(state) {
            state.taskModalShown = false;
        }
    }
}