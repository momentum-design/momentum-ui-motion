<!-- 
---
date: 2020/5/06 12:00:00
---
-->
# Tabs

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion


#### Usage

<!--#html0#-->
```
<mm-tabs current='1'>
    <mm-tabs-header>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
    <mm-tabs-header class='dark circle'>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
</mm-tabs>
```

You can put more than one mm-tabs-header or mm-tabs-body. All the component will use the same current value.

## mm-tabs

### usage

```
<mm-tabs id='myTab' current='1'></mm-tabs>
```

### Attribute

+ current

	Set the selected tab.

### Method

+ select

	To set the selected tab.

```
document.getElementById('myTab').select(0);
```


### Properties

+ Events

	Bind evnets to tabs.

```
document.getElementById('myTab').Events.bind('onSelect', (index) => {} );
```

## mm-tabs-header

### usage

```
<mm-tabs-header class='dark circle'>
    <mm-tabs-header-item>A</mm-tabs-header-item>
    <mm-tabs-header-item>B</mm-tabs-header-item>
    <mm-tabs-header-item>C</mm-tabs-header-item>
</mm-tabs-header>
```

### Attribute

+ class

	To set the style of buttons, could be 'dark', 'circle' or empty.


## mm-tabs-body

### usage

```
<mm-tabs-body motion='scroll-a' style="height:300px; width:400px;">
    <mm-tabs-body-item>You Content A</mm-tabs-body-item>
    <mm-tabs-body-item>You Content B</mm-tabs-body-item>
    <mm-tabs-body-item>You Content C</mm-tabs-body-item>
</mm-tabs-body>
```

### motion

+ undefined

#### usage

<!--#html1#-->
```
<mm-tabs current='0'>
    <mm-tabs-header class='dark'>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
</mm-tabs>
```

+ fade

#### usage

<!--#html2#-->
```
<mm-tabs current='1'>
    <mm-tabs-header>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body motion="fade" style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
</mm-tabs>
```

+ swipe-a

#### usage

<!--#html3#-->
```
<mm-tabs current='1'>
    <mm-tabs-header>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body motion="swipe-a" style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
</mm-tabs>
```

+ swipe-v

#### usage

<!--#html4#-->
```
<mm-tabs current='2'>
    <mm-tabs-header>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body motion="swipe-v" style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
</mm-tabs>
```

+ scroll-a

#### usage

<!--#html5#-->
```
<mm-tabs current='1'>
    <mm-tabs-header>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body motion="scroll-a" style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
</mm-tabs>
```

+ scroll-v

#### usage

<!--#html6#-->
```
<mm-tabs current='1'>
    <mm-tabs-header>
        <mm-tabs-header-item>A</mm-tabs-header-item>
        <mm-tabs-header-item>B</mm-tabs-header-item>
        <mm-tabs-header-item>C</mm-tabs-header-item>
    </mm-tabs-header>
    <mm-tabs-body motion="scroll-v" style="height:300px; width:400px;">
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.pooGjMy.small.408ac9ea-d1a7-4e59-883d-3f7f5e8e5cea.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.WNNPQdB.small.f055475d-6b11-4100-a267-5cb14a62dfa1.png' /></mm-tabs-body-item>
        <mm-tabs-body-item><img style="width: 400px;" src='https://screenshot.codepen.io/3315115.gOOZRrj.small.20bb896d-af73-480d-9bba-e1b78fecf666.png' /></mm-tabs-body-item>
    </mm-tabs-body>
</mm-tabs>
```

### style

In order to get the best transition, you'd better set the width and height for mm-tabs-body via css.
