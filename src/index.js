import $ from 'jquery'
//webpack使用jquery另外的方法 https://www.cnblogs.com/wyxxj/p/7381050.html
//需要安装open-iconic https://www.cnblogs.com/ZaraNet/p/10255965.html
import 'open-iconic/font/css/open-iconic-bootstrap.scss';
//导入已经编译的bootstrap样式
//import 'bootstrap/dist/css/bootstrap.min.css'
//在main.scss中按需引入bootstrap样式
import './main.scss'

import 'bootstrap/js/dist/util';
//import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

//import 'bootstrap';
//import './scss/app.scss'

function createBootstrapButton(parentEle) {
    var element = document.getElementsByClassName(parentEle)[0];
    var btn = document.createElement('button');
    btn.classList.add('btn-warning');
    btn.innerHTML = 'Button!';
    element.appendChild(btn);    
    return element;
}
createBootstrapButton('hello');

console.log($("title"));
$("title").html('title by jquery');

console.log($("title"));