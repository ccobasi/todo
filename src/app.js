// eslint-disable-next-line import/no-cycle
import { modifyItem, deleteItem } from './index';

const formatDate = (input) => {
  const options = {
    year: 'numeric', month: 'long', day: 'numeric',
  };

  const date = new Date(input);
  const result = date.toLocaleDateString('en-US', options);
  return result;
};

const displayProjects = (projects) => {
  const projectsMain = document.querySelector('#all-projects-content');
  document.querySelector('#all-projects-content').innerHTML = '';

  projects.forEach((project) => {
    const container = document.createElement('div');
    container.setAttribute('class', ` ${project.name}-project project-box`);
    const heading = document.createElement('h3');
    heading.textContent = project.name;

    const listElement = document.createElement('ul');
    listElement.id = `${project.name}-list`;

    container.append(heading, listElement);
    projectsMain.appendChild(container);

    const listItems = project.list;
    listItems.forEach((item) => {
      const listItem = document.createElement('li');
      const customDate = formatDate(item.duedate);

      const taskTitle = document.createElement('span');
      taskTitle.textContent = item.title;

      const taskDate = document.createElement('span');
      taskDate.textContent = customDate;

      const taskDescription = document.createElement('span');
      taskDescription.textContent = item.description;

      const taskNote = document.createElement('span');
      taskNote.textContent = item.note;

      const taskPriority = document.createElement('span');
      taskPriority.textContent = item.priority;

      listItem.append(taskTitle, taskDate, taskDescription, taskNote, taskPriority);

      const modifyBtn = document.createElement('button');
      const deleteBtn = document.createElement('button');
      modifyBtn.innerHTML = '<i class="fa fa-wrench"></i>';
      modifyBtn.setAttribute('class', ' btn btn-primary');
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.setAttribute('class', 'delete-btn btn btn-danger');
      listItem.setAttribute('class', 'listItem col-md-12');

      modifyBtn.onclick = () => modifyItem(item, project);
      deleteBtn.onclick = () => deleteItem(item, project);

      listItem.append(modifyBtn, deleteBtn);
      listElement.appendChild(listItem);
    });
  });
};

export { displayProjects, formatDate };
