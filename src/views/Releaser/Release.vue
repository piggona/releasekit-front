<template>
    <div class="w">
        <div class="changelog">
            <span class="font">选择下一个版本类型</span>
            <a-radio-group v-model="version_set" default-value="2" button-style="solid" @change="onChange">
                <a-radio-button value="0">
                    Main Version
                </a-radio-button>
                <a-radio-button value="1">
                    Sub Version
                </a-radio-button>
                <a-radio-button value="2">
                    Stage Version
                </a-radio-button>
            </a-radio-group>
            <div style="padding-top: 5%;">
                <span class="release-font">即将发布版本：{{ ver }}</span>
                <span class="release-font">下一个版本：{{newVersion}}</span>
            </div>
        </div>
        
        <a-row class="btn-row">
            <a-col :span="16">
                <a-button style="height: 30rem;font-size: 100px;padding: 5%;" class="release-btn" type="danger" @click="release" block>release</a-button>
            </a-col>
            <a-col :span="8">
                <a-button style="height: 2rem;" class="release-btn" type="primary" size="large" @click="init">Init</a-button>
                <br/>
                <div class="font">
                    <a-icon type="arrow-up" />
                    <div>重启任务</div>
                </div>
                <div class="font-publish"><a-icon type="arrow-left" />发布</div>
                <div>
                    <img src="../../assets/gkd.gif" alt="">
                    <div class="font-color">点它！</div>
                    <div class="font-color">点它！！</div>
                    <div class="font-color">快点它！！!</div>
                </div>
            </a-col>
        </a-row>
        <div>
            <a-card title="当前执行状态" :bordered="false">
                <a-row>
                    <a-col :span="12">
                        <div class="release-status">状态：{{ status }}</div>
                        <div class="release-status">步骤{{ step_sentence }}</div>
                    </a-col>
                    <a-col :span="12">
                         <a-progress 
                            type="circle"
                            :percent="percent"
                            :status="status"
                        />
                    </a-col>
                </a-row>
                
               
            </a-card>
        </div>
        
    </div>
</template>

<script>
import { mapState } from "vuex";
import reqwest from "reqwest";
export default {
    data() {
        return {
            version_set: "2"
        }
    },
    computed: {
        ...mapState({
            ver: state => state.releaser.ver,
            status: state => state.releaser.status,
            step: state => state.releaser.step
        }),
        step_sentence() {
            let sentence = ""
            switch(this.step) {
                case 0:
                    sentence = "0: 就绪";
                    break;
                case 1:
                    sentence = "1: 初始化成功,在提交待发布版本";
                    break;
                case 2:
                    sentence = "2: 提交待发布版本成功，在执行goreleaser";
                    break;
                case 3:
                    sentence = "3: 执行goreleaser成功，在提交新版本信息";
                    break;
                case 4:
                    sentence = "4: 结束，同步状态";
                    break;
                default:
                    sentence = "0: 就绪";
                    break;
            }
            return sentence;
        },
        newVersion() {
            let version = "" 
            let bits = this.ver.split('.')
            switch(this.version_set) {
                case "0":
                    bits[0] = String(Number(bits[0])+1)
                    bits[1] = String(0)
                    bits[2] = String(0)
                    version = bits.join('.')
                    break;
                case "1":
                    bits[1] = String(Number(bits[1])+1)
                    bits[2] = String(0)
                    version = bits.join('.')
                    break;
                default:
                    bits[2] = String(Number(bits[2])+1)
                    version = bits.join('.')
                    break;
            }
            return version
        },
        percent() {
            return 100 * (this.step / 5)
        }
    },
    methods: {
        onChange(e) {
            console.log('radio checked',e.target.value)
            this.version_set = e.target.value
        },
        release() {
            reqwest({
                url: "api/releaser/release/"+this.version_set,
                type: "json",
                method: "post",
                contentType: "application/json",
                success: res => {
                    console.log('call release')
                    console.log(res)
                }
            });
        },
        init() {
            reqwest({
                url: "api/releaser/init/",
                method: "get",
                contentType: "application/json",
                success: res => {
                    console.log('call init')
                    console.log(res)
                }
            });
        },
        refreshStatus() {
            this.$store.dispatch("releaser/getStatus");
        }
    },
    mounted() {
        this.$store.dispatch("releaser/getStatus");
        this.$store.dispatch("releaser/getVersion");
    },
    created() {
        window.setInterval(() => {
            setTimeout(this.refreshStatus,0)
        },3000)
    }
}
</script>

<style scope>
.release-status {
    padding-right: 5%;
    padding-top: 5%;
    font-size: 1rem;
}
.release-font {
    padding: 2%;
    font-size: 2rem;
    font-weight: bold;
}
.font-publish {
    font-size: 2.5rem;
    font-weight: bold;
}
.font {
    font-size: 1.2rem;
    padding: 1rem;
}
.font-color {
    font-size: 1.2rem;
    color: #E74C3C;
    padding: 1rem;
    font-weight: bold;
}
.btn-row {
    padding-bottom: 5%;
}
.changelog {
    padding-top: 5%;
}
.release-btn {
  margin-top: 50px;
  padding-bottom: 10px;
}
</style>