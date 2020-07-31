import { RELEASER } from "../mutation-types";
import releaser from "../../api/releaser";

const state = {
    ver: "1.0.0",
    status: "",
    step: "0"
};

const getters = {};

const actions = {
    getStatus({ commit }) {
        releaser.getStatus(res=> {
            let status = res.status;
            let step = res.step;
            commit(RELEASER.GET_STATUS,{status,step})
        })
    },
    getVersion({ commit }) {
        releaser.getVersion(res => {
            commit(RELEASER.GET_VERSION,res)
        })
    }
};

const mutations = {
    [RELEASER.GET_STATUS](state,{status,step}) {
        state.status = status;
        state.step = step;
    },
    [RELEASER.GET_VERSION](state,res) {
        state.ver = res;
    }
}

