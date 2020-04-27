<!-- 
---
date: 2020/4/27 11:00:00
---
-->
# loading-dots

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### 用法

```
<mm-loading-dots id='my_dots' autoplay></mm-loading-dots>
```

<!--@
<iframe height="208" style="width: 100%;" scrolling="no" title="motion_components" src="https://codepen.io/arthusliang/embed/BaoRRxz?height=208&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/BaoRRxz'>motion_components</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/BaoRRxz)

### 属性

+ autoplay

	设置自动播放

+ colors

	设置浅色和深色，使用 ```|```分割。默认值是```#875AE0|#C7A5FA```。
	
	你也可以设置颜色循环，使用```@```分割组, 例如```#875AE0|#C7A5FA@#D43B52|#FC97AA```。

+ size

	设置尺寸. 默认值```60```.

### 方法

+ play

	播放动画，继承自mframe实例。

+ stop

	停止动画，继承自mframe实例。

+ pause

	暂停动画，继承自mframe实例。

## 例

### 设置尺寸和颜色

```
<mm-loading-dots size='300' colors='#D43B52|#FC97AA' autoplay></mm-loading-dots>
```

<!--@
<iframe height="387" style="width: 100%;" scrolling="no" title="loading-dots-props" src="https://codepen.io/arthusliang/embed/Vwvbbdo?height=387&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/Vwvbbdo'>loading-dots-props</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/Vwvbbdo)

### 设置颜色循环

你可以设置颜色循环，mframe会生成过度的颜色(有时候会是黑色), 请谨慎测试使用。

```
<mm-loading-dots size='100' colors='#875AE0|#C7A5FA@#D43B52|#FC97AA@#0A78CC|#5EBFF7@#148579|#30C9B0@#7D7A18|#B4BA43@#C74F0E|#FF9D52' autoplay></mm-loading-dots>
```

<!--@
<iframe height="207" style="width: 100%;" scrolling="no" title="loading-dots-color-loop" src="https://codepen.io/arthusliang/embed/qBOmmzz?height=207&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/qBOmmzz'>loading-dots-color-loop</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/qBOmmzz)


