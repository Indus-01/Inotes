var dark = false;
		var a = document.querySelector(".form");
		var i1 = document.querySelector("#t-title");
		var i2 = document.querySelector("#t-body");
		function darkLight(){
			if(!dark){
				a.style.background = 'black';
				a.style.color = 'white';
				a.innerHTML += 	`<style>::placeholder{color: white;}.form input{
			font-size: 20px;
			border-radius: 20px;
			width: 40%;
			height: 40px;
			border: 2px solid white;
			background-color: transparent;
			color: white;
		}</style>`;
			} else{
				i1.style.border = '2px solid black';
				i2.style.border = '2px solid black';
				a.style.background = 'white';
				a.style.color = 'black';
				a.innerHTML += 	`<style>::placeholder{color: black;}
				.form input{
			font-size: 20px;
			border-radius: 20px;
			width: 40%;
			height: 40px;
			border: 2px solid black;
			background-color: transparent;
			color: black;
		}</style>`;
			}
			dark = !dark;
		}
