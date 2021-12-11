import React from'react';


export default function PopisKoktela({name, type}) {


    return (
    <div >
      <ul>
          <li>Ime:{name}, Vrsta:{type}</li>
      </ul>
    </div>
  );
}
