/* 
 * in_browser_test.js
 */

describe('Adds my name', function () {
    before(function () {
       this.$fixture = $('<div id="fixture"></div>');
    });
    
    beforeEach(function () {
        $( '#fixtures' ).empty();
    });

    afterEach(function () {
        $( '#fixtures' ).empty();
    });

    it('Should add my name', function () {
        addsName(this.$fixture, 'Tim');
        chai.expect(this.$fixture.html()).to.equal('Tim');
    });
});

function addsName(el, aname) {
    el.html(aname);
}
