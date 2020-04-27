<!-- 
---
date: 2020/4/27 12:00:00
---
-->
# spinner

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### Usage

```
<mm-spinner autoplay></mm-spinner>
```

<!--@
<iframe height="176" style="width: 100%;" scrolling="no" title="spinner " src="https://codepen.io/arthusliang/embed/VwvbWav?height=176&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/VwvbWav'>spinner </a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/VwvbWav)

### Attribute

+ autoplay

	Set to play the animation automatically.

+ colors

	Set the light color and dark color. Use ```|``` to split. Default is ```#875AE0|#C7A5FA```.
	
	You can also set up color loops. Use ```@``` to split color sets, such as ```#875AE0|#C7A5FA@#D43B52|#FC97AA```. 

+ size

	Set the size. Default is ```60```.

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
<mm-spinner size='200' colors='#0A78CC|#5EBFF7' autoplay></mm-spinner>
```

<!--@
<iframe height="311" style="width: 100%;" scrolling="no" title="spinner-props" src="https://codepen.io/arthusliang/embed/JjYNJKP?height=311&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/JjYNJKP'>spinner-props</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/JjYNJKP)

### Set color loop

You can set any colors in the loop. mframe will generator the color between 2 colors(sometimes will be black), so be careful to test colors.

```
<mm-spinner size='100' colors='#875AE0|#C7A5FA@#D43B52|#FC97AA@#0A78CC|#5EBFF7@#148579|#30C9B0@#7D7A18|#B4BA43@#C74F0E|#FF9D52' autoplay></mm-spinner>
```

<!--@
<iframe height="223" style="width: 100%;" scrolling="no" title="spinner-colors" src="https://codepen.io/arthusliang/embed/mdemwEO?height=223&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/mdemwEO'>spinner-colors</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/mdemwEO)


