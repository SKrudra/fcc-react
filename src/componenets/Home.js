import AddTask from './AddTask';
import Tasks from './Tasks';

const Home = ({showAddTask, tasks, addTask, deleteTask, toggerReminder}) => {
  return (
    <>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onAdd={addTask} onDelete={deleteTask} onToggle={toggerReminder} />
      ) : (
        'You are all taken care off'
      )}
    </>
  );
};

export default Home;
