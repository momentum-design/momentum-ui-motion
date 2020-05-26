<!-- 
---
date: 2020/5/27 11:00:10
---
-->
# loading-breakout

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### Usage

<!--#html1#-->
```
<mm-loading-breakout autoplay></mm-loading-breakout>
```

### Attribute

+ autoplay

	Set to play the animation automatically.

+ colors

	Set colors of the icon. Use ```|``` to split. Default is ```#FC9D03```.

+ size

	Set the size of the component. Default is ```28```.

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
<mm-loading-breakout colors='#52DCFF' autoplay size='36'></mm-loading-breakout>
```

### Set colors for each rect

You can set any colors for each rect inside the icon.

#### Usage

<!--#html3#-->
```
<mm-loading-breakout colors='#52DCFF|#31E88C|#FFC14F|#FFBBAD' autoplay></mm-loading-breakout>
```
