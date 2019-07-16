import Loadable from 'react-loadable';
import MyLoadingComponent from '../pages/loading/loading'
const loadable = (filename: string) => Loadable({
    loader: () => import(`../pages/${filename}/${filename}.tsx`),
    loading: MyLoadingComponent
});
//路由配置对象
const routers = [
    {
        path: '/',
        name: "home",
        exact: true,
        component: loadable('home'),
    },
    {
        path: '/detail/:id',
        name: "detail",
        component: loadable('detail')
    },
];
export default routers;