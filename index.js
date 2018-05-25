$(function(){
	// js動くかテスト
	var content = $("#content")
	content.append("js test.");
	
	// ajaxできるかテスト
	$.ajax({
	url: 'https://www.ekidata.jp/api/p/20.json',
	type:'GET',
	dataType: 'script',
	timeout:1000,
	success: function(data, dataType) {
		alert("ok");
		
		var lineData = xml.data["line"];
		console.log("ok", lineData);
		
		for (var i = 0; i < lineData.length; i++) {
			content.append("<div>" + lineData[i]["line_name"] + "</div>")
		}
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		alert("ng");
		console.log("ng", XMLHttpRequest, textStatus, errorThrown);
	}
});
});
