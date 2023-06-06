
document.querySelector('#button').onclick = function(){
    var t = document.querySelector('.tasks').innerHTML += 
    `<div class="task">
          <h2 id='task-title' class='text'>${document.querySelector('#input').value}</h2>
          <button class='finished' id='finished'  onclick='this.parentElement.remove();document.querySelector('#input').value = ""'>completed</button>
        </div>
    `;
};


