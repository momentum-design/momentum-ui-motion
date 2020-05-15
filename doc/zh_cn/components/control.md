<!-- 
---
date: 2020/5/15 14:10:00
---
-->
# control

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### 用法

<!--#html0#-->
```
<mm-control current='0' state-text='Mute@@Unmute'>
    <mm-control-icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10H14V13C14 15.2091 12.2091 17 10 17C7.79086 17 6 15.2091 6 13V10Z" fill="#00CF64"/>
            <rect x="6" y="8" width="8" height="1" fill="#00CF64"/>
            <rect x="6" y="6" width="8" height="1" fill="#00CF64"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 12.5C13.5 14.43 11.93 16 10 16C8.07 16 6.5 14.43 6.5 12.5V4.5C6.5 2.57 8.07 1 10 1C11.93 1 13.5 2.57 13.5 4.5V12.5ZM5.5 4.5V12.5C5.5 14.815 7.255 16.699 9.503 16.95C9.503 16.956 9.5 19 9.5 19H7.5C7.225 19 7 19.224 7 19.5C7 19.776 7.225 20 7.5 20H12.5C12.776 20 13 19.776 13 19.5C13 19.224 12.776 19 12.5 19H10.5V16.967C12.745 16.699 14.5 14.815 14.5 12.5V4.5C14.5 2.015 12.485 0 10 0C7.515 0 5.5 2.015 5.5 4.5Z" fill="white"/>
        </svg>
    </mm-control-icon>
    <mm-control-text>Mute</mm-control-text>
    <mm-control-arrow></mm-control-arrow>
</mm-control>
```

### 特性

#### mode

+ default

+ green

+ red

+ blue

+ light

#### state-text

设置一组文字，以@@分割。用来在不同状态间切换按钮。

#### current

设置当前状态序数。

### Method

#### bind

绑定事件

```
control.bind('initMotion', function() {} );
```

#### next

方法next会在点击按钮时自动被调用。执行切换状态，当两个状态文字长度差大于4px时会触发动画。

```
control.next()
```

#### state

传入数字，直接切换状态。

```
control.state(1)
```

### Events

#### initMotion

改事件在初始化或更新动画时调用。

## mm-control-icon

内置一个图标。

### 用法

<!--#html1#-->
```
<mm-control >
    <mm-control-icon>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C5 10.553 4.552 11 4 11C3.448 11 3 10.553 3 10C3 9.447 3.448 9 4 9C4.552 9 5 9.447 5 10ZM11.0007 10C11.0007 10.553 10.5527 11 10.0007 11C9.4487 11 9.0007 10.553 9.0007 10C9.0007 9.447 9.4487 9 10.0007 9C10.5527 9 11.0007 9.447 11.0007 10ZM17.0044 10C17.0044 10.553 16.5564 11 16.0044 11C15.4524 11 15.0044 10.553 15.0044 10C15.0044 9.447 15.4524 9 16.0044 9C16.5564 9 17.0044 9.447 17.0044 10Z" fill="white"/>
        </svg>  
    </mm-control-icon>
</mm-control>
```

## mm-control-text

内置文字。

### 用法

<!--#html2#-->
```
<mm-control mode='green'>
    <mm-control-text class='wide'>Join Meeting</mm-control-text>
</mm-control>
```

### class

+ wide

## mm-control-arrow

内置一个箭头。

### 用法

<!--#html3#-->
```
<mm-control>
    <mm-control-text>Join Meeting</mm-control-text>
    <mm-control-arrow></mm-control-arrow>
</mm-control>
```

