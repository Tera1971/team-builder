import React from "react";

 
const MemberInfo = props => {
  return (
    <div className="member-list">
      {props.member.map(member => (
        <div className="list" key = {member.id} >
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberInfo;