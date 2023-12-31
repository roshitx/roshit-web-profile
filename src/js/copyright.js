const initCopyrights = () => {
    const copyright = document.querySelector('#copyright-text');
    const year = new Date().getFullYear();
    copyright.innerHTML = `&copy; All Rights Reserved ${year} by `;
}

export default initCopyrights;
