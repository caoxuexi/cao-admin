import router from './router'
import store from './store'

// 白名单
const whiteList = ['/login']
/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 存在 token ，进入主页。这里我们通过定义getters来便捷访问，不然就是用下面注释的这个来获得token
  // if (store.state.user.token) {
  // 快捷访问，如果没有token就跳转登录页面
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否获取
      // 若不存在用户信息，则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取用户信息的 action
        const { permission } = await store.dispatch('user/getUserInfo')
        // 处理用户权限，筛选出需要添加的权限
        const filterRoutes = await store.dispatch(
          'permission/filterRoutes',
          permission.menus
        )
        // 利用 addRoute 循环添加
        filterRoutes.forEach((item) => {
          router.addRoute(item)
        })
        // 添加完动态路由之后，需要在进行一次主动跳转
        return next(to.path)
      }
      next()
    }
  } else {
    // 没有token的情况下，只可以进入白名单中的路由
    if (whiteList.indexOf(to.path) > -1) {
      // 在白名单里面，就直接通过即可
      next()
    } else {
      // 不在白名单里面跳转login页面
      next('/login')
    }
  }
})
