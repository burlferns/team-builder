import React from 'react';

export default function Member({memberData}) {
   return (
      <div className="MemberCard">
         <h1>{`Name: ${memberData.name}`}</h1>
         <p>{`Email: ${memberData.email}`}</p>
         <p>{`Role: ${memberData.role}`}</p>
      </div>
   );
}