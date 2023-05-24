<template>
  <div class="nav">
    <div class="navchild"></div>
    <div class="navchild"></div>
    <div class="navchild"></div>
  </div>
  <div class="div1">
    <div class="img-box">
      <img src="./assets/1.jpg" alt="Vue logo">
    </div>
    <div class="form">
      <p>Hi, warriors</p>
      <p>Welcome Back</p>
      <form id="form">
        <div class="formarea">

          <div>
            <label for="username" style="background: lightgreen;">勇士称号</label>
            <input class="input" type="text" placeholder="Username" v-model="form.name" required="true" />
          </div>
          <div>
            <label for="password">勇士密钥</label>
            <input class="input" :type="show ? 'password' : 'text'" placeholder="Password" v-model="form.password"
              ref="input" @focus="show = false" @blur="show = true" required="true" />
          </div>

        </div>
        <div class="button">
          <button type="submit" @click.prevent="submitForm">登录</button>
          <button type="reset">重置</button>
        </div>
      </form>
    </div>

  </div>
</template>
<script setup >
import { reactive, ref } from 'vue'
import axios from 'axios';
// do not use same name with ref
const form = reactive({
  name: '',
  password: ''
})
let show = ref(false)
let input = ref(null)
function submitForm() {
  if (form.name.length>0 && form.password.length>0) {
    console.log('表单提交');
    axios.post('/api/login', form)
      .then(response => {
        console.log(response);
        if (response.data.message === '注册成功') {
          alert('登录成功');
          // window.location.href = '/home';
        } else {
          alert('用户信息错误');
        }
      })
  } else {
    alert('请填写相关信息');
  }
}

const data = ref(null)
const error = ref(null)
const loading = ref(false)
const fetchData = async () => {
  try {
    loading.value = true
    const response = await axios.get('/api/login')
    data.value = response.data
    console.log(data.value);
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}
</script>
<style scoped lang="less">
.nav {}

.div1 {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.img-box {
  width: 400px;
  height: 600px;

  img {
    width: 100%;
    height: 100%;
  }

  box-shadow: 0px 0px 40px #b6354e;
  z-index:1;
}

.form {
  position: relative;
  height: 540px;
  width: 640px;
  background-color: #fff;
  box-shadow: 0px 0px 40px #b6354e;
  border-radius: 15px;
  padding: 30px;
  left: -10px;
  opacity: 0.8;

  p {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }

  .formarea {
    position: relative;
    height: 100px;
    width: 300px;
    left: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 20px;
      padding: 10px;

      label {
        background-color: lightgreen;
        margin-right: 10px;
      }

      .input {
        border: 2px solid #ccc;
        border-radius: 5px;
        animation: blinker 1s linear infinite;
      }

      @keyframes blinker {
        50% {
          border-color: #ffcc00;
        }
      }
    }
  }

  .button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;

    button:first-child {
      margin-right: 20px;
    }

    button {
      background: #ffcc00;
      width: 50px;
      height: 30px;
      border-radius: 6px;
    }
  }
}
</style>