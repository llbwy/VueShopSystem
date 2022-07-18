<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img
          src="https://pic.stackoverflow.wiki/uploadImages/123/133/196/21/2022/07/15/10/56/fb75d871-e3e6-4916-a74b-960d8442d3a0.png"
          width="33"
          id="logo"
        />
        <span>基于Vue+ElementUI+Node+MySQL的路由权限电商管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button></el-header
    >
    <!-- 页面主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单 -->
        <el-menu
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#409bff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id.toString()"
            v-for="item in menulist"
            :key="item.id"
          >
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path + ''"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <!-- 一级菜单模板区 -->
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menulist: [],
      iconObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao',
      },
      isCollapse: false,
      //被激活的地址
      activePath: '',
    }
  },
  created() {
    //生命周期函数
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    //获取所有菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status != 200) return this.$message.error(res.meta.message)
      this.menulist = res.data
    },
    //折叠菜单
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    //保存连接激活的状态
    saveNavState(activePath) {
      //第一个参数是起的小名，第二个是传进的参数
      window.sessionStorage.setItem('activePath', activePath)
      //点击权限管理后退，再点击用户列表，就显示高亮了 ，不加下面这句就没反应
      this.activePath = activePath
    },
  },
}
</script>

<style lang="less" scoped>
.el-button{
  margin-right: 20px;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
// title文字居中对齐
div {
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
  }
  img {
    border-radius: 50%;
    margin-left: 20px;
  }
}
.el-aside {
  background-color: #373d41;
  .el-menu {
    border: 0;
  }
}
.el-main {
  background-color: #fff;
}

.home-container {
  height: 100%;
}
iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: #373d41;

  font-size: 10px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  justify-content: center;
  cursor: pointer;
}
</style>