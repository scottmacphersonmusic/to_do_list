function newTask(e) {
  e.preventDefault();
  var task_list, new_task, input;
  task_list = document.getElementById('task_list');
  new_task = document.createElement('li');
  input = document.getElementById('add_task').children[0];

  new_task.appendChild(document.createTextNode(input.value));
  task_list.appendChild(new_task);
  input.value = '';
}

function setup() {
  var add_task_form = document.getElementById('add_task');
  add_task_form.addEventListener('submit', newTask, false);
}

window.addEventListener('DOMContentLoaded', setup, false);
