<template>
  <div class="wai">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item>
        <img src="../assets/8.jpg" justify="center" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/3.jpg" justify="center" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/4.jpg" justify="center" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/5.jpg" justify="center" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/6.jpg" justify="center" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/7.jpg" justify="center" />
      </el-carousel-item>
    </el-carousel>
    <div class="div2">
      <div class="event">
        <el-timeline>
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
            :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>

      <div class="list">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
          <li v-for="i in count" :key="i" class="infinite-list-item">
            <el-popconfirm title="进入此直播间?">
              <template #reference>
                <el-button><el-icon>
                    <User />
                  </el-icon>直播间{{ i }}</el-button>
              </template>
            </el-popconfirm>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { MoreFilled, User } from '@element-plus/icons-vue'
import { ref } from 'vue'
const activities = [
  {
    content: '一口就甜',
    timestamp: '2023-06-30 20:16',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'crush 的大长腿',
    timestamp: '2023-06-30 20:20',
    color: '#0bbd87',
  },
  {
    content: '徐且慢',
    timestamp: '2023-06-30 20:30',
    size: 'large',
    color: 'lightblue',
  },
  {
    content: '鬼灭之忍专场',
    timestamp: '2023-06-30 20:31',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'xiaoxiao 的直播间',
    timestamp: '2023-06-30 20:32',
    type: 'primary',
    hollow: true,
    color: 'pink'
  },
  {
    content: '小yu 总是很 lucky',
    timestamp: '2023-06-30 20:36',
    type: 'primary',
    hollow: true,
    color: 'lightgreen'
  },
  {
    content: '今天你吃饭了没',
    timestamp: '2023-06-30 20:40',
    type: 'primary',
    hollow: true,
  },
  {
    content: '今天好难过',
    timestamp: '2023-06-30 20:41',
    type: 'primary',
    hollow: true,
  },
  {
    content: '一直醒着的猫',
    timestamp: '2023-06-30 20:42',
    type: 'primary',
    hollow: true,
  },
  {
    content: '一个富贵',
    timestamp: '2023-06-30 20:43',
    type: 'primary',
    hollow: true,
  },
  {
    content: '腋毛且666',
    timestamp: '2023-06-30 21:46',
  },
]
const count = ref(0)
const load = () => {
  count.value += 2
}
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

.el-carousel__item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: top;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99b6bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


.video {
  width: 100px;
  height: 100px;
  position: relative;
  left: 400px;
  top: -20px;
}

.div2 {
  display: flex;
  flex-direction: row;
  justify-self: center;
  justify-content: center;

  .list {
    display: inline-block;
    width: 3000px;
    height: auto;

    .infinite-list {
      height: 670px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    .infinite-list .infinite-list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: var(--el-color-primary-light-9);
      margin: 10px;
      color: var(--el-color-primary);
    }

    .infinite-list .infinite-list-item:nth-child(2n) {
      background: lavenderblush;
    }

    .infinite-list .infinite-list-item+.list-item {
      margin-top: 10px;
    }
  }

  .event {
    position: relative;
    top: 20px;
    left: 40px;
    width: 100%;
    height: auto;
    display: inline-block
  }
}</style>