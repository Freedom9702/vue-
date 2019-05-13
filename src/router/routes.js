export default [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')  //   路由的懒加载----提升性能
    },
    {
      path: '/kind',
      name: 'kind',
      component: () => import('@/views/kind')
    }
  ]