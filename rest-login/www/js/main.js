$(document).ready(function(){
	$("#loginbtn").click(function( event )
	{		
		var usuario = $("#user").val();
		var password = $("#pass").val();

		if(usuario != '' && password != ''){

			$.ajax({
	            type:'POST',
	            url: 'http://localhost:8000/api-token-auth/',
	            data: {'username': usuario,'password': password},
	            dataType: "json",
	            success:function(data){
	            	alert(data.token);
	            	/*
	                $.ajax({
					    type: "POST",
					    data:{'slide':5},
					    url: "http://localhost:8000/api/text/",
					    headers: { 'Authorization': 'Token '+data.token },
					    dataType: "json",
					    sucess: function() { alert("Success!"); },
					    error: function(){ alert("Error!"); },
					});
					*/
	            },
	            error:function(data){
	            	$("#resul").html("login error");
	            }
	        });
		}
	})
})