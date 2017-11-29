import HomeView from 'view/home'
import AddUser from 'view/add'
import Detail from 'view/detail'

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
    },
    {
      name:'detail',
        path:'/detail/:id',
        component:Detail
    }
]
