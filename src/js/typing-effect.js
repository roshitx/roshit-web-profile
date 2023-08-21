import Typed from 'typed.js';

const initTypingEffect = () => {
    const typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,

    });
}

export default initTypingEffect;