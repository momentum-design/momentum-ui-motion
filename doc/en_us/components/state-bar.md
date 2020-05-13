<!-- 
---
date: 2020/5/13 14:10:00
---
-->
# state-bar

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

#### Usage

<!--#html1#-->
```
<mm-state-bar autoplay>State Bar</mm-state-bar>
```

### Attribute

+ autoplay

	To set if show the component when it is created.
	
+ colors

	To set colors for states.
	
### method

+ state
	
	Animate to the state you pass in. Such as ```document.getElementById('input-label-id').state(1);```.
	
+ next

	Animate to the next state.

+ show

	Animate to show the state bar.

+ hide

	Animate to hide the state bar.
	
+ bind

	Bind the events. 
	
```
document.getElementById('input-label-id').bind('hide', function(i) {
	console.log('Now the state is', i);
});
```
	
### Events

You can use method bind to bind the following events.

+ show

Emit when the showing animation ends.

+ state

Emit when state changes. The current will be passed as the first argument.

+ hide

Emit when the hiding animation ends.

## Examples

### Default

<!--#html2#-->
```
<button onclick="javascript:document.getElementById('testBar').show()">show</button>
<mm-state-bar id='testBar' autoplay>
    <button onclick="javascript:document.getElementById('testBar').hide()">hide</button>
    <button onclick="javascript:document.getElementById('testBar').next()">next</button>
</mm-state-bar>
```

### Set colors

<!--#html3****#-->
```
<button onclick="javascript:document.getElementById('testBar2').show()">show</button>
<mm-state-bar colors='#707070@#875AE1@#D3DB7B' id='testBar2' autoplay>
    <button onclick="javascript:document.getElementById('testBar2').hide()">hide</button>
    <button onclick="javascript:document.getElementById('testBar2').next()">next</button>
</mm-state-bar>
```