import './style.css';
import projectFactory from './project';

const { projects } = initialData;

let { id } = initialData;

// crating To-do's
const todoFactory = (title, duedate, desc, note, priority, temp = 'Empty') => {
  if (temp === 'Empty') {
    id += 1;
  } else {
    id = temp;
  }
  return {
    id, title, duedate, desc, note, priority,
  };
};

const validateForm = (title, date, priority) => !(title === '' || date === '' || priority === 'Choose...');

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

const addTaskToProject = (task, project) => {
  const currentProject = projects.find((o) => o.name === project);
  currentProject.list.push(task);
  saveData(projects, id);
  displayProjects(projects);
};
