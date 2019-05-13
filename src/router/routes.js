export default [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
    //   component: () => import('@/views/home')  //   路由的懒加载----提升性能 单组件
    components:{
        default:() => import('@/views/home'),
        footer:()=>import('@/components/common/Footer')
    }
    },
    {
      path: '/kind',
      name: 'kind',
    //   component: () => import('@/views/kind')
    components: {
        default: () => import('@/views/kind')  // 如果这个页面没有底部，则不写即可
      }
    },
    {
        path: '/login',
        name: 'login',
        components: {
          default: () => import('@/views/login')
        }
      },
      {
        path: '/register',
        name: 'register',
        components: {
          default: () => import('@/views/register')
        }
      },
      {
        path: '/cart',
        name: 'cart',
        components: {
          default: () => import('@/views/cart'),
          footer: () => import('@/components/common/Footer')
        }
      },
      {
        path: '/user',
        name: 'user',
        components: {
          default: () => import('@/views/user'),
          footer: () => import('@/components/common/Footer')
        }
      }
  ]