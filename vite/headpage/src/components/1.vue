
<template>
  <div>
    <div :class="{ 'newcss': isTransition, 'wai': !isTransition }" @scroll="handleScroll">
            <div class="music-card">
                <div class="header">
                    <h2 class="title">巴哈姆特音乐集卡</h2>
                    <h3 class="subtitle">BAHAMUTE</h3>
                </div>
                <div class="timeline" ref="timeline">
                    <div class="item" data-text="《你的孤独，虽败犹荣》">
                        <div class="content">
                            <img src="../img/01.jpg" alt="" class="img">
                            <h2 class="content-title">2015</h2>
                            <p class="content-desc">
                                如果你停止，就是谷底。如果你还在继续，
                                就是上坡。这是我听过关于人生低谷最好的阐述。
                            </p>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/02.jpg" alt="" class="img">
                                <h2 class="content-title">2016</h2>
                                <p class="content-desc">
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/03.jpg" alt="" class="img">
                                <h2 class="content-title">2017</h2>
                                <p class="content-desc">
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/04.jpg" alt="" class="img">
                                <h2 class="content-title">2018</h2>
                                <p class="content-desc">
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/05.jpg" alt="" class="img">
                                <h2 class="content-title">2019</h2>
                                <p class="content-desc " >
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/06.jpg" alt="" class="img">
                                <h2 class="content-title">2020</h2>
                                <p class="content-desc">
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/07.jpg" alt="" class="img">
                                <h2 class="content-title">2021</h2>
                                <p class="content-desc">
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>

                        <div class="item" data-text="《你的孤独，虽败犹荣》">
                            <div class="content">
                                <img src="../img/08.jpg" alt="" class="img">
                                <h2 class="content-title">2022</h2>
                                <p class="content-desc">
                                    如果你停止，就是谷底。如果你还在继续，
                                    就是上坡。这是我听过关于人生低谷最好的阐述。
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const isTransition = ref(false);
let handleScroll=()=>{
    isTransition.value = true;
}
</script>
<style scoped lang="less">


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

.content-title {
    font-weight: normal;
    font-size: 66px;
    margin: -10px 0 0 0;
    transition: 0.4s;
    padding: 0 10px;
    box-sizing: border-box;
    color: #fff;
}

.content-desc {
    margin: 0;
    font-size: 15px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    line-height: 25px;
}

.wai {
    display: inline-block;
    position: absolute;
    height: auto;
    width: calc(100% - 200px);
    top: 40px;
    left: 200px;
    transition: all 0.5s ease;
    .music-card {
        
        background: linear-gradient(45deg, rgb(241, 227, 176,0.1), rgb(248, 172, 225,0.1));
        transition: 0.3s ease 0s;
        background-attachment: fixed;
        background-size: cover;
    }
}
.newcss
{
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index:200;
}

.wai:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
}



.timeline {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 1300px;
    position: relative;
}


.timeline:before {
    position: absolute;
    left: 50%;
    bottom: 50px;
    width: 5px;
    height: 100%;
    content: "";
    background: white;
    opacity: 0.6;

}

.item {
    padding: 40px 0;
    // opacity: 0.3;
    // filter: blur(2px);
    transition: 0.5s;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    transform: translateY(-80px);
}

.item:nth-child(even) {
    align-self: flex-end;
}


.item:nth-child(even):before {
    right: auto;
    text-align: right;
    left: calc(-100% - 56px);
    padding-left: 0;
    border-left: none;
    border-right: 2px solid rgba(255, 255, 255, 0.5);
    padding-right: 15px;
}


.img {
    max-width: 100%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    letter-spacing: 5px;
    margin: 10px 0 0 0;
    font-weight: normal;
}

</style>