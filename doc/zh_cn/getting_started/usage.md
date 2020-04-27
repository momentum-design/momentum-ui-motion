<!-- 
---
title: 开始使用
date: 2020/4/27 11:00:00
---
-->
# 开始使用

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

## Web Componet

momentum-ui-motion按照[web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components)规范研发。你可以使用web component的API。使用momentum-ui-motion最简单的方法，就是直接书写html标签。

<!--@
<iframe height="208" style="width: 100%;" scrolling="no" title="motion_components" src="https://codepen.io/arthusliang/embed/BaoRRxz?height=208&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/BaoRRxz'>motion_components</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[点击这里体验在线实例](https://codepen.io/arthusliang/pen/BaoRRxz)

#### 代码

```
<mm-loading-dots id='my_dots' autoplay></mm-loading-dots>
```

### 属性

所有的momentum-ui-motion标签以'mm'开头。你可以使用各种标签属性配置momentum-ui-motion的组件

这里```autoplay```设置了自动播放动画。

### Javascript

你可以通过Javascript获取momentum-ui-motion控件，然后进一步地使用各种组件的API。

```
var mydots = document.getElementById('my_dots');
mydots.stop();
```

