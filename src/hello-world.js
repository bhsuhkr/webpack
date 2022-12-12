import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash' // 70kb library -> use optimization chunk
// import addImage from './add-image.js';

const heading = new Heading();
heading.render(_.upperFirst('hello world'));

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();
// addImage();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
}
if (process.env.NODE_ENV === 'development') {
    console.log('Development mode');
}