import React, {useState} from 'react';
import './App.css';
import data from './data';
import TeamList from './components/TeamList';


import Form from './components/Form';

const roleOptions=["Backend Engineer", "Frontend Engineer", "Designer", "Data Scientist"];

function App() {
   const [teamList, setTeamList] = useState(data);

   function addTeamMember(teamMember) {
      setTeamList([...teamList,teamMember])
   }

   return (
      <div className="App">
         <Form roleOptions={roleOptions} addTeamMember={addTeamMember} />
         <TeamList teamList={teamList} />



      </div>
   );
}

export default App;
