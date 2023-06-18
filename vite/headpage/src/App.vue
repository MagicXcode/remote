<template>
    <div style="pointer-events: auto;z-index:0">
        <div id="tou">
            <div @click="chu">
                <p>巴哈姆特</p>
            </div>
            <div>
                <p>让微妙的音乐，触动你的神经</p>
            </div>
        </div>
        <div id="nav">
            <el-row>
                <el-col :span="12">
                    <el-menu  class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <HomeFilled />
                                </el-icon>
                                <span>首页</span>
                            </template>
                            <el-menu-item-group title="我们的历程">
                                <el-menu-item index="1-1" @click="clickfunc(1)">
                                    <span>音乐卡片</span>
                                </el-menu-item>
                            </el-menu-item-group>

                            <el-menu-item-group title="音乐专区">
                                <el-menu-item index="1-2">点播台</el-menu-item>
                                <el-menu-item index="1-3">我的评价</el-menu-item>
                            </el-menu-item-group>

                            <el-menu-item-group title="视频专区">
                                <el-menu-item index="1-4" @click="clickfunc(2)">B站视频</el-menu-item>
                            </el-menu-item-group>

                            <el-menu-item-group title="直播专区">
                                <el-menu-item index="1-5" @click="clickfunc(5)">才艺直播</el-menu-item>
                            </el-menu-item-group>

                            <el-menu-item index="1-6">
                                <template #title>助眠直播</template>

                            </el-menu-item>

                        </el-sub-menu>

                        <el-sub-menu index="2">

                            <template #title>
                                <el-icon>
                                    <setting />
                                </el-icon>
                                <span>账号管理</span>

                            </template>

                            <el-menu-item index="2-1">
                                <el-icon>
                                    <Edit />
                                </el-icon>
                                基本信息修改
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <el-icon>
                                    <DataBoard />
                                </el-icon>
                                积分查询
                            </el-menu-item>

                        </el-sub-menu>

                        <el-menu-item index="3">
                            <el-icon>
                                <Star />
                            </el-icon>
                            我的关注
                        </el-menu-item>
                        <el-sub-menu index="4">
                            <template #title>
                                <el-icon>
                                    <HelpFilled />
                                </el-icon>
                                付费管理
                            </template>
                            <el-menu-item index="4-1">
                                <el-icon>
                                    <Shop />
                                </el-icon>
                                <span>购买订阅</span>
                            </el-menu-item>
                            <el-menu-item index="4-2">
                                <el-icon>
                                    <UserFilled />
                                </el-icon>
                                <span>我的订阅</span>
                            </el-menu-item>
                            <el-menu-item index="4-3">
                                <el-icon>
                                    <Promotion />
                                </el-icon>
                                <span>赠送会员</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-sub-menu index="5">
                            <template #title>
                                <el-icon>
                                    <Tools />
                                </el-icon>
                                音乐专辑管理
                            </template>
                            <el-menu-item index="5-1">
                                <el-icon>
                                    <Shop />
                                </el-icon>
                                <span>发布专辑</span>
                            </el-menu-item>
                            <el-menu-item index="5-2" @click="clickfunc(4)">
                                <el-icon>
                                    <UserFilled />
                                </el-icon>
                                <span>删除专辑</span>
                            </el-menu-item>
                        </el-sub-menu>

                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div v-if="false">
            <Calendar :disp="disp"/>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup>
import  Calendar  from  './components/3.vue'
import {
    Menu ,
    DataBoard,
    Setting,
    Edit,
    Star,
    HelpFilled,
    UserFilled,
    HomeFilled,
    Promotion,
    Shop,
    Tools,
} from '@element-plus/icons-vue'
import { onMounted, ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
let disp=ref(true)

let clickfunc = (id) => {
    disp=false
    router.push('/vue' + id)
}
let chu=()=>{
    disp=true
    router.push('/vue3')
}
</script>




<style scoped lang="less">
div#tou {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 40px;
    div:nth-child(1) {
        display: inline-block;
        height: 40px;
        width: 198.5px;
        border-style: none solid none none;
        border-right-width: 2px;
        border-right-color: red;
        background-color: coral;
        border-radius: 5px 0px 0px 0px;
        p {

            letter-spacing: 26px;
            margin: 5px;
            font-size: 20px;
            position: relative;
            left: 10px;
        }

    }

    div:nth-child(2) {
        position: absolute;
        top: 0px;
        border: 1px;
        border-radius: 0px 10px 0px 0px;
        height: 30px;
        width: calc(100% - 198.5px);
        background:url('./assets/1.png');
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        background-color: lightpink;
        padding: 5px 0px 5px 0;
        p {
            position: relative;
            text-align: center;
        }
    }

}

div#nav {
    display: inline-block;
    width: 200px;
    height: 1000px;

    .el-menu-vertical-demo {
        position: fixed;
        top: 40px;

        width: 200px;
        height: 1000px;
    }

}

.wai {
    display: inline-block;
    position: absolute;
    height: auto;
    width: calc(100% - 200px);
    top: 40px;
    left: 200px;
}
</style>