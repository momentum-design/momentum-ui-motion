import './styles.scss';
import momentum_ui_motion from '../lib/index';
import html from '!!raw-loader!../lib/tabs/examples/default.html'; 

window.onload = function() {
    document.getElementById('container').innerHTML = html;
};
