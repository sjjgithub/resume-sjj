const { override, fixBabelImports,  addDecoratorsLegacy, addLessLoader, addWebpackAlias } = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const path = require('path');
module.exports = override(
    addDecoratorsLegacy(),//使用装饰器
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src/'),
    }),
    fixBabelImports('import', { // antd按需加载
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({ //less
        javascriptEnabled: true,
        // modifyVars: { '@primary-color': '#25b864' }, // 修改antd theme
        localIdentName: '[path][name]-[local]',
    }),
    (config, env) => { // 热加载
        config = rewireReactHotLoader(config, env);
        return config;
    }
);