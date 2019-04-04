const assert = require('assert');
const sel = require('./../helpers/selectors').search;

describe('Yandex', function () {
    it('page exist and opening', function(){
        browser.url('https://ya.ru');
        const startIsVisible = $(sel.searchInput).isVisible();

        assert.equal(startIsVisible, true, 'Page is not opened');
    });

    it('search something', function(){
        $(sel.searchInput).setValue("Электронное облако");
        $(sel.searchButton).click();
        $(sel.searchResult).waitForVisible(2000);
        $(sel.searchResult).click();

        assert.equal(true, true, 'Search is OK');
    });
    it('screen shot', function(){
        browser.windowHandleFullscreen();
        browser.saveScreenshot('./screenShots/exemple.png');

        assert.equal(true, true, 'Search is OK');
    });


});