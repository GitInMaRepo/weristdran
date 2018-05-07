var example = {};

example.showView = function(hash) {
    var value = $('.view-container');
    return $('.view-container').empty().append(value);
}