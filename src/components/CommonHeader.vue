<template>
    <header>
        <div class="l-content">
            <el-button plan icon="el-icon-menu" size="mini"></el-button>
            <h3 style="color: #fff">首页</h3>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <span>
                    <img class="user" :src="userImag">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">个人中心</el-dropdown-item>
                    <el-dropdown-item command="b">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
export default {
    name: 'CommonHeader',
    data() {
        return {
            userImag: require('../assets/images/user.png')
        }
    }
}
</script>
<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content {
    display: flex;
    align-items: center;
    .el-button {
        margin-right: 20px
    }
}
.r-content {
    .user {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
}
</style>