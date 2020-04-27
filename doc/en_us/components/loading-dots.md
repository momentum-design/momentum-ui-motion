<!-- 
---
date: 2020/4/27 11:00:00
---
-->
# loading-dots

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### Usage

```
<mm-loading-dots id='my_dots' autoplay></mm-loading-dots>
```

<!--@
<iframe height="208" style="width: 100%;" scrolling="no" title="motion_components" src="https://codepen.io/arthusliang/embed/BaoRRxz?height=208&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/BaoRRxz'>motion_components</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/BaoRRxz)

### Attribute

+ autoplay

	Set to play the animation automatically.

+ colors

	Set the light color and dark color. Use ```|``` to split. Default is ```#875AE0|#C7A5FA```.
	
	You can also set up color loops. Use ```@``` to split color sets, such as ```#875AE0|#C7A5FA@#D43B52|#FC97AA```. 

+ size

	Set the size of loading-dots. Default is ```60```.

### Method

+ play

	Start the animation. Inherit from mframe.

+ stop

	Stop the animation. Inherit from mframe.

+ pause

	Pause the animation. Inherit from mframe.

## Examples

### Set size and color

```
<mm-loading-dots size='300' colors='#D43B52|#FC97AA' autoplay></mm-loading-dots>
```

<!--@
<iframe height="387" style="width: 100%;" scrolling="no" title="loading-dots-props" src="https://codepen.io/arthusliang/embed/Vwvbbdo?height=387&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/Vwvbbdo'>loading-dots-props</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/Vwvbbdo)

### Set color loop

You can set any colors in the loop. mframe will generator the color between 2 colors(sometimes will be black), so be careful to test colors

```
<mm-loading-dots size='100' colors='#875AE0|#C7A5FA@#D43B52|#FC97AA@#0A78CC|#5EBFF7@#148579|#30C9B0@#7D7A18|#B4BA43@#C74F0E|#FF9D52' autoplay></mm-loading-dots>
```

<!--@
<iframe height="207" style="width: 100%;" scrolling="no" title="loading-dots-color-loop" src="https://codepen.io/arthusliang/embed/qBOmmzz?height=207&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/qBOmmzz'>loading-dots-color-loop</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/qBOmmzz)


