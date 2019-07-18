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
        childrenRoutes: [
            {
                path: '/home/baseInfo',
                name: "homezBaseInfo",
                component: loadable('home/base'),
            },
            {
                path: '/home/wantedInfo',
                name: "homezWantedInfo",
                component: loadable('home/wanted'),
            },
            {
                path: '/home/workInfo',
                name: "homezWorkInfo",
                component: loadable('home/work'),
            },
            {
                path: '/home/educationInfo',
                name: "homezEducation",
                component: loadable('home/education'),
            },
            {
                path: '/home/evaluationInfo',
                name: "homezEvaluation",
                component: loadable('home/evaluation'),
            }
        ]
    },
    {
        path: '/projects',
        name: "projects",
        component: loadable('projectList'),
        childrenRoutes: [{
            path: '/detail/:id',
            name: "detail",
            component: loadable('projectList/detail')
        }]
    }
];
export default routers;