<!-- 
---
date: 2020/5/06 12:00:00
---
-->
# Tabs

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion


#### 用法

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

你可以在mm-tabs下包裹多个mm-tabs-header和mm-tabs-body。所有个组件会公用一个current值。

## mm-tabs

### 例子

```
<mm-tabs id='myTab' current='1'></mm-tabs>
```

### 特性

+ current

	当前选中的tab。

### 方法

+ select

	设置当前选中的tab。

```
document.getElementById('myTab').select(0);
```


### 属性

+ Events

	注册onSelect事件。

```
document.getElementById('myTab').Events.bind('onSelect', (index) => {} );
```

## mm-tabs-header

### 用法

```
<mm-tabs-header class='dark circle'>
    <mm-tabs-header-item>A</mm-tabs-header-item>
    <mm-tabs-header-item>B</mm-tabs-header-item>
    <mm-tabs-header-item>C</mm-tabs-header-item>
</mm-tabs-header>
```

### 特性

+ class

	设置tab样式，可以是'dark', 'circle' 或者空值。


## mm-tabs-body

### 用法

```
<mm-tabs-body motion='scroll-a' style="height:300px; width:400px;">
    <mm-tabs-body-item>You Content A</mm-tabs-body-item>
    <mm-tabs-body-item>You Content B</mm-tabs-body-item>
    <mm-tabs-body-item>You Content C</mm-tabs-body-item>
</mm-tabs-body>
```

### motion特性

#### undefined

##### 例

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

#### fade

##### 例

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

#### swipe-a

##### 例

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

#### swipe-v

##### 例

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

#### scroll-a

##### 例

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

#### scroll-v

##### 例

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

### 样式

为了实现更好的动画效果，你需要设置mm-tabs-body的宽度和长度。

#### 例

```
<mm-tabs-body style="height:300px;width:400px;"></mm-tabs-body>
```