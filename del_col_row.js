$(document).ready(function() {

$('#remcol').click(function() {
    var $tablerow = $('table.table').find('tr');

    $tablerow.each(function(index, value){
        $("table.table tr:eq("+index+") td:eq(-1)").remove();
    });
});

$('#remrow').click(function() {
    $('table.table tr:eq(-1)').remove();
});

}); 