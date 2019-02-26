const assert = require('assert');

describe('Yandex', function () {
    it('page exist and opening', function(){
        browser.url('https://ya.ru');
        const start = $(".b-table__cell");
        const ok = start.isVisible();

        assert.equal(ok, true, 'Page is not opened');
    });

    it('search something', function(){
        const text = $("#text");
        const search_button = $(".button_theme_websearch");
        const result = $(".serp-item:nth-child(5).organic__url-text");
        const resultOk = result.isVisible();
    //.serp-item:nth-child(5) .needsclick:nth-child(1)
        text.setValue("Электронное облако");
        search_button.click();
        browser.pause(2000);
      //  browser.waitForVisible(result);
        result.click();
        browser.pause(2000);


        assert.equal(resultOk, true, 'Search is OK');
    });


});