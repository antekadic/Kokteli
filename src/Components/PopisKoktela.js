import React from'react'


export default function PopisKoktela({name, type}) {


    return (
    <div >
      <ul>
          <li>Ime:{name}, Vrste:{type}</li>
      </ul>
    </div>
  );
}
