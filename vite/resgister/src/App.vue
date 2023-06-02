<template>
  <div id="div1">
    <p>欢迎注册</p>
    <form>
      <div>
        <label for="username">勇士称号</label>
        <input class="input" type="text" placeholder="Username" v-model="form.name" required="true" />
      </div>
      <div>
        <label for="password">勇士密钥</label>
        <input class="input" type="text" placeholder="password" v-model="form.password" required="true" />
      </div>
      <div>
        <label for="repassword">确认密钥</label>
        <input class="input" type="text" placeholder="再次输入密码" v-model="form.repassword" required="true" @blur="check" />
      </div>
      <div>
        <label for="repassword">出生年月</label>
        <input class="input" type="text" placeholder="xx年-xx月-xx日" v-model="form.date1" required="true" />
      </div>
      <div>
        <button type="submit">提交</button>
        <button type="reset">重置</button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
let form = reactive({
  name: '',
  password: '',
  repassword: '',
  date1: ''
})
let check = () => {
  if (form.password.trim().length !== 0) {
    if (form.password !== form.repassword) {
      alert('两次输入的密码不一致')
    }
  }
}

let submit = () => {
  console.log(form);
  axios.post('/api/regsiter', form)
    .then(response => {
      console.log(response);
      if (response.data.message === '注册成功') {
        alert('注册成功!2秒后跳转到首页页面');
        setTimeout(() => {
          window.location.href = '/login'; // 替换为实际的登录页面路径
        }, 2000);
      } else {
        alert('用户信息错误');
      }
    })
}

</script>
<style scoped lang="less">
#div1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 400px;
  box-shadow: #ccc 0px 0px 10px 0px;
  border-radius: 5px;
  background-color: aliceblue;

  p {
    font-size: 30px;
    font-weight: bold;
    animation-name: head-rotate, head-color;
    animation-duration: 2s, 2s;
    animation-iteration-count: 1, infinite;
    transition-timing-function: linear;
    position: relative;
    bottom: 30px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    label {
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
      margin-right: 10px;
      background: rgb(198, 248, 198);
    }

    input {
      width: 200px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid #ccc;
      outline: none;
    }

    button {
      width: 50px;
      height: 30px;
      margin-top: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
      margin-right: 10px;
      background: rgb(181, 247, 181);

    }

    button:first-child {
      margin-right: 40px;
    }
  }
}

@keyframes head-rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes head-color {

  0% {
    color: pink;
  }

  50% {
    color: lightblue;
  }

  100% {
    color: lightgreen;
  }
}
</style>