describe('The router', function () {
    it('shows the options page', function() {
        example.showView('#option');
        expect($('.view-container .option-page').length).toEqual(1);
    });
});