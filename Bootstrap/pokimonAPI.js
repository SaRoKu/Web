$("document").ready(function () {
	$("#buttonSearch").click(function () {
		$.get("http://40.118.27.196:8080/pokemons",{name:$("#BuscadorDigimons").val()},function (data) {

			//TODO control de undefined
			var types = data[0].types[0].type.name;
			for(var i=1; i<data[0].types.length; i++){

				types+= " & "+ data[0].types[i].type.name;
			}
			$("#outputID").html(data[0].id);
			$("#outputName").html(data[0].name);
			$("#outputType").html(types);
			$("#outputNS").html("<img src=\""+data[0].images[0].front+"\" alt='No se ha cargado la imagen'></img>");
			$("#outputSS").html("<img src=\""+data[0].images[1].front_shiny+"\" alt='No se ha cargado la imagen'></img>");
			var attaccs = data[0].moves.HM[0];
			for(var j=1; i<data[0].moves.HM.length; j++){

				attaccs+= " & "+ data[0].moves.HM[j];
			}
			$("#outputAttacc").html(attaccs);
		},"json");
	});

	//text()?
	$("#buttonAdelante").click(function () {
		$.get("http://40.118.27.196:8080/pokemons",{id:$("#outputID").val()+1},function (data) {
			//TODO control de undefined
			var types = data[0].types[0].type.name;
			for(var i=1; i<data[0].types.length; i++){

				types+= " & "+ data[0].types[i].type.name;
			}
			$("#outputID").html(data[0].id);
			$("#outputName").html(data[0].name);
			$("#outputType").html(types);
			$("#outputNS").html("<img src=\""+data[0].images[0].front+"\" alt='No se ha cargado la imagen'></img>");
			$("#outputSS").html("<img src=\""+data[0].images[1].front_shiny+"\" alt='No se ha cargado la imagen'></img>");
			var attaccs = data[0].moves.HM[0];
			for(var j=1; i<data[0].moves.HM.length; j++){

				attaccs+= " & "+ data[0].moves.HM[j];
			}
			$("#outputAttacc").html(attaccs);
		},"json");
	});

	$("#buttonAtras").click(function () {


	});
});