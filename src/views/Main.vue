<style lang="less">
@import "./main.less";
</style>

<template>
  <div class="main" :class="{ 'main-hide-text': shrink }">
    <Modal
      v-model="busyFlag"
      :mask-closable="false"
      width="360"
      :closable="false"
    >
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>提醒</span>
      </p>
      <div style="text-align: center">
        <p>服务器繁忙,请稍后再操作</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="true"
          >{{ busyTimeout }}秒后重试</Button
        >
      </div>
    </Modal>
    <div
      class="sidebar-menu-con menu-bar"
      :style="{
        width: shrink ? '60px' : '230px',
        overflow: shrink ? 'visible' : 'auto',
      }"
    >
      <shrinkable-menu
        :shrink="shrink"
        @on-change="handleSubmenuChange"
        :theme="menuTheme"
        :before-push="beforePush"
        :open-names="openedSubmenuArr"
        :menu-list="menuList"
      >
        <div slot="top" class="logo-con">
          <!-- <img v-show="!shrink" src="../assets/logo.png" key="max-logo" />
          <img v-show="shrink" src="../assets/logo-min.png" key="min-logo" />-->
          <div v-show="!shrink" class="bigLogo">我的商务室</div>
          <div v-show="shrink" class="minLogo">商</div>
        </div>
      </shrinkable-menu>
    </div>
    <div
      class="main-header-con"
      :style="{ paddingLeft: shrink ? '60px' : '230px' }"
    >
      <div class="main-header">
        <div class="navicon-con">
          <Button
            :style="{
              transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)',
              height: '48px',
            }"
            type="text"
            @click="toggleClick"
          >
            <Icon type="md-menu" size="32"></Icon>
          </Button>
        </div>
        <div class="header-middle-con">
          <div class="main-breadcrumb" v-if="navType == 4">
            <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
          </div>
          <div class="main-nav-menu" v-if="navType == 1 || navType == 2">
            <Menu
              mode="horizontal"
              :active-name="currNav"
              @on-select="selectNav"
            >
              <MenuItem
                v-for="(item, i) in navList.slice(0, sliceNum)"
                :key="i"
                :name="item.name"
              >
                <Icon :type="item.icon" v-if="navType == 1" />
                {{ item.title }}
              </MenuItem>
              <Submenu name="sub" v-if="navList.length > sliceNum">
                <template slot="title">更多</template>
                <MenuItem
                  v-for="(item, i) in navList.slice(sliceNum, navList.length)"
                  :key="i"
                  :name="item.name"
                >
                  <Icon :type="item.icon" v-if="navType == 1" />
                  {{ item.title }}
                </MenuItem>
              </Submenu>
            </Menu>
          </div>
          <div class="main-nav" v-if="navType == 3">
            <Dropdown transfer @on-click="selectNav">
              <div style="cursor: pointer">
                {{ currNavTitle }}
                <Icon type="ios-arrow-down"></Icon>
              </div>
              <DropdownMenu slot="list">
                <DropdownItem
                  v-for="(item, i) in navList"
                  :key="i"
                  :name="item.name"
                  :selected="currNav == item.name"
                >
                  <div class="nav-item">
                    <Icon
                      :type="item.icon"
                      :size="16"
                      style="margin: 0 10px 3px 0"
                    ></Icon>
                    {{ item.title }}
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div
          :class="{
            'header-avator-con': navType != 4,
            'header-avator-con nav4': navType == 4,
          }"
          style="padding-left: 50px"
        >
          <Dropdown @on-click="selectNav" class="options" v-if="navType == 4">
            <Icon type="ios-apps" :size="24" class="language"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem
                v-for="(item, i) in navList"
                :key="i"
                :name="item.name"
                :selected="currNav == item.name"
              >
                <div>
                  <Icon
                    :type="item.icon"
                    :size="14"
                    style="margin: 0 10px 2px 0"
                  ></Icon>
                  {{ item.title }}
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <full-screen
            class="tool_icon"
            v-model="isFullScreen"
            @on-change="fullscreenChange"
          ></full-screen>
          <!-- <Dropdown @on-click="handleLanDropdown" class="options">
            <Icon type="md-globe" :size="24" class="language"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem name="zh-CN">中文</DropdownItem>
              <DropdownItem name="en-US">English</DropdownItem>
            </DropdownMenu>
          </Dropdown> -->
          <!-- <lock-screen class="tool_icon"></lock-screen> -->
          <message-tip class="tool_icon" v-model="mesCount"></message-tip>
          <div class="user-dropdown-menu-con">
            <Row
              type="flex"
              justify="end"
              align="middle"
              class="user-dropdown-innercon"
            >
              <Dropdown
                transfer
                trigger="hover"
                @on-click="handleClickUserDropdown"
              >
                <a>
                  <Avatar
                    :src="avatarPath"
                    style="background: #619fe7; margin-left: 10px"
                  ></Avatar>
                  <span class="main-user-name">{{
                    $store.state.user.nickname
                  }}</span>
                  <Icon type="md-arrow-dropdown" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">{{
                    $t("userCenter")
                  }}</DropdownItem>
                  <DropdownItem name="changePass">{{
                    $t("changePass")
                  }}</DropdownItem>
                  <DropdownItem name="loginout" divided>{{
                    $t("logout")
                  }}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Row>
          </div>
        </div>
      </div>
      <div class="tags-con">
        <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
      </div>
    </div>
    <div class="single-page-con" :style="{ left: shrink ? '60px' : '230px' }">
      <div class="single-page">
        <keep-alive :include="cachePage">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <!-- 全局加载动画 -->
    <circleLoading class="loading-position" v-show="loading" />

    <div class="containter">
      <div class="containter_box">
        <p class="closebtn"><img src="https://cdn.chinabidding.cn/public/2020/img/syhd_tc_icongb2.png" alt="" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import shrinkableMenu from "./main-components/shrinkable-menu/shrinkable-menu.vue";
import tagsPageOpened from "./main-components/tags-page-opened.vue";
import breadcrumbNav from "./main-components/breadcrumb-nav.vue";
import fullScreen from "./main-components/fullscreen.vue";
import lockScreen from "./main-components/lockscreen/lockscreen.vue";
import messageTip from "./main-components/message-tip.vue";
import circleLoading from "@/views/my-components/xboot/circle-loading.vue";
import Cookies from "js-cookie";
import util from "@/libs/util.js";
import {
  ws,
  getOtherSet,
  ticketLogout, // 退出登录
} from "@/api/index";
import SockJS from "sockjs-client";
import stompOld from "@/libs/stomp.js";
import {getMessageSendData} from "@/test"

import axios from "axios";
var Stomp = stompOld.Stomp;
var client;
export default {
  components: {
    shrinkableMenu,
    tagsPageOpened,
    breadcrumbNav,
    fullScreen,
    lockScreen,
    messageTip,
    circleLoading,
  },
  data() {
    return {
      sliceNum: 3,
      shrink: false,
      username: "",
      userId: "",
      isFullScreen: false,
      openedSubmenuArr: this.$store.state.app.openedSubmenuArr,
      firstThreeNav: [],
      lastNav: [],
      navType: 1,
    };
  },
  computed: {
    busyFlag() {
      return this.$store.state.app.busyFlag;
    },
    busyTimeout() {
      return this.$store.state.app.busyTimeout;
    },
    loading() {
      return this.$store.state.app.loading;
    },
    navList() {
      return this.$store.state.app.navList;
    },
    currNav() {
      return this.$store.state.app.currNav;
    },
    currNavTitle() {
      return this.$store.state.app.currNavTitle;
    },
    menuList() {
      return this.$store.state.app.menuList;
    },
    pageTagsList() {
      return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
    },
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    },
    avatarPath() {
      return localStorage.avatorImgPath;
    },
    cachePage() {
      return this.$store.state.app.cachePage;
    },
    lang() {
      return this.$store.state.app.lang;
    },
    menuTheme() {
      return this.$store.state.app.menuTheme;
    },
    mesCount() {
      return this.$store.state.app.messageCount;
    },
  },
  stompClient: {
    monitorIntervalTime: 100,
    stompReconnect: true,
    timeout(orgCmd) {},
  },
  methods: {
    async init() {
      this.$store.commit("getNickName");
      // 菜单
      let pathArr = util.setCurrentPath(this, this.$route.name);
      // this.$store.commit("updateMenulist");
      if (pathArr.length >= 2) {
        this.$store.commit("addOpenSubmenu", pathArr[1].name);
      }
      let userInfo = JSON.parse(Cookies.get("userInfo"));
      this.username = this.$store.state.user.nickname;

      this.userId = userInfo.id;
      this.checkTag(this.$route.name);
      let currWidth = document.body.clientWidth;
      if (currWidth <= 1200) {
        this.sliceNum = 2;
      }
      // 读取未读消息数
      // let res = await getMessageSendData({
      //   userId: userInfo.id,
      //   status: 0,
      // })
      let res = getMessageSendData;
      if (res.success) {
        this.$store.commit("setMessageCount", res.result.totalElements);
      }

      // 消息开关 websocket
      let messageOpen = this.getStore("messageOpen");
      console.log("messageOpen", messageOpen);
      if (messageOpen != "0") {
        this.connect();
      }
    },
    connect() {
      var headers = {};
      client = Stomp.over(new SockJS(ws));
      client.connect(headers, this.onConnected, this.onFailed);
    },
    onConnected(frame) {
      console.log("连接ws成功: " + frame);
      var topicSubscription = client.subscribe(
        "/topic/subscribe",
        this.responseCallback
      );
      var queueSubscription = client.subscribe(
        "/user/" + this.userId + "/queue/subscribe",
        this.responseCallback
      );
    },
    onFailed(frame) {
      console.log("连接ws失败： " + JSON.stringify(frame));
    },
    responseCallback(frame) {
      console.log("收到消息：" + frame.body);
      this.$store.commit("setMessageCount", this.mesCount + 1);
    },
    selectNav(name) {
      this.$store.commit("setCurrNav", name);
      this.setStore("currNav", name);
      // 清空所有已打开标签
      // this.$store.commit("clearAllTags");
      if (this.$route.name != "home_index") {
        this.$router.push({
          name: "home_index",
        });
      }
      util.initRouter(this);
    },
    toggleClick() {
      this.shrink = !this.shrink;
    },
    handleLanDropdown(name) {
      this.$i18n.locale = name;
      this.$store.commit("switchLang", name);
    },
    handleClickUserDropdown(name) {
      if (name == "ownSpace") {
        util.openNewPage(this, "ownspace_index");
        this.$router.push({
          name: "ownspace_index",
        });
      } else if (name == "changePass") {
        util.openNewPage(this, "change_pass");
        this.$router.push({
          name: "change_pass",
        });
      } else if (name == "loginout") {
        // 退出登录
        let sessionId = localStorage.getItem("sessionId");
        this.$store.commit("setLoading", true);

        getOtherSet().then((res) => {
          this.$store.commit("setLoading", false);
          if (res.result) {
            let domain = res.result.ssoDomain;
            Cookies.set("accessToken", "", {
              domain: domain,
              expires: 7,
            });
          }
          this.$store.commit("logout", this);
          this.$store.commit("clearOpenedSubmenu");
          this.setStore("accessToken", "");
          // 强制刷新页面 重新加载router
          location.reload();
        });
      }
    },
    checkTag(name) {
      let openpageHasTag = this.pageTagsList.some((item) => {
        if (item.name == name) {
          return true;
        }
      });
      if (!openpageHasTag) {
        //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
        util.openNewPage(
          this,
          name,
          this.$route.params || {},
          this.$route.query || {}
        );
      }
    },
    handleSubmenuChange(val) {
      // console.log(val)
    },
    beforePush(name) {
      // console.log(name)
      return true;
    },
    fullscreenChange(isFullScreen) {
      // console.log(isFullScreen);
    },
    resize() {
      let currWidth = document.body.clientWidth;
      if (currWidth <= 1200 && currWidth > 900) {
        this.sliceNum = 2;
        this.shrink = true;
      } else if (currWidth <= 900) {
        this.sliceNum = 1;
        this.shrink = true;
      } else {
        this.sliceNum = 3;
        this.shrink = false;
      }
    },
  },
  watch: {
    $route(to) {
      this.$store.commit("setCurrentPageName", to.name);
      let pathArr = util.setCurrentPath(this, to.name);
      if (pathArr.length > 2) {
        this.$store.commit("addOpenSubmenu", pathArr[1].name);
      }
      this.checkTag(to.name);
      localStorage.currentPageName = to.name;
    },
    lang() {
      util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
    },
  },
  mounted() {
    this.init();
    let that = this;
    this.resize();
    window.addEventListener("resize", function () {
      that.resize();
    });
  },
  created() {
    // 显示打开的页面的列表
    this.$store.commit("setOpenedList");
  },
};
</script>

<style>
/* 2022四月营销活动弹出 */
.containter{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 109;
  display: none;
  background-color:rgba(0, 0, 0, 0.6);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#88000000',endColorstr='#88000000');
}

.containter_box{
  width: 700px;
  height: 560px;
  position: absolute;
  top: 46%;
  left: 50%;
  z-index: 119;
  /*transform: translate(-50%,-50%);*/
  margin-left:-340px;
  margin-top:-240px;
  /*background: url(https://img.chinabidding.cn/banner/2022/swstc/swstc2.png) no-repeat center;*/
}
.closebtn {
  position: absolute;
  right: -20px;
  top: -20px;
  cursor: pointer;
}

</style>