//electron对象的引用
var electron = require('electron');
var app=electron.app;
//BrowserWindow类的引用
var BrowserWindow=electron.BrowserWindow;

var mainwindow=null;
//监听应用准备完成的事件
app.on('ready',function(){
    //执行创建菜单的操作
    require('./main/menu.js');
    //创建窗口
    mainwindow=new BrowserWindow({width:400,height:600});
    mainwindow.loadFile('index.html');//选择要打开的主页文件
    mainwindow.on('closed',()=>{//监听了一个关闭事件
        mainwindow=null;
    })
    //开启渲染进程中的调试模式
    //mainwindow.webContents.openDevTools();
   
});
