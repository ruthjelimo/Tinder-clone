import Person from '@mui/icons-material/Person';
import React, { useState } from 'react';
import "./Tindercard.css";

function Tindercard() {
    const [people,setpeople] = useState([{

        name:"Ellon musk",
        url:" http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik"
    },
    {

        name:"Jeff bezos",
        url:" http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik"
    }
       
        
    ]);
  return (
    <div className='Tinder-card'>
        {people.map((person) => (
            <h2>{person.name}</h2>
        ))
        }
        <h5> Hello there</h5>




    </div>
  )
}

export default Tindercard