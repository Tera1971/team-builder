import React, { useState } from 'react';
import Form from "./Component/Form";
import MemberInfo from './Component/MemberInfo';

function App() {
  const [member, setMember] = useState([])
  const addnewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMember([...member, newMember]);
  };


  return (
    <div className="App">
      <Form addnewMember = {addnewMember}/>
      <MemberInfo member = {member}/>
    </div>
  );
}

export default App;