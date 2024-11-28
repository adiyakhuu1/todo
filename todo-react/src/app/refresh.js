// const RenderTasks = tasks.map((task) => {
//   return (
//     <div className="task">
//       <input type="radio" />
//       <p className="todo-name">{task.name}</p>
//       <div className="task-options">
//         <a href="#">
//           <img src="./edit.svg" />
//         </a>
//         <a href="#">
//           <img src="./delete.svg" />
//         </a>
//       </div>
//     </div>
//   );
// });

const RenderTodo = ({ tasks }) => {
  return tasks.map((task) => (
    <div className="task">
      <input type="radio" />
      <p className="todo-name">{task.name}</p>
      <div className="task-options">
        <a href="#">
          <img src="./edit.svg" />
        </a>
        <a href="#">
          <img src="./delete.svg" />
        </a>
      </div>
    </div>
  ));
};

export { RenderTodo };
