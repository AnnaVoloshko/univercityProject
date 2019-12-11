$(function () {
	$('[name="cell-color"]').click(function() {
		$('#tableID').removeClass('blue rose green yellow light-blue');
		
		var cls = $('[name="cell-color"]:checked').val();

		$('#tableID').addClass(cls);
	});

	$('[name="cell-font"]').click(function() {
		var font = $('[name="cell-font"]:checked').val();

		$('#tableID').css('font-family', font);
	});
});