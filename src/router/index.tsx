import Loadable from 'react-loadable';
import MyLoadingComponent from '../pages/loading';
const loadable = (filename: string) => Loadable({
    loader: () => import(`../pages/${filename}`),
    loading: MyLoadingComponent
});
//路由配置对象
const routers = [
    {
        path: '/home',
        name: "home",
        component: loadable('home'),
    },
    {
        path: '/detail/:id',
        name: "detail",
        component: loadable('detail')
    },
];
export default routers;