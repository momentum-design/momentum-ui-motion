<!-- 
---
date: 2020/6/23 11:00:10
---
-->
# voice-input

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### 用法

<!--#html1#-->
```
<p>
<a onclick="javascript:document.getElementById('voice-input').start()">show</a>
<a onclick="javascript:document.getElementById('voice-input').end()">end</a>
</p>
<mm-voice-input id='voice-input'></mm-voice-input>
```

### 特性

+ colors

	Set colors of the icon. Use ```|``` to split. Default is ```#00CF64```.

### 方法

+ start

	开始动画

+ end

    结束动画

## 例

### 设置颜色

你可以通过属性改变控件的颜色

#### 用法

<!--#html2#-->
```
<p>
<a onclick="javascript:document.getElementById('voice-input2').start()">show</a>
<a onclick="javascript:document.getElementById('voice-input2').end()">end</a>
</p>
<mm-voice-input id='voice-input2' color='#FC9D03'></mm-voice-input>
```
