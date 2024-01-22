import "./Form.css"
import { useState } from "react";


export default function Form(props) {

     const [title, setTitle] = useState(''); 
     const [date, setDate] = useState('');
     //const [locations, setLocations] = useState('Manchester')

    // --- Second way of taking values using useRef 
    //const title = useRef();
    //const date = useRef();
    // const resetForm = () => {
    //     title.current.value = '';
    //     date.current.value = '';
    // }

    const resetForm = () => {
        setTitle('');
        setDate('');
        //setLocations('Manchester');
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title, // title.current.value <- if we use useRef
            date: date, // date.current.value <- if we use useRef
            //location: locations, 
            id: Math.floor(Math.random() * 10000)
        }
        props.addEvent(event);
        resetForm();
    }

  return (
   <form className="new-event-form" onSubmit={handleSubmit}>
    <label>
        <span>Event Title: </span>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
    </label>

    <label>
        <span>Event Date: </span>
        <input type="date" onChange={(e)=>{setDate(e.target.value)}} value={date} />
    </label>

    
    <button type="submit">Submit</button>
   </form>
  )
}
