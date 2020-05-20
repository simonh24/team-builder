import React from "react";
import styled from "../node_modules/styled-components";

const StyledForm = styled.form`
    text-align: center;
`;

const StyledButton = styled.button`
    border-radius: 3px;
    background-color: #00FA9A;
    color: black;
    border: none;
    margin: 10px 0 0 0;
`;

export default function Form(props) {
    const {values, onInputChange, onSubmit} = props;
    return (
        <StyledForm className="memberForm" onSubmit={onSubmit}>
            <label htmlFor="memberName">Name: </label>
            <input name="memberName" type="text" placeholder="John Smith" value={values.name} onChange={onInputChange}></input> <br></br>
            <label htmlFor="memberEmail">Email: </label>
            <input name="memberEmail" type="text" placeholder="example@email.com" value={values.email} onChange={onInputChange}></input><br></br>
            <label htmlFor="memberRole">Role: </label>
            <select name="memberRole" value={values.role} onChange={onInputChange}><br></br>
                <option value="">Choose one</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Designer">Designer</option>
            </select><br></br>
            <StyledButton>Submit Member</StyledButton>
        </StyledForm>
    )
}