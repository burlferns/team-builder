import React from 'react';
import Member from './Member';

export default function TeamList({teamList}) {
   return (
      <div className="CardContainer">
         {teamList.map(elem =>
            <Member memberData={elem} key={elem.name} />
         )}
      </div>
   );
}
