import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddTransaction from "./AddTransaction";
import OverviewComponent from "./OverviewComponent";
import TransactionsContainer from "./TransactionsContainer";
import UserTransactionList from "./UserTransactionList";
import AddExpenseForm from "./AddExpenseForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center the content vertically */
  width: 600px;
  max-width: 100%;
  background-color: #fff;
  padding: 50px 20px;
  border: 2px solid #44e610;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px auto; /* Set auto margin to center the container */
  font-family: 'Roboto', sans-serif;
`;


const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #44e610;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const TransactionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
`;

const THeading = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #870925;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const ExpenseBox = styled.div`
  flex: 1;
  border: 2px solid #44e610;
  border-radius: 10px;
  padding: 15px 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  & span {
    font-weight: bold;
    font-size: 24px;
    display: block;
    color: ${(props) => (props.isExpense ? "#ff5555" : "#55cc55")};
  }
`;

const ShareButton = styled.button`
  font-size: 18px;
  padding: 12px 20px;
  background-color: #44e610;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #33a80a;
    transform: scale(1.05);
  }
`;

const GroupSelect = styled.select`
  font-size: 16px;
  padding: 12px;
  border-radius: 5px;
  background-color: #f9f9f9;
  border: 2px solid #44e610;
  margin-right: 10px;
`;


const Tracker = () => {
  const [toggle, setToggle] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [selectedGroup, setSelectedGroup] = useState("default");
  const [groups, setGroups] = useState(["default", "group1", "group2"]);

  const AddTransactions = (payload) => {
    const transactionArray = [...transactions, { ...payload, group: selectedGroup }];
    setTransactions(transactionArray);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const handleShareDetails = () => {
    // Simulate sharing by logging expense details for the selected group to the console
    const groupTransactions = transactions.filter((transaction) => transaction.group === selectedGroup);

    console.log(`Shared Expense Details for Group ${selectedGroup}:`);
    console.log("Total Expense: ₹", expense);
    console.log("Total Income: ₹", income);
    console.log("Transactions:", groupTransactions);

    // You can replace the console.log statements with your actual sharing logic
    // For example, you might use a messaging service, send an email, or store the details in a database
    alert(`Expense details shared for Group ${selectedGroup}!`);
  };

  useEffect(() => {
    const calculateTransactions = () => {
      let exp = 0;
      let inc = 0;

      transactions.forEach((item) => {
        item.transType === "expense"
          ? (exp = exp + item.amount)
          : (inc = inc + item.amount);
      });

      setExpense(exp);
      setIncome(inc);
    };

    calculateTransactions();
  }, [transactions]);

  return (
    <Container>
      <THeading>Write your Expense Here</THeading>  
      <Heading>Expense Tracker</Heading>
      <OverviewComponent
        toggle={toggle}
        setToggle={setToggle}
        expense={expense}
        income={income}
      />

      {toggle && (
        <AddTransaction
          setToggle={setToggle}
          AddTransactions={AddTransactions}
        />
      )}

      <TransactionDetails>
        <ExpenseBox isExpense>
          Expense <span>₹{expense}</span>
        </ExpenseBox>

        <GroupSelect value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
          {groups.map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </GroupSelect>

        <ShareButton onClick={handleShareDetails}>
          Share Expense Details
        </ShareButton>
      </TransactionDetails>

      <UserTransactionList
        transactions={transactions}
        removeTransaction={removeTransaction}
      />

      <TransactionsContainer
        transactions={transactions}
        removeTransaction={removeTransaction}
      />
    </Container>
  );
};

export default Tracker;