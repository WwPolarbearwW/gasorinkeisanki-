console.log("main.js!!");

/*
// jQuery入門
//	公式サイト: https://jquery.com/
//	チュートリアル: https://snome.jp/programming/jquery1/
//	チートシート: https://web-cheatsheet.com/jquery-to-vanillajs
*/

// Ready
$(document).ready(()=>{
	console.log("Ready!!");
	$("#my_btn").click(()=>{
		const keisan = $("#my_gasorin").val()
		console.log("keisan",keisan);
		const shimasu = parseInt(keisan);// 文字列->数値
		console.log("shimasu",shimasu);
		$("#my_resurt").text(shimasu);

		const soukou = $("#my_soukouY").val()
		console.log("soukou",soukou);
		const kyori = parseInt(soukou);// 文字列->数値
		console.log("kyori",kyori);
		$("#my_soukou").text(kyori);

		const kuruma = $("#my_nenryouZ").val()
		console.log("kuruma",kuruma);
		const nenryou = parseInt(kuruma);// 文字列->数値
		console.log("nenryou",nenryou);
		$("#my_nenryou").text(nenryou);

		const goukei = shimasu * kyori /nenryou
		$("#my_goukei").text(goukei)



		

	});
});

