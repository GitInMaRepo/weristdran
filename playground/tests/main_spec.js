describe('The router', function () {
    it('shows the options page', function() {
        example.showView('#option-1');
        expect($('.view-container .option-page').length).toEqual(1);
    });

    it('shows the landing page when no hash is given', function() {
        example.showView('');
        expect($('.view-container .landing-page').length).toEqual(1);
    });

    it('passes a parameter to the view', function() {
        spyOn(example, 'showOption');
        example.showView('#option-42');
        expect(example.showOption).toHaveBeenCalledWith('42');
    });

    describe('The option view', function() {
        it('has a variable title', function() {
            var view = example.showOption('1');
            expect(view.text()).toEqual('Option #1 coming soon');
        });
    });

    describe('The view', function() {
        it('invokes the router on load', function() {
            spyOn(example, 'showView');
            example.appOnReady();
            expect(example.showView).toHaveBeenCalledWith(window.location.hash);
        });

        it('invokes the hashchange event', function() {
            example.appOnReady();
            spyOn(example, 'showView');
            $(window).trigger('hashchange')
            expect(example.showView).toHaveBeenCalledWith(window.location.hash);
        });
    });
});