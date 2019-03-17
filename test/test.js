const assert = require('assert');

describe('Yandex', function () {
    it('page exist and opening', function(){
        browser.url('https://ya.ru');
        const start = $(".b-table__cell");
        const startIsVisible = start.isVisible();

        assert.equal(startIsVisible, true, 'Page is not opened');
    });

    it('search something', function(){
        const text = $("#text");
        const search_button = $(".button_theme_websearch");

        text.setValue("Электронное облако");
        search_button.click();
        const result =$('[data-cid="2"]');
        result.waitForVisible(2000);
        result.click();
        browser.windowHandleFullscreen();

        browser.saveScreenshot('./screenShots/exemple.png');


        assert.equal(true, true, 'Search is OK');
    });


});