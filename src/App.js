import {useState} from 'react';

import Header from './componenets/Header';
import Tasks from './componenets/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dr. Appointment',
      day: 'Feb 25 at 2:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Project Meeting',
      day: 'Feb 26 at 1:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Project Design Review',
      day: 'Feb 27 at 11:00am',
      reminder: true,
    },
  ]);

  // Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log('deleted', id);
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'You are all taken care off'}
    </div>
  );
}

export default App;

/*
1. We can only return one html parent element from the function
2. we can return <> empty if we don't want any parent html element

*/
