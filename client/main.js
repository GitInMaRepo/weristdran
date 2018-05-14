var example = {};

example.showOption = function() {
    return $('<div class="option-page">')
}

example.showView = function(hash) {
    var routes = {
        '#option-1' : example.showOption
    }
    var value = routes[hash];
    if(value) {
        return $('.view-container').empty().append(value());
    }
}