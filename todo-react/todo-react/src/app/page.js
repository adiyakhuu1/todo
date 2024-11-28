"use client";
// import Image from "next/image";
import "./style.css";
import tasks from "./task.json";
import { EditPopup } from "./EditPopup";
import { DeletePopup } from "./DeletePopup";
import { NewPop, newPop } from "./NewTaskPopup";
import { Cards } from "./Cards";
import { useState } from "react";

// import { useState } from "react";

// const [isVisible, IsHidden] = useState(false);

export default function Home() {
  // const newTaskButton = document.getElementById("add-new-button");

  return (
    <div>
      {/* <EditPopup /> */}
      {/* <DeletePopup /> */}
      <Cards />
    </div>
  );
}
