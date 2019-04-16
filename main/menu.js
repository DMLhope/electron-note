//electron对象的引用
var electron=require('electron');
//electron.Menu对象的引用
var Menu=electron.Menu;
//创建一个空菜单
let template=[];
//实例化
var m=Menu.buildFromTemplate(template);
//传值
Menu.setApplicationMenu(m);
