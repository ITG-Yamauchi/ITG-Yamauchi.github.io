$(function(){
	$("#content").append("js test.");
	
	$.ajax({
	url: 'http://www.ekidata.jp/api/p/20.json',
	type:'GET',
	dataType: 'script',
	timeout:1000,
	success: function(data, dataType) {
		alert("ok");
		console.log("ok", xml.data);
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		alert("ng");
		console.log("ng", XMLHttpRequest, textStatus, errorThrown);
	}
});
});
