import React from 'react'
import styles from "./Eventlist.module.css"

export default function EventList( props ) {
  return (
    <div>
        {props.events.map((element, index) => (
          <div className={styles.card} key={element.id}>
            <h2><span>{index+1}</span> - {element.title}</h2>
            <p>Due - {element.date}</p>
            <button onClick={() => { props.handleClick(element.id);}}>
              Delete event
            </button>
          </div>
        ))}
    </div>
  )
}
