var example = {};

example.showView = function(hash) {
    var value = $('<div class="option-page">');
    return $('.view-container').empty().append(value);
}