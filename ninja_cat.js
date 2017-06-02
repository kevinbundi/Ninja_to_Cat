$(document).ready(function(){
	$('img').click(function(){
		var ninja = $(this).attr('src')
		$(this).attr('src', $(this).attr('alt-src'))
		$(this).attr('alt-src', ninja)
	})
	$(function(){
		$("#main").sortable()
	})
}) 