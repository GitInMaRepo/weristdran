describe('The router', function () {
    it('shows the options page', function() {
        example.showView('#option-1');
        expect($('.view-container .option-page').length).toEqual(1);
    });

    it('shows the landing page when no hash is given', function() {
        example.showView('');
        expect($('.view-container .landing-page').length).toEqual(1);
    });
});