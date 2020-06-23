<!-- 
---
date: 2020/6/23 11:00:10
---
-->
# voice-input

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### Usage

<!--#html1#-->
```
<p>
<a onclick="javascript:document.getElementById('voice-input0').start()">show</a>
<a onclick="javascript:document.getElementById('voice-input0').end()">end</a>
</p>
<mm-voice-input id='voice-input0'></mm-voice-input>
```

### Attribute

+ colors

	Set colors of the icon. Use ```|``` to split. Default is ```#00CF64```.

### Method

+ start

	Start the animation.

+ end

	Stop the animation.


## Examples

### Set colors for each rect

You can set any colors for each rect inside the component.

#### Usage

<!--#html2#-->
```
<p>
<a onclick="javascript:document.getElementById('voice-input2').start()">show</a>
<a onclick="javascript:document.getElementById('voice-input2').end()">end</a>
</p>
<mm-voice-input id='voice-input2' color='#FC9D03'></mm-voice-input>
```
