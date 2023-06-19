<template>
    <div class="wai">
        <el-row>
            <el-col v-for="(item, index) in card" :key="index" :span="9" :offset="2">
                <el-card :body-style="{ padding: '20px' }" style="margin:10px">
                    <img :src="item.path" class="image" />
                    <div style="padding: 14px">
                        <span>{{ item.name }}</span>
                        <div class="bottom">
                            <time class="time">{{ item.date }}</time>
                            <span>喜爱程度</span>
                            <el-rate v-model="value2" colors="red"></el-rate>
                            <el-button text class="button">移除</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import img1 from '../assets/9.jpg';
import img2 from '../assets/10.jpg';
import img3 from '../assets/11.jpg';
import img4 from '../assets/12.jpg';
const card = ref([
    {
        name: 'wild',
        path: img1,
        desc: '今天你吃早饭没',
        date: '2021-04-09',
    },
    {
        name: 'wild',
        path: img2,
        desc: '今天你吃早饭没',
        date: '2021-04-09',
    },
    {
        name: 'wild',
        path: img3,
        desc: '今天你吃早饭没',
        date: '2021-04-09',
    },
    {
        name: 'wild',
        path: img4,
        desc: '今天你吃早饭没',
        date: '2021-04-09',
    }
]);

const currentDate = ref(new Date());
const value2 = ref(0); // 添加一个变量value2，用于el-rate的双向绑定
</script>
  
<style scoped lang="less">
.wai {
    display: inline-block;
    position: absolute;
    height: auto;
    width: calc(100% - 200px);
    top: 40px;
    left: 200px;
}

.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
    border: 2px solid #e6ebee;
    background-color: rgb(248, 243, 238);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
}

.image {
    width: 100%;
    display: block;
}
.el-card{
    transition: transform 0.3s ease;
}
.el-card:hover{
    transform: perspective(2000px) rotateX(20deg);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
  