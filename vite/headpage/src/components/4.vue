<template>
    <div class="wai">
        <el-table :data="albums.slice((currentPage - 1) * pageSize, currentPage * pageSize)" border stripe
            style="width: 100%" :row-class-name="tableRowClassName" height="450" :table-layout="fixed">
            <el-table-column prop="name" label="音乐名称" width="250" />
            <el-table-column prop="author" label="作者" width="250" />
            <el-table-column prop="fas1" label="作者" width="250" />
            <el-table-column prop="date" label="发行时间" width="250" />
            <el-table-column fixed="right" label="操作">
                <template #default>
                    <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                    <el-button link type="primary" size="small">Edit</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination background :current-page="currentPage" :page-size="pageSize"
                layout="total,prev,pager,next,jumper" :total="albums.length" @current-change="handlePageChange"
                @prev-click="handlePageChange" @next-click="handlePageChange">
            </el-pagination>
        </div>

    </div>
</template>


<script setup>
import { computed, ref } from 'vue'
let albums = ref([
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',
    },
    {
        name: 'wild',
        author: 'toctoc',
        date: '2021-04-09',
        fas1: '2分20秒',

    }
])


let pageSize = ref(10)
let currentPage = ref(1)
let handlePageChange = (val) => {
    currentPage.value = val;
}


const tableRowClassName = ({
    row,
    rowIndex,
}) => {
    if (rowIndex === 1) {
        return 'warning-row'
    } else if (rowIndex === 3) {
        return 'success-row'
    }
    return ''
}

</script>
<style scoped lang="less">
.wai {
    position: absolute;
    height: 100%;
    width: calc(100% - 200px);
    top: 40px;
    left: 200px;
}

.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.page{
    margin-top: 20px;
    margin-left: 34%;
}
</style>