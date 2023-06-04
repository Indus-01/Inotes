function makeTodo(){
			if (document.querySelector("#t-title").value <= '' & document.querySelector("#t-body").value <= '') {
				alert("Enter title and task !!")
			} else {
				var tasklist = document.getElementById("tasks");
			tasklist.innerHTML += `
				<div class='task' style='display: flex; flex-direction: column;'>
					<h1 class='Note_heading'>${document.querySelector("#t-title").value}</h1>
					<h1 class='Note_body'>${document.querySelector("#t-body").value}</h1>
					<button id='del' onclick='var task = document.querySelector(".task"); task.outerHTML = ""'><i class='fas fa-check'></i></button>
				</div>
			`;
		}
			}
