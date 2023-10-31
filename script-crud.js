const taskListContainer = document.querySelector(".app__section-task-list");

let tarefas = [
  {
    descricao: "Tarefa concluida",
    concluida: true,
  },
  {
    descricao: "Tarefa pendente",
    concluida: false,
  },
];

const taskIconSvg = `<svg class="app_section-task-icon-status" width="24" height="24" viewBox="0 0 24 24"
fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" 
    fill="#FFF" />
<path
    d "M9 16.1719119.5938 5.57812121 6.9843819 18.9844L3.42188 13.4062L4.82812 12L19 16.17192"
    fill="#01080E" 
/>`;

function createTask(tarefa) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svgIcon = document.createElement("svg");
  svgIcon.InnerHTML = taskIconSvg;

  const paragraph = document.createElement("p");
  paragraph.classList.add("app__section-task-list-item-description");

  paragraph.textContent = tarefa.descricao;

  li.appendChild("svgIcon");
  li.appendChild("paragraph");

  return li;
}
