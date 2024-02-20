import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
// export const navpageRouter = {
//     path: '/navpage',
//     name: 'navpage',
//     meta: {
//         title: '登录 - 我的商务室 '
//     },
//     component: resolve => require('@/views/navPage.vue')
//     // component: resolve => require('@/views/home/homepage.vue')
// };

export const indexRouter = {
    path: '/index',
    name: 'index',
    meta: {
        title: '登录 - 我的商务室 '
    },
    // component: resolve => require('@/views/index.vue')
    component: resolve => require(['@/views/index.vue'],resolve)
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => require(['@/views/error-page/403.vue'],resolve)
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => require(['@/views/error-page/500.vue'],resolve)
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => require(['@/views/main-components/lockscreen/components/locking-page.vue'],resolve)
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: resolve => require(['@/views/home/home.vue'],resolve) },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => require(['@/views/own-space/own-space.vue'], resolve) },
        { path: 'download', title: '投标工具下载', name: 'download', component: resolve => require(['@/views/collect/download.vue'], resolve) },
        { path: '/project-info', title: '项目详情', name: 'projectInfo', component: resolve => require(['@/views/projectManage/info.vue'], resolve) },
        { path: 'project-create', title: '项目详情', name: 'projectCreate', component: resolve => require(['@/views/projectManage/create.vue'], resolve) },
        { path: 'change-pass', title: '密码管理', name: 'change_pass', component: resolve => require(['@/views/change-pass/change-pass.vue'], resolve) },
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => require(['@/views/my-message/message.vue'], resolve) },

        { path: '/infoPublish/stateList', title: '所有公告', name: 'stateList', component: resolve => require(['@/views/infoPublish/infoHome/stateList.vue'], resolve) },
        { path: '/project/addProject', title: '新建项目', name: 'addProject', component: resolve => require(['@/views/infoPublish/project/addProject.vue'], resolve) },
        { path: '/project/editProject', title: '编辑项目', name: 'editProject', component: resolve => require(['@/views/infoPublish/project/editProject.vue'], resolve) },
        { path: '/project/projectDetail', title: '项目详情', name: 'projectDetail', component: resolve => require(['@/views/infoPublish/project/projectDetail.vue'], resolve) },

        { path: '/tender/tenderDetail', title: '招标公告详情', name: 'tenderDetail', component: resolve => require(['@/views/infoPublish/tender/tenderDetail.vue'], resolve) },
        { path: '/tender/addTender', title: '新建招标公告', name: 'addTender', component: resolve => require(['@/views/infoPublish/tender/addTender.vue'], resolve) },
        { path: '/tender/editTender', title: '编辑招标公告', name: 'editTender', component: resolve => require(['@/views/infoPublish/tender/editTender.vue'], resolve) },
        { path: '/tender/correctTenderStep', title: '变更招标公告', name: 'correctTenderStep', component: resolve => require(['@/views/infoPublish/tender/correctTenderStep.vue'], resolve) },
        { path: '/tender/abandonTender', title: '新建废标公告', name: 'abandonTender', component: resolve => require(['@/views/infoPublish/tender/abandonTender.vue'], resolve) },
        { path: '/tender/editCorrectTender', title: '编辑变更招标公告', name: 'editCorrectTender', component: resolve => require(['@/views/infoPublish/tender/editCorrectTender.vue'], resolve) },
        { path: '/tender/editAbandonTender', title: '编辑废标招标公告', name: 'editAbandonTender', component: resolve => require(['@/views/infoPublish/tender/editAbandonTender.vue'], resolve) },

        { path: '/candidate/candidateDetail', title: '中标候选人公示详情', name: 'candidateDetail', component: resolve => require(['@/views/infoPublish/candidate/candidateDetail.vue'], resolve) },
        { path: '/candidate/addCandidate', title: '新建中标候选人公示', name: 'addCandidate', component: resolve => require(['@/views/infoPublish/candidate/addCandidate.vue'], resolve) },
        { path: '/candidate/editCandidate', title: '编辑中标候选人公示', name: 'editCandidate', component: resolve => require(['@/views/infoPublish/candidate/editCandidate.vue'], resolve) },
        { path: '/candidate/correctCandidate', title: '变更中标候选人公示', name: 'correctCandidate', component: resolve => require(['@/views/infoPublish/candidate/correctCandidate.vue'], resolve) },
        { path: '/candidate/abandonCandidate', title: '新建废标候选人公示', name: 'abandonCandidate', component: resolve => require(['@/views/infoPublish/candidate/abandonCandidate.vue'], resolve) },
        {path: '/candidate/editCorrect', title: '编辑变更中标候选人公示', name: 'editCorrectCan', component: resolve => require(['@/views/infoPublish/candidate/correctEdit.vue'], resolve)},
        {path: '/candidate/editAbandon', title: '编辑废标中标候选人公示', name: 'editAbandonCan', component: resolve => require(['@/views/infoPublish/candidate/abandonEdit.vue'], resolve)},

        { path: '/result/resultDetail', title: '中标结果公告详情', name: 'resultDetail', component: resolve => require(['@/views/infoPublish/result/resultDetail.vue'], resolve) },
        { path: '/result/addResult', title: '新建中标结果公告', name: 'addResult', component: resolve => require(['@/views/infoPublish/result/addResult.vue'], resolve) },
        { path: '/result/editResult', title: '编辑中标结果公告', name: 'editResult', component: resolve => require(['@/views/infoPublish/result/editResult.vue'], resolve) },
        { path: '/result/correctResult', title: '新建变更中标结果公告', name: 'correctResult', component: resolve => require(['@/views/infoPublish/result/correctResult.vue'], resolve) },
        { path: '/result/abandonResult', title: '新建废标中标结果公告', name: 'abandonResult', component: resolve => require(['@/views/infoPublish/result/abandonResult.vue'], resolve) },
        { path: '/result/editCorrectResult', title: '编辑变更中标结果公告', name: 'editCorrectResult', component: resolve => require(['@/views/infoPublish/result/editCorrectResult.vue'], resolve) },
        { path: '/result/editAbandonResult', title: '编辑废标中标结果公告', name: 'editAbandonResult', component: resolve => require(['@/views/infoPublish/result/editAbandonResult.vue'], resolve) },

        { path: '/prequalification/prequalificationDetail', title: '资格预审公告详情', name: 'prequalificationDetail', component: resolve => require(['@/views/infoPublish/prequalification/prequalificationDetail.vue'], resolve) },
        { path: '/prequalification/prequalificationCorrect', title: '变更资格预审公告', name: 'correctPre', component: resolve => require(['@/views/infoPublish/prequalification/prequalificationCorrect.vue'],resolve) },
        { path: '/prequalification/abandonPrequalification', title: '新建废标资格预审公告', name: 'abandonPre', component: resolve => require(['@/views/infoPublish/prequalification/abandonPrequalification.vue'], resolve) },
        { path: '/prequalification/addPrequalification', title: '新建资格预审公告', name: 'addPrequalification', component: resolve => require(['@/views/infoPublish/prequalification/addPrequalification.vue'], resolve) },
        { path: '/prequalification/editPrequalification', title: '编辑资格预审公告', name: 'editPrequalification', component: resolve => require(['@/views/infoPublish/prequalification/editPrequalification.vue'], resolve) },
        { path: '/prequalification/editCorrectPre', title: '编辑变更资格预审公告', name: 'editCorrectPre', component: resolve => require(['@/views/infoPublish/prequalification/editCorrectPre.vue'], resolve) },
        { path: '/prequalification/editAbandonPre', title: '编辑废标资格预审公告', name: 'editAbandonPre', component: resolve => require(['@/views/infoPublish/prequalification/editAbandonPre.vue'], resolve) },

        { path: '/bidder/bidderDetail', title: '投标人详情', name: 'bidderDetail', component: resolve => require(['@/views/infoPublish/bidder/bidderDetail.vue'], resolve) },


        { path: '/infoPublish/noticeDetail', title: '公告详情', name: 'noticeDetail', component: resolve => require(['@/views/infoPublish/tenderDetail/detail.vue'], resolve) },
        { path: '/infoPublishOut/autoDetail', title: '自主招标类项目详情', name: 'autoDetail', component: resolve => require(['@/views/infoPublishOut/autoDetail.vue'], resolve) },

    ]
};

export const appRouter = [];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    // secondInfo,
    // navpageRouter,
    indexRouter,
    otherRouter,
    locking,
    ...appRouter,
    page500,
    page403,
];
