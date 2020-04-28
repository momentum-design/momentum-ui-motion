<!-- 
---
date: 2020/4/27 12:00:00
---
-->
# spinner

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### Usage

<!--#html1#-->
```
<mm-spinner autoplay></mm-spinner>
```

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

#### Usage

<!--#html2#-->
```
<mm-spinner size='200' colors='#0A78CC|#5EBFF7' autoplay></mm-spinner>
```

[Click here to try this demo online](https://codepen.io/arthusliang/pen/JjYNJKP)

### Set color loop

You can set any colors in the loop. mframe will generator the color between 2 colors(sometimes will be black), so be careful to test colors.

#### Usage

<!--#html3#-->
```
<mm-spinner size='100' colors='#875AE0|#C7A5FA@#D43B52|#FC97AA@#0A78CC|#5EBFF7@#148579|#30C9B0@#7D7A18|#B4BA43@#C74F0E|#FF9D52' autoplay></mm-spinner>
```

[Click here to try this demo online](https://codepen.io/arthusliang/pen/mdemwEO)
