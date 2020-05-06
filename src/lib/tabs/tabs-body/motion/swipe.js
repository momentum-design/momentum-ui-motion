import Base from './base';

class Swipe extends Base {

    constructor (con, shim, items, config) {
        super();
        super.init(con, shim, items, config);
        this.initDom();
    }

    initDom() {
        this.switchClass('swipe');
        var per = 0.2,
            leave_t0 = 0,
            leave_t1 = 20,
            enter_t0 = 0,
            enter_t1 = 24;
        if(this.Config.direction === 'a') {
            var w  = this.Con.clientWidth>>0,
                plus = w * per >> 0;
            this._Persents = {
                leave: {
                    min: [
                        { time: leave_t0, css: { opacity: '1.0', left: '0.0px' } },
                        { time: leave_t1, css: { opacity: '0.0', left: -plus + '.0px', display: 'none' } , tween:'easeOut' }
                    ],
                    max: [
                        { time: leave_t0, css: { opacity: '1.0', left: '0.0px' } },
                        { time: leave_t1, css: { opacity: '0.0', left: (w + plus) + '.0px', display: 'none' } , tween:'easeOut' }
                    ]
                },
                enter: {
                    min: [
                        { time: enter_t0, css: { opacity: '0.0', left: -w + '.0px', display: 'block' } },
                        { time: enter_t1, css: { opacity: '1.0', left: '0.0px' } , tween:'easeInOut' }
                    ],
                    max: [
                        { time: enter_t0, css: { opacity: '0.0', left: w + '.0px', display: 'block' } },
                        { time: enter_t1, css: { opacity: '1.0', left: '0.0px' } , tween:'easeInOut' }
                    ]
                }
            }
        } else {
            var h  = this.Con.clientHeight>>0,
                plus = h * per >> 0;
            this._Persents = {
                leave: {
                    min: [
                        { time: leave_t0, css: { opacity: '1.0', top: '0.0px' } },
                        { time: leave_t1, css: { opacity: '0.0', top: -plus + '.0px', display: 'none' } }
                    ],
                    max: [
                        { time: leave_t0, css: { opacity: '1.0', top: '0.0px' } },
                        { time: leave_t1, css: { opacity: '0.0', top: (h + plus) + '.0px', display: 'none' } }
                    ]
                },
                enter: {
                    min: [
                        { time: enter_t0, css: { opacity: '0.0', top: -h + '.0px', display: 'block' } },
                        { time: enter_t1, css: { opacity: '1.0', top: '0.0px' } }
                    ],
                    max: [
                        { time: enter_t0, css: { opacity: '0.0', top: h + '.0px', display: 'block' } },
                        { time: enter_t1, css: { opacity: '1.0', top: '0.0px' } }
                    ]
                }
            }
        }

    }

    getMotion(from, to) {
        var key = from + '_' + to,
            fromDom = this.Items[from],
            toDom = this.Items[to];

        if (this.MotionCache[key] === undefined) {
            var fromFrames,
                toFrames
            if(from > to) {
                fromFrames = this._Persents.leave.max;
                toFrames = this._Persents.enter.min;
            } else {
                fromFrames = this._Persents.leave.min;
                toFrames = this._Persents.enter.max;
            }
            this.MotionCache[key] = mframe([{
                dom: fromDom,
                frames: fromFrames
            }, {
                dom: toDom,
                frames: toFrames
            }], {
                end: () => {
                    this.end();
                }
            });
        }
        return {
            M: this.MotionCache[key],
            from: fromDom,
            to: toDom
        };
    }

}

export default Swipe;
