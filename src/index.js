import './style.css';
import projectFactory from './project';
// eslint-disable-next-line import/no-cycle
import { displayProjects } from './app';
import { initialize, saveData } from './storage';

const initialData = initialize([], 0);

const { projects } = initialData;

let { id } = initialData;

// crating To-do's
const todoFactory = (title, duedate, description, note, priority, temp = 'Empty') => {
  if (temp === 'Empty') {
    id += 1;
  } else {
    id = temp;
  }
  return {
    id, title, duedate, description, note, priority,
  };
};

const validateForm = (title, date, priority) => !(title === '' || date === '' || priority === 'Choose...');

const projectNameList = (list) => {
  projects.forEach((project) => list.push(project.name));
  return list;
};

const setAlert = (alert, status) => {
  alert.style.display = 'block';
  if (status === 'success') {
    alert.textContent = 'Task created succesfully!';
    alert.setAttribute('class', 'box alert alert-success');
  } else if (status === 'danger') {
    alert.textContent = 'Title, Date, and Priority are required fields';
    alert.setAttribute('class', 'box alert alert-danger');
  }
};

const addTaskToProject = (task, project) => {
  const currentProject = projects.find((o) => o.name === project);
  currentProject.list.push(task);
  saveData(projects, id);
  displayProjects(projects);
};

// Parses the form input
const forminput = () => {
  const title = document.querySelector('#inputtitle').value.trim();
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value.trim();
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;
  let projectname = document.querySelector('#inputproject').value.trim().toLowerCase();

  const isValidForm = validateForm(title, date, priority);
  const alert = document.querySelector('#alert');

  if (isValidForm) {
    projectname = (projectname === '') ? 'default' : projectname;

    const currentTask = todoFactory(title, date, description, note, priority);
    const list = projectNameList([]);
    if (!list.includes(projectname)) {
      const newProject = projectFactory(projectname);
      projects.push(newProject);
    }
    addTaskToProject(currentTask, projectname);
    setAlert(alert, 'success');
  } else {
    setAlert(alert, 'danger');
  }
};

// Main create task button
const btn = document.querySelector('#tasksubmit');

btn.onclick = forminput;

const deleteItem = (task, project) => {
  const currentProject = projects.find((o) => o.name === project.name);
  currentProject.list = currentProject.list.filter((x) => x.id !== task.id);

  saveData(projects, id);
  displayProjects(projects);
};

const saveModifiedData = (item, project) => {
  const title = document.querySelector('#inputtitle').value.trim();
  const date = document.querySelector('#inputdate').value;
  const description = document.querySelector('#inputdescription').value.trim();
  const note = document.querySelector('#inputnote').value;
  const priority = document.querySelector('#inputpriority').value;
  let projectname = document.querySelector('#inputproject').value.trim().toLowerCase();

  projectname = (projectname === '') ? 'default' : projectname;

  const currentId = item.id;

  const oldProject = projects.find((o) => o.name === project.name);

  const newProject = projects.find((o) => o.name === projectname);

  const oldTask = oldProject.list.find((x) => x.id === currentId);

  const newTask = todoFactory(title, date, description, note, priority, currentId);

  // 1. New project
  // 2. Existing and Same project
  // 3. Existing but different projects

  if (newProject == null) {
    const newProject = projectFactory(projectname);
    newProject.list.push(newTask);
    projects.push(newProject);
    deleteItem(oldTask, oldProject);
  } else if (newProject.name === oldProject.name) {
    newProject.list = newProject.list.map((x) => ((x.id === currentId) ? newTask : x));
  } else {
    newProject.list.push(newTask);
    deleteItem(oldTask, oldProject);
  }
  saveData(projects, id);
  displayProjects(projects);

  return false;
};

const modifyItem = (item, project) => {
  const title = document.querySelector('#inputtitle');
  const date = document.querySelector('#inputdate');
  const description = document.querySelector('#inputdescription');
  const note = document.querySelector('#inputnote');
  const priority = document.querySelector('#inputpriority');
  const projectform = document.querySelector('#inputproject');

  title.value = item.title;
  date.value = item.duedate;
  description.value = item.description;
  note.value = item.note;
  priority.value = item.priority;
  projectform.value = project.name;

  const newBtn = document.createElement('button');
  const div = document.querySelector('#btn-div');
  div.innerHTML = '';
  newBtn.setAttribute('class', 'btn btn-primary');
  newBtn.setAttribute('id', 'tasksubmit');
  newBtn.textContent = 'Modify Task';

  div.append(newBtn);
  newBtn.onclick = () => saveModifiedData(item, project);
};

if (projects.length === 0) {
  const defaultProject = projectFactory('default');

  projects.push(defaultProject);
} else {
  displayProjects(projects);
}

export { modifyItem, deleteItem };