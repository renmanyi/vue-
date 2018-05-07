# pos

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

项目开发流程
安装vue-cli脚手架全局安装
   npm install vue-cli -g 
   安装后用vue -V 出现版本号说明安装成功
   项目初始化 vue init webpack

挑选图标iconfont。。。。在index.html中引入
   类似于<link rel="stylesheet" href="http://at.alicdn.com/t/font_654298_auzeux1pdfb6gvi.css" >
编写左侧侧边栏
    在公共页面下的组件写好后，在App.vue文件中引入
    import leftNav from '@/components/common/leftNav';（结构中也要加组件名）<leftNav></leftNav>
    export default {
        name: 'app',
        components:{
            leftNav
        }
    }

 项目引用element      http://element.eleme.io/#/zh-CN/component/installation
 1 先安装npm i element-ui -S
 2 在main.js引入    
 import ElementUI from 'element-ui';
 import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

