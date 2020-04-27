<!-- 
---
date: 2020/4/27 11:00:00
---
-->
# Usage

[![license](https://img.shields.io/github/license/momentum-design/momentum-ui.svg?color=blueviolet)](https://github.com/momentum-design/momentum-ui/blob/master/charts/LICENSE)

> momentum-ui-motion

## Web Componet

momentum-ui-motion is based on [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components). You can using any API from web component. The easiest way to using momentum-ui-motion, is to write html tag.

<!--@
<iframe height="208" style="width: 100%;" scrolling="no" title="motion_components" src="https://codepen.io/arthusliang/embed/BaoRRxz?height=208&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/arthusliang/pen/BaoRRxz'>motion_components</a> by Arthus
  (<a href='https://codepen.io/arthusliang'>@arthusliang</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
@-->

[Click here to try this demo online](https://codepen.io/arthusliang/pen/BaoRRxz)

#### code

```
<mm-loading-dots id='my_dots' autoplay></mm-loading-dots>
```

### Attribute

All the momentum-ui-motion tags start with 'mm'. And you can config the components with its attribute.

The ```autoplay``` here set the motion to play automatically.

### Javascript

If you get the momentum-ui-motion components via javascript, you can also call its javascript API.

```
var mydots = document.getElementById('my_dots');
mydots.stop();
```

