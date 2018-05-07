describe('Index view', function () {
    it('shows the landing page', function() {
        example.showView('#landing');
        expect($('.view-container').length).toEqual(1);
    });
});