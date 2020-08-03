import { RELEASER } from "../mutation-types";
import releaser from "../../api/releaser";

const state = {
    ver: "1.0.0",
    status: "normal",
    step: 0
};

const getters = {};

const actions = {
    getStatus({ commit }) {
        releaser.getStatus(res => {
            let status_num = res.data.status;
            let status = "normal"
            if (status_num === 1) {
                status = "exception"
            }
            let step = res.data.step;
            commit(RELEASER.GET_STATUS,{status,step})
        })
    },
    getVersion({ commit }) {
        releaser.getVersion(res => {
            let version = res.data.version
            commit(RELEASER.GET_VERSION,version)
        })
    }
};

const mutations = {
    [RELEASER.GET_STATUS](state,{status,step}) {
        state.status = status;
        state.step = step;
    },
    [RELEASER.GET_VERSION](state,version) {
        state.ver = version;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};