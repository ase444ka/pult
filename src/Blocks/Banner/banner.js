import 'element-closest-polyfill';
import 'element-remove-polyfill';

function killBanner(event) {
    event.target.closest('.banner').remove()
}
document.addEventListener('scroll', () => {
    let banner = document.querySelector('.banner')
    if (!banner || banner.classList.contains('banner-active')) return;
    setTimeout(() => {
        banner.classList.add('banner-active')
        let closeButton = banner.querySelector('.banner__close-button');
        closeButton.addEventListener('click', killBanner)
    }
    , 1500);
})
