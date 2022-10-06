$(document).ready(function (e) {
    $('.btn_modal').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $('.box-modal-load').load("modal.html " + url);
        $('#modal').fadeIn(500);

    });
});
$('#modal, .fechar').click(function (e) {
    if (e.target !== this)
        return;
    $('#modal').fadeOut(500);
});