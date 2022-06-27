$(function() {
	console.log($('#dowload_pel_2022'));
  $('#dowload_pel_2022').bind('click', () => {
		console.log('CLICK');
		gtag('event', 'pdf', { 'name': 'PEL_2022' });
	});
});