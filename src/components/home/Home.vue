<template>
    <el-container class='home'>
        <!-- 头部 -->
        <el-header class='home-Header' height="90px">
            <el-row type="flex" justify="space-between">
                <el-col :span="4">
                <div class="grid-content bg-purple logo">
                    <img src="../../assets/images/logo.png" alt="">
                </div>
                </el-col>
                <el-col :span="11">
                    <img src="@/assets/images/header-menu.png" alt="" class="header-menu">
                    <h3>云智贩后台管理系统</h3>
                </el-col>
                <el-col :span="8" class="logout-desc">
                    <el-row>
                        <el-col :span="10">
                            <img src="@/assets/images/header-date2.png" alt="" class="header-date">
                            <span class="date">2018-12-18</span>
                        </el-col>
                        <el-col :span="6">
                            <img src="@/assets/images/header-news.png" alt="" class="header-date">
                        </el-col>
                        <el-col :span="8">
                            <img src="@/assets/images/header-user.png" alt="" class="header-date">
                            <span>Admin</span>
                            <img src="@/assets/images/header-send.png" alt="" class="header-date">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            
        </el-header>
        <el-container>
            <el-aside width="296px" class='home-Aside'>
                <el-menu
                :router='true'
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#303a42"
                text-color="#fff"
                active-text-color="#f1ffc3">
                <el-submenu index="1">
                    <template slot="title">
                        <img src="../../assets/images/index.png" alt="">
                        <span slot="title">首页</span>
                    </template>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <img src="../../assets/images/basic2x.png" alt="">
                        <span>基础管理</span>
                    </template>
                    <el-menu-item index="model">
                        <i></i>
                        <span slot="title">机型管理</span>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <i></i>
                        <span slot="title">商品管理</span>
                    </el-menu-item>
                    <el-menu-item index="2-3">
                        <i></i>
                        <span slot="title">部门管理</span>
                    </el-menu-item>
                    <el-menu-item index="2-4">
                        <i></i>
                        <span slot="title">员工管理</span>
                    </el-menu-item>
                </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class='home-Main'>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>     
</template>
<script>


</script>

<style>
.home {
    height:100%;
}
.home-Header .header-menu {
    width: 40px;
    height: 40px;
    margin: 28px 20px 0;
    float: left;
}
.home-Header h3 {
  height: 90px;
  line-height: 90px;
  font-size: 36px;
  color: #fff;
  float: left;
}
.home-Header .header-date {
  width: 40px;
  height: 40px;
  margin-left: 0;
  margin-top: 0;
  vertical-align:middle;
}
.home-Header span {
    color: #fff;
    font-size: 24px;
}
.home-Header .logout-desc {
  line-height: 90px;
}

.el-menu-vertical-demo {
    height: 100%;
}
.home-Header .logo {
    background:#2090cb;
    width: 296px;
    height: 90px;
   
}
.home-Header div img {
    width: 200px;
    height: 60px;
    margin-left: 50px;
    margin-top: 15px;
}
.home-Header {
    background-image:linear-gradient(to right, #24a5e4,#24a5e4,#57f4f6);   
}
.el-header {
    padding: 0;
}
.home-Header .header-left {
    background: #000;
}
.home-Header .header-right {
    background: #000;
}
.home-Main {
    background:#eef6fc;
}
.el-menu-item {
    font-size: 18px;
    
}
.el-menu-item i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    display: inline-block;
    margin-left: 70px;
}
.el-submenu__title {
    border-bottom:2px solid #414b5a;
    font-size: 24px;
    height: 96px;
}
.el-submenu img {
    width: 80px;
    height: 80px;
    vertical-align: middle;
}
.el-menu-vertical-demo,
.el-menu {
    overflow-y: hidden;
    /* background-clip: border-box; */
    /* border:2px solid #414b5a; */
}
.el-submenu__icon-arrow {

}
/* [class*=" el-icon-"]::before {
    font-family: el-icon-arrow-right!important;
} */
/* el-icon-arrow-right */
/* el-icon-arrow-down */
</style>