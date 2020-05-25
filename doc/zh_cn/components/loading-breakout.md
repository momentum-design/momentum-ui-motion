<!-- 
---
date: 2020/5/27 11:00:00
---
-->
# loading-breakout

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### 用法

<!--#html1#-->
```
<mm-loading-breakout autoplay></mm-loading-breakout>
```

### 特性

+ autoplay

	设置自动播放动画

+ colors

	设置颜色，使用 ```@```分割。默认的是```#FC9D03```。

+ size

	设置控件的尺寸。 默认的是```27```。

### Method

+ play

	播放动画，继承自mframe。

+ stop

	停止动画，继承自mframe。

+ pause

	暂停动画，继承自mframe。

## 例

### 设置颜色和尺寸

#### 用法

<!--#html2#-->
```
<mm-loading-breakout colors='#52DCFF' autoplay size='36'></mm-loading-breakout>
```

### 设置每一个方框的颜色

你可以为图标中的每一个方框分别设置颜色。

#### 用法

<!--#html3#-->
```
<mm-loading-breakout colors='#52DCFF@#31E88C@#FFC14F@#FFBBAD' autoplay></mm-loading-breakout>
```
