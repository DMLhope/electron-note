 //var Vue =require('vue');
 //var ElementUI=require('element-ui')
 //import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue';

// Vue.use(ElementUI);

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });

//electron对象的引用
var electron = require('electron');
var app=electron.app;
//BrowserWindow类的引用
var BrowserWindow=electron.BrowserWindow;
var mainwindow=null;
//监听应用准备完成的事件
app.on('ready',function(){
    //执行创建菜单的操作
    //require('./main/menu.js');
    //创建窗口
    mainwindow=new BrowserWindow({width:380,height:630,autoHideMenuBar:true,resizable:false ,darkTheme:true});//frame: false
    mainwindow.loadFile('index.html');//选择要打开的主页文件
    mainwindow.on('closed',()=>{//监听了一个关闭事件
        mainwindow=null;
    })
    //开启渲染进程中的调试模式
    //mainwindow.webContents.openDevTools();
   
});
