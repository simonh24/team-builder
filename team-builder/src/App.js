import React from 'react';
import './App.css';
import {useState} from "react";
import Form from "./Form";
import { v4 as uuid } from 'uuid';
import styled from "../node_modules/styled-components";

const StyledH1 = styled.h1`
  text-align: center;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  width: 30%;
  margin: 1% 35%;
  border: 1px solid black;
`;

function App() {
  const initialMembersList = [];
  const initialMemberValues = {
    memberName: "",
    memberEmail: "",
    memberRole: "",
  }

  const [memberValues, setMemberValues] = useState(initialMemberValues);
  const [members, setMembers] = useState(initialMembersList);

  const onInputChange = evt => {
    const { name } = evt.target
    const { value } = evt.target
    setMemberValues({ ...memberValues, [name]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault();
    if (
      !memberValues.memberName.trim() ||
      !memberValues.memberEmail.trim() ||
      !memberValues.memberRole.trim()
    ) {
      return
    }
    const newMember = { ...memberValues, id: uuid() }
    setMembers([newMember, ...members]);
  }

  return (
    <div className="container">
      <StyledH1>Team Member Builder</StyledH1>
      <Form values={memberValues} onInputChange={onInputChange} onSubmit={onSubmit}/>
    {    
      members.map(el => {
        return (
          <MemberContainer className='memberContainer'>
            <h2>{el.memberName}</h2>
            <p>Email: {el.memberEmail}</p>
            <p>Role: {el.memberRole}</p>
          </MemberContainer>
        )
      })
    }
    </div>
  );
}

export default App;
