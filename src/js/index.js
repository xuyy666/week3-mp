init();

function init() {
    addEvent();
}

function addEvent() {
    $('.search-btn').on('click', function() {
        location.href = '../page/detail.html';
    })
}