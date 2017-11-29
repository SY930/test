import HomeView from 'view/home'
import AddUser from 'view/add'

export default [
  {
    exact: true,
    name: 'home',
    path: '/',
    component: HomeView,
  },
    {
      name:'add',
      path:'/add',
      component:AddUser,
    }
]
