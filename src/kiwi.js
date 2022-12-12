import Heading from './components/heading/heading.js';
import KiwiImage from './components/kiwi-image/kiwi-image.js';
import _ from 'lodash' // 70kb library -> use optimization chunk

const heading = new Heading();
heading.render(_.upperFirst('kiwi'));

const kiwi = new KiwiImage();
kiwi.render();

