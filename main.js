$(function() 
{
	
var $about = $('#about');
	$.ajax({
		type:'GET',
		url:'/api/orders',
		success: function(about)
		{
		$.each(JSON.parse(about), function(i,my)
		{
			$about.append('<li> Name: '+ my.name +'</br>Location: '
				+ my.current_location 
				+'</br>Home: '+ my.home+'</li>');
		});
		}
	});

});