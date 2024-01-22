import "./App.css";
import { useState } from "react";
import React from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import Form from "./components/Form"; 

function App() {
  //First state
  // const [name, setName] = useState("mario");
  // const handleClick = () => {
  //   setName("luigi");
  // };

  // //Second state
  // const [age, setAge] = useState(12);
  // const changeAge = () => {
  //   setAge(age + 1);
  // };

  //Third state
  const [showModal, setshowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event)=>{
    setEvents((prevEvents)=>{
      return [...prevEvents, event];
    })
    setshowModal(false);
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  // const handleClose = ()=>{
  //   setshowModal(false);
  // }

  console.log(showEvents);

  const mario_subtitle = "Your upcoming events";

  return (
    <div className="App">
      
      <Title title="Events in your location" subtitle={mario_subtitle} />
      <button className="modal-button" onClick={()=>{setshowModal(true)}}>Add New Event</button>
      {/* List elements  */}
      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            Hide Events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            Show Events
          </button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
        {/* <Modal>
            <h2>10% off Coupon code</h2>
            <p>Use the code netninja10 at the checkout</p>
        </Modal> */}

        {showModal && <Modal> 
            <Form addEvent={addEvent}/>
        </Modal>}

    </div>
  );
}

export default App;
