const assert = require('assert');

describe('Yandex', function () {
    it('page exist and opening', function(){
        browser.url('https://ya.ru');
        const start = $(".b-table__cell");
        const ok = start.isVisible();

        assert.equal(ok, true, 'Page is not opened');
    });


});