import Kiwi from './test.jpg'
import './kiwi-image.scss'

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'test image';
        img.classList.add('kiwi-image');

        const body = document.querySelector('body');
        body.appendChild('img');
    }
}

export default KiwiImage;