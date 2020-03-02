import mframe from 'mframe';
const style = `<style type="text/css">
circle{fill:#7F4FD7;}
</style>`;
const template =`<svg width="200px" height="200px" viewBox="0 0 200 200">
    <g><circle cx="44" cy="100" r='28'/></g>
    <g><circle cx="100" cy="44" r='28'/></g>
    <g><circle cx="156" cy="100" r='28'/></g>
    <g><circle cx="100" cy="156" r='28'/></g>
</svg>`;

const _args = {
    endtime: [0,76,58,41],
    color: [[32,35],[26,50],[35,50],[31,50]],
    scale: [[35,35,80],[35,35,80],[35,60,80],[35,50,80]],
    opacity: {
        0:[25,26,35,45],
        2:[22,23,50,70],
        3:[36,37,45,60]
    }
};

class Spinner extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = style + template;
        this.init();
    }

    get height() {
        return this._height;
    }

    set height(val) {
        this._height = val;
    }

    get width() {
        return this._width;
    }

    set width(val) {
        this._width = val;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch(name) {
            case 'width':
            case 'heigth':
                this.setAttr(name);
                break;
            default:
                break;
        }
    }

    setAttr(name) {
        this.Svg.setAttribute(name, this['_'+name]);
    }

    buildBallArgs (index) {
        let g = this.G[index],
            ball = this.Circle[index],
            arg = _args,
            endtime = arg.endtime,
            color = arg.color[index],
            scale = arg.scale[index],
            opacity = arg.opacity[index],
			ret =[{
                dom : ball, 
                frames: [
                    { attr: { fill: '#875AE0' }, time: 0 },
                    { attr: { fill: '#C7A5FA' }, time: color[0] },
                    { attr: { fill: '#875AE0' }, time: color[1] },
                    { attr: { r: '28.0' }, time: 0 },
                    { attr: { r: '13.0' }, time: scale[0], tween:'easeInOut' },
                    { attr: { r: '13.0' }, time: scale[1] },
                    { attr: { r: '28.0' }, time: scale[2], tween:'easeInOut' }
                ]
            }];

	    if(opacity) {
	    	ret.push({
		    	dom : ball, 
		    	frames: [
		    		{ css: { opacity: '1.0' }, time: opacity[0]},
		    		{ css: { opacity: '0.0' }, time: opacity[1]},
		    		{ css: { opacity: '0.0' }, time: opacity[2]},
		    		{ css: { opacity: '1.0' }, time: opacity[3]}
		    	]
		    });
		}

	    if(index>0) {
	    	ret.push({
		        dom: g,
		        frames: [
                    { attr: { transform: 'rotate(0,100,100)' }, time: 0 },
                    { attr: { transform: 'rotate(-360,100,100)' }, time: endtime[index], tween:'easeInOut' }
                ]
		    });
	    }

		return ret;
    }

    init() {
        this.Svg =this.shadowRoot.querySelector('svg');
        this.G = this.shadowRoot.querySelectorAll('g');
        this.Circle = this.shadowRoot.querySelectorAll('circle');

        console.log(this.Svg, this.G, this.Circle);

        let arg = [{
            dom: this.Svg,
            frames: [
                { css: { transform: 'rotate(0deg)' }, time: 0 },
                { css: { transform: 'rotate(-360px)' }, time: 100}
            ]
        }].concat(this.buildBallArgs(0))
        .concat(this.buildBallArgs(1))
        .concat(this.buildBallArgs(2))
        .concat(this.buildBallArgs(3));

        this.M = mframe(arg);

        console.log(this.hasAttribute('autoplay'));

        if(this.hasAttribute('autoplay')) {
            this.M.repeat(Infinity);
        }

        this.export();
    }

    export () {
        this.play = this.M.play;
        this.stop = this.M.stop;
        this.pause = this.M.pause;
    }
    
}
window.customElements.define('mm-spinner', Spinner);
