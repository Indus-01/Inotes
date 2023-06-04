var dark = false;
		var a = document.querySelector(".form");
		var i1 = document.querySelector("#t-title");
		var i2 = document.querySelector("#t-body");
		function darkLight(){
			if(!dark){
				a.style.background = 'black';
				a.style.color = 'white';
				document.querySelector('#theme-switcher').ckassList.remove('fa fa-moon');
				document.querySelector('#theme-switcher').classList.add('fa fa-sun');
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
				document.querySelector('#theme-switcher').ckassList.remove('fa fa-sun');
				document.querySelector('#theme-switcher').classList.add('fa fa-moon');
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
