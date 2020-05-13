<!-- 
---
date: 2020/5/13 14:10:00
---
-->
# state-bar

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### 用法

<!--#html1#-->
```
<mm-state-bar autoplay>State Bar</mm-state-bar>
```

### 特性

+ autoplay

	设置自动播放显示控件的动画。
	
+ colors

	设置状态颜色组。
	
### 方法

+ state
	
	过渡到指定状态 ```document.getElementById('input-label-id').state(1);```.
	
+ next

	过渡到下一个状态。

+ show

	播放显示组件动画。

+ hide

	播放隐藏组件动画。
	
+ bind

	绑定事件
	
```
document.getElementById('input-label-id').bind('hide', function(i) {
	console.log('Now the state is', i);
});
```
	
### 事件

你可以是为本控件绑定如下事件。

+ show

在显示控件动画结束后调用。

+ state

在切换控件动画结束后调用。当前状态值作为第一个参数传入回调函数。

+ hide

在隐藏控件动画结束后调用。

## 例

### 默认

<!--#html2#-->
```
<a onclick="javascript:document.getElementById('testBar').show()">show</a>
<mm-state-bar id='testBar' autoplay>
    <a onclick="javascript:document.getElementById('testBar').hide()">hide</a>
    <a onclick="javascript:document.getElementById('testBar').next()">next</a>
</mm-state-bar>
```

### 设置颜色组

<!--#html3#-->
```
<a onclick="javascript:document.getElementById('testBar2').show()">show</a>
<mm-state-bar colors='#52DCFF@#875AE1@#999923' id='testBar2' autoplay>
    <a onclick="javascript:document.getElementById('testBar2').hide()">hide</a>
    <a onclick="javascript:document.getElementById('testBar2').next()">next</a>
</mm-state-bar>
```