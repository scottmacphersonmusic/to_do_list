function newTask(e) {
  e.preventDefault();
  var task_list, new_task, input;
  task_list = document.getElementById('task_list');
  new_task = document.createElement('li');
  input = document.getElementById('add_task').children[0];

  new_task.appendChild(document.createTextNode(input.value));
  task_list.insertBefore(new_task, task_list.childNodes[0]);
  input.value = '';
}

function deleteTask(e) {
  var task_list, target;
  task_list = document.getElementById('task_list');
  target = e.target
  task_list.removeChild(target);
}

function setup() {
  var add_task_form, task_list;
  add_task_form = document.getElementById('add_task');
  task_list = document.getElementById('task_list');

  add_task_form.addEventListener('submit', newTask, false);
  task_list.addEventListener('click', function(e) {
    deleteTask(e);
  }, false);
}

window.addEventListener('DOMContentLoaded', setup, false);
