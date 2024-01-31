import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
`;

const Button = styled.button`
  background-color: #44e610;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddExpenseForm = ({ addExpense }) => {
  const [details, setDetails] = useState("");
  const [amount, setAmount] = useState("");
  const [transType, setTransType] = useState("expense");
  const [group, setGroup] = useState("individual"); // Default to individual

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random().toString(36).substr(2, 9),
      details,
      amount: parseFloat(amount),
      transType,
      group,
    };

    addExpense(newExpense);

    // Reset form fields
    setDetails("");
    setAmount("");
    setTransType("expense");
    setGroup("individual");
  };

  return (
    <FormContainer>
      <h2>Add Expense</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Details:</Label>
          <Input
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label>Amount:</Label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label>Transaction Type:</Label>
          <Select
            value={transType}
            onChange={(e) => setTransType(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Label>Group:</Label>
          <Select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          >
            <option value="individual">Individual</option>
            <option value="group1">Group 1</option>
            <option value="group2">Group 2</option>
          </Select>
        </InputGroup>

        <Button type="submit">Add Expense</Button>
      </Form>
    </FormContainer>
  );
};

export default AddExpenseForm;
