init();

function init() {
    addEvent();
    canshu();
}

function addEvent() {
    $('.search-btn').on('click', function() {
        location.href = '../page/detail.html?date=' + date;
    })
};


function canshu() {

}