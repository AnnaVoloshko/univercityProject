$(function () {
	$('canvas').hide();
	$('[name="chart-radio"]').click(function() {
		$('canvas').hide();
		
		var chartName = $('[name="chart-radio"]:checked').val();

		$('#chart' + chartName).show();
	});
});