<template>
    <div class="wai" v-if="porps.disp">
        <el-calendar>
            <template #date-cell="{ data }">
                <p :class="data.isSelected ? 'is-selected' : ''">
                    {{ data.day.split('-').slice(1).join('-') }}
                    {{ data.isSelected ? '✔️' : '' }}
                </p>
            </template>
        </el-calendar>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue'
const porps=defineProps({
    disp:{
        type:Boolean,
        default:true
    }
})

</script>
<style scoped lang="less">
.is-selected {
  color: #1989fa;
}
.wai {
    display: inline-block;
    position: absolute;
    height: 100%;
    width: calc(100% - 200px);
    top: 40px;
    left: 200px;
}
</style>