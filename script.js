
document.querySelector('#button').onclick = function(){
    var t = document.querySelector('.tasks').innerHTML += 
    `<div class="task">
          <h2 id='task-title' class='text'>${document.querySelector('#input').value}</h2>
          <button class='finished' id='finished'>completed</button>
        </div>
    `;
    document.querySelector('#finished').onclick = function(){
        document.querySelector('.task').classList.add('deleted');
    }
};


