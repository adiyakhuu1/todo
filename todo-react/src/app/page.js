"use client";
// import Image from "next/image";
import "./style.css";
import tasks from "./tasks.json";
import { EditPopup } from "./EditPopup";
import { DeletePopup } from "./DeletePopup";
import { NewPop, newPop } from "./NewTaskPopup";
import { Cards } from "./Cards";
import { useState } from "react";

// const [isVisible, IsHidden] = useState(false);

export default function Home() {
  // let [index, setIndex] = useState(0);
  // // const newTaskButton = document.getElementById("add-new-button");
  // const addIndex = () => {
  //   setIndex(index + 1);
  //   console.log(index);
  // };
  // const subIndex = () => {
  //   setIndex(index - 1);
  //   console.log(index);
  // };
  return (
    <div>
      <Cards />
    </div>
  );
}
