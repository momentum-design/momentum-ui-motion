<!-- 
---
date: 2020/4/27 12:00:00
---
-->
# spinner

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### 用法

```
<mm-spinner autoplay></mm-spinner>
```

<!--@
<iframe height="176" style="width: 100%;" scrolling="no" title="spinner " src="https://codepen.io/arthusliang/embed/VwvbWav?height=176&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/VwvbWav'>spinner </a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/VwvbWav)

### 属性

+ autoplay

	设置自动播放

+ colors

	设置浅色和深色，使用 ```|```分割。默认值是```#875AE0|#C7A5FA```。
	
	你也可以设置颜色循环，使用```@```分割组, 例如```#875AE0|#C7A5FA@#D43B52|#FC97AA```。

+ size

	设置尺寸. 默认值```60```.

### Method

+ play

	播放动画，继承自mframe实例。

+ stop

	停止动画，继承自mframe实例。

+ pause

	暂停动画，继承自mframe实例。

## 例

### 设置尺寸和颜色

```
<mm-spinner size='200' colors='#0A78CC|#5EBFF7' autoplay></mm-spinner>
```

<!--@
<iframe height="311" style="width: 100%;" scrolling="no" title="spinner-props" src="https://codepen.io/arthusliang/embed/JjYNJKP?height=311&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/JjYNJKP'>spinner-props</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/JjYNJKP)

### 设置颜色循环

你可以设置颜色循环，mframe会生成过度的颜色(有时候会是黑色), 请谨慎测试使用。

```
<mm-spinner size='100' colors='#875AE0|#C7A5FA@#D43B52|#FC97AA@#0A78CC|#5EBFF7@#148579|#30C9B0@#7D7A18|#B4BA43@#C74F0E|#FF9D52' autoplay></mm-spinner>
```

<!--@
<iframe height="223" style="width: 100%;" scrolling="no" title="spinner-colors" src="https://codepen.io/arthusliang/embed/mdemwEO?height=223&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/mdemwEO'>spinner-colors</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/mdemwEO)


