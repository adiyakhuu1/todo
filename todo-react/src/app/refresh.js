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
  // console.log(tasks);
  // return tasks.map((task, index) => {
  //   if (task.status === "done") {
  //     return (
  //       <div className="task-container" id="task-container-done">
  //         <div className="task" key={index}>
  //           <input type="radio" />
  //           <p className="todo-name">{task.name}</p>
  //           <div className="task-options">
  //             <a href="#">
  //               <img src="./edit.svg" />
  //             </a>
  //             <a href="#">
  //               <img src="./delete.svg" />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else if (task.status === "in-progress") {
  //     return (
  //       <div className="task-container" id="task-container-inprogress">
  //         <div className="task" key={index}>
  //           <input type="radio" />
  //           <p className="todo-name">{task.name}</p>
  //           <div className="task-options">
  //             <a href="#">
  //               <img src="./edit.svg" />
  //             </a>
  //             <a href="#">
  //               <img src="./delete.svg" />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   } else if (task.status === "todo") {
  //     return (
  //       <div className="task-container" id="task-container-todo">
  //         {/* here */}
  //         <div className="task" key={index}>
  //           <input type="radio" />
  //           <p className="todo-name">{task.name}</p>
  //           <div className="task-options">
  //             <a href="#">
  //               <img src="./edit.svg" />
  //             </a>
  //             <a href="#">
  //               <img src="./delete.svg" />
  //             </a>
  //           </div>
  //         </div>
  //         {/* here */}
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="task-container" id="task-container-blocked">
  //         <div className="task" key={index}>
  //           <input type="radio" />
  //           <p className="todo-name">{task.name}</p>
  //           <div className="task-options">
  //             <a href="#">
  //               <img src="./edit.svg" />
  //             </a>
  //             <a href="#">
  //               <img src="./delete.svg" />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // });
};

export { RenderTodo };
