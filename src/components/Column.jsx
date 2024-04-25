/* eslint-disable react/prop-types */
import "./Column.css";
import Task from "./Task";
import { useStore } from "zustand";

export default function Column({ state }){

    const tasks = useStore((store) => store.tasks.filter((task) => task.state ===state));

    return (
    <div className="column">

        <p>{state}</p>
        {tasks.map((task) => (<Task title={task.title} key={task.title}/>))}
        
    </div>);
}