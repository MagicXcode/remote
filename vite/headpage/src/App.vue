<template>
    <div>
        <div id="tou">
            <div>
                <p>巴哈姆特</p>
            </div>
            <div>
                <p>让微妙的音乐，触动你的神经</p>
            </div>
        </div>
        <div id="nav">
            <el-row>
                <el-col :span="12">
                    <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <HomeFilled />
                                </el-icon>
                                <span>首页</span>
                            </template>
                            <el-menu-item-group title="我们的历程">
                                <el-menu-item index="1-1">
                                    <span>音乐卡片</span>
                                </el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="音乐专区">
                                <el-menu-item index="1-2">点播台</el-menu-item>
                                <el-menu-item index="1-3">我的评价</el-menu-item>
                            </el-menu-item-group>

                            <el-menu-item-group title="直播专区">
                                <el-menu-item index="1-4">才艺直播</el-menu-item>
                            </el-menu-item-group>

                            <el-sub-menu index="1-5">
                                <template #title>助眠直播</template>

                            </el-sub-menu>

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
                            <el-menu-item index="2-1">
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
                            <el-menu-item index="5-2">
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

        <div class="music-card">
            <div class="header">
                <h2 class="title">巴哈姆特音乐集卡</h2>
                <h3 class="subtitle">BAHAMUTE</h3>
            </div>
            <div class="timeline">
                <div class="item" data-text="《你的孤独，虽败犹荣》">
                    <div class="content">
                        <img src="./img/01.jpg" alt="" class="img">
                        <h2 class="content-title">2002</h2>
                        <p class="content-desc">
                            如果你停止，就是谷底。如果你还在继续，
                            就是上坡。这是我听过关于人生低谷最好的阐述。
                        </p>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/02.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/03.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/04.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/05.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/06.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/07.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>

                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="./img/08.jpg" alt="" class="img">
                            <h2 class="content-title">2002</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>  
        <zu />
    </div>
</template>
<script setup>
import {
    Menu as IconMenu,
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
        width: 199.5px;
        border-style: none solid none none;
        border-right-width: 2px;
        border-right-color: red;
        background-color: coral;

        p {
            margin: 5px;
            font-size: 20px;
            position: relative;
            left: 20px;
        }

    }

    div:nth-child(2) {
        position: absolute;
        top: 0px;

        height: 30px;
        width: 1520px;

        display: inline-block;
        background-color: lightpink;


        padding: 5px 0px 5px 0;

        p {
            position: relative;
            left: 580px;
        }
    }

}

div#nav {
    display: inline-block;
    width: 200px;
    height: 100vh;

    .el-menu-vertical-demo {
        position: fixed;
        top: 40px;

        width: 200px;
        height: 100vh;
    }

}

.music-card {
    display: inline-block;
    height: 100%;
    width: 100%;
    position: relative;
    top: 40px;
    left: 200px;

    background: linear-gradient(45deg, #fbda61, #fd69d1);
    transition: 0.3s ease 0s;
    background-attachment: fixed;
    background-size: cover;

}

.music-card:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(99, 99, 99, 0.8);
    content: "";
}

.header {
    width: 100%;
    text-align: center;
    margin-bottom: 80px;
    position: relative;
}

.title {
    color: #fff;
    font-size: 46px;
    font-weight: normal;
    margin: 0;
}

.timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 700px;
    position: relative;
}


</style>