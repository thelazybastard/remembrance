const add_button = document.getElementById("add");
const remove_button = document.getElementById("remove");
const task_list = document.getElementById("tasks");

add_button.addEventListener('click', function() {
  console.log("Button clicked!");

  const modal = document.createElement("div");
  modal.className = "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50";
  
  const modal_content = document.createElement("div");
  modal_content.className = "border border-gray-200 shadow-sm rounded-lg p-8 bg-white w-[500px] space-y-4";
  
  const task_name = document.createElement("input");
  task_name.placeholder = "Enter task name";
  task_name.className = "w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const task_description = document.createElement("input");
  task_description.placeholder = "Enter task details";
  task_description.className = "w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";
  
  const task_end_date = document.createElement("input");
  task_end_date.type = "date";
  task_end_date.className = "w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

  const button_container = document.createElement("div");
  button_container.className = "flex justify-center items-center gap-4 pt-4";
  
  const confirm_button = document.createElement('button');
  confirm_button.textContent = 'Confirm';
  confirm_button.className = "rounded bg-blue-500 text-white px-4 py-2 hover:shadow-lg transition-shadow";
  
  const discard_button = document.createElement('button');
  discard_button.textContent = 'Discard';
  discard_button.className = "rounded bg-red-500 text-white px-4 py-2 hover:shadow-lg transition-shadow";

  modal_content.appendChild(task_name);
  modal_content.appendChild(task_description);
  modal_content.appendChild(task_end_date);
  
  button_container.appendChild(confirm_button);
  button_container.appendChild(discard_button);
  
  modal_content.appendChild(button_container);
  
  modal.appendChild(modal_content);
  
  document.body.appendChild(modal);

  discard_button.addEventListener('click', function() {
    modal.remove();
  });

  confirm_button.addEventListener('click', function() {
    const task_div = document.createElement("div");
    task_div.className = "border border-gray-200 shadow-sm rounded-lg p-4 bg-white";
    task_div.textContent = task_name.value + ': ' + task_description.value + ' (Due: ' + task_end_date.value + ')';
    task_list.appendChild(task_div);
    modal.remove();
  });
});