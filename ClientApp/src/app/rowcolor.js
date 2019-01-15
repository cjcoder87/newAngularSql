$(document).ready(function () {
    $('.record_table tr').click(function (event) {
        if (event.target.type !== 'radio') {
            $(':radio', this).trigger('click');
        }
    });

    $("input[type='radio']").change(function (e) {
        e.stopPropagation();
        $('.record_table tr').removeClass("highlight_row");        
        if ($(this).is(":checked")) {
            $(this).closest('tr').addClass("highlight_row");
        }     
    });
});