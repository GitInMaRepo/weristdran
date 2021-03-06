var example = {};

example.appOnReady = function() {
    window.onhashchange = function() {
        example.showView(window.location.hash);
    }
    example.showView(window.location.hash);
}

example.showOption = function(parameter) {
    return $('<div class="option-page">').text('Option #' + parameter + ' coming soon')
}

example.showView = function(hash) {
    var hashParts = hash.split('-');
    var routes = {
        '#option' : example.showOption
    }
    var viewFun = routes[hashParts[0]];
    if(viewFun) {
        return $('.view-container').empty().append(viewFun(hashParts[1]));
    }
}