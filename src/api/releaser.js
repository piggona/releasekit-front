import request from "../util/request"

// var statusData = {
//     ret_code: "",
//     msg: "",
//     status: 0,
//     step: 0,
// };

export default {
    getStatus(cb) {
        request({
            url: "api/releaser/status",
            method: "get"
        }).then(response => {
            let res = response.data;
            cb(res);
        })
    },
    getVersion(cb) {
        request({
            url: "api/releaser/version",
            method: "get"
        }).then(response => {
            let res = response.data;
            cb(res);
        })
    }
};