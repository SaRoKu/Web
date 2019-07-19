$(document).ready(function () {

	$("#random-game").click(function () {

		var juegos = ["<img src=\"https://www.movilzona.es/app/uploads/2016/04/agar-io-b.jpg\" class=\" d-block w-100\" alt=\"..\">",
		"<img\n" +
		"\t\t\t\t\t\t\t\t\t\tsrc=\"https://lh3.googleusercontent.com/Jjm072EaR2y01A-Z19UVR6UqBspEZxWP11sGmFElI9782MebzsOqFKskL00PJ-HpUJ-P\"\n" +
		"\t\t\t\t\t\t\t\t\t\tclass=\" d-block w-100\" alt=\"\">",
		"<img src=\"http://paper-io.com/images/paper-new.png\" class=\"d-block w-100\" alt=\"..\">",
		"<img src=\"https://hole-io.com/images/hole-share.jpg\" class=\"d-block w-100\" alt=\"..\">",
		"<img src=\"http://iogames.space/sites/default/files/diep.jpg\" alt=\"No disponible\" class=\"d-block w-100\">",
		"<img src=\"https://i.ytimg.com/vi/IrmXC7aSUA0/mqdefault.jpg\" alt=\"No disponible\" class=\"d-block w-100\">"]
		$("#random-res").html(juegos[Math.floor(Math.random()*juegos.length)]);
	});
});