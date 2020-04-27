import html from '!!raw-loader!./index.html';
import mframe from 'mframe';

const TIMELINE = {
    endtime: [0, 76, 58, 41],
    color: [[32, 35], [26, 50], [35, 50], [31, 50]],
    scale: [[35, 35, 80], [35, 35, 80], [35, 60, 80], [35, 50, 80]],
    opacity: {
        0: [25, 26, 35, 45],
        2: [22, 23, 50, 70],
        3: [36, 37, 45, 60]
    }
};

class Spinner extends HTMLElement {

    static register () {
        window.customElements.define('mm-spinner', this);
    }

    static get observedAttributes() {
        return ['size', 'colors', 'autoplay'];
    }

    constructor () {
        super();
        this.Colors = [['#875AE0', '#C7A5FA']];
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = html;
        this.init();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        switch (name) {
            case 'size':
                this.setSize(newVal);
                break;
            case 'colors':
                this.setColors(newVal);
                break;
            case 'autoplay':
                break;
            default:
                break;
        }
    }

    setColors(val) {
        if (typeof val === 'string') {
            var groups = val.split('@'),
                arr = [];
            for (var i = 0, l = groups.length; i < l; i++) {
                var item = groups[i].split('|');
                if (item.length > 1) {
                    arr.push(item);
                }
            }
            this.Colors = arr;
            this.initMotion();
        }
    }

    setSize(val) {
        this.Svg.setAttribute('width', val+'px');
        this.Svg.setAttribute('height', val+'px');
    }

    init() {
        this.Svg = this.shadowRoot.querySelector('svg');
        this.G = this.shadowRoot.querySelectorAll('g');
        this.Circle = this.shadowRoot.querySelectorAll('circle');

        if (!this.hasAttribute('colors')) {
            this.initMotion();
        }
    }

    initMotion() {
        if (this.M && this.M.stop) {
            this.M.stop();
        }
        var args = [],
            l = this.Colors.length,
            step = 100;

        args.push({
            dom: this.Svg,
            frames: [
                { time: 0, css: { transform: 'rotate(0deg)' } },
                { time: step * l, css: { transform: 'rotate(-' + l * 360 + '.0deg)' } }
            ]
        });

        args = args.concat(this.buildBallArgs(0, step));
        args = args.concat(this.buildBallArgs(1, step));
        args = args.concat(this.buildBallArgs(2, step));
        args = args.concat(this.buildBallArgs(3, step));

        this.M = mframe(args);

        if (this.hasAttribute('autoplay')) {
            this.M && this.M.repeat(Infinity);
        }

        this.export();
    }

    buildBallArgs(index, step) {
        let i = 0,
            l = this.Colors.length,
            g = this.G[index],
            ball = this.Circle[index],
            timeline = TIMELINE,
            endtime = timeline.endtime,
            color = timeline.color[index],
            scale = timeline.scale[index],
            opacity = timeline.opacity[index],
            base,
            ballFrames = [],
            gFrames = [];

        for (; i < l; i++) {
            base = i * step;
            ballFrames = ballFrames.concat([
                { attr: { fill: this.Colors[i][0] }, time: 0 + base},
                { attr: { fill: this.Colors[i][1] }, time: color[0] + base },
                { attr: { fill: this.Colors[i][0] }, time: color[1] + base },
                { attr: { r: '28.0' }, time: 0 + base},
                { attr: { r: '13.0' }, time: scale[0] + base, tween: 'easeInOut' },
                { attr: { r: '13.0' }, time: scale[1]+ base },
                { attr: { r: '28.0' }, time: scale[2] + base, tween: 'easeInOut' }
            ]);

            if (opacity) {
                ballFrames = ballFrames.concat([
                    { css: { opacity: '1.0' }, time: opacity[0] + base },
                    { css: { opacity: '0.0' }, time: opacity[1] + base },
                    { css: { opacity: '0.0' }, time: opacity[2] + base },
                    { css: { opacity: '1.0' }, time: opacity[3] + base }
                ]);
            }

            if (index > 0) {
                gFrames = gFrames.concat([
                    { attr: { transform: 'rotate(0,100,100)' }, time: 0 + base },
                    { attr: { transform: 'rotate(-360.0,100,100)' }, time: endtime[index] + base, tween: 'easeInOut' },
                    { attr: { transform: 'rotate(-0,100,100)' }, time: endtime[index] + base + 1 }
               ]);
            }
        }

        return [{
            dom: ball,
            frames: ballFrames
        }, {
            dom: g,
            frames: gFrames
        }];
    }

    export() {
        this.play = this.M.play;
        this.stop = this.M.stop;
        this.pause = this.M.pause;
    }

}

export default Spinner;
