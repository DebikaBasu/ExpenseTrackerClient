import React from "react";
import styled from "styled-components";
import TransactionItem from "./TransactionItem";

const ListContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const EmptyListMessage = styled.div`
  margin-top: 20px;
  color: #777;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyListImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const UserTransactionList = ({ transactions, removeTransaction }) => {
  return (
    <ListContainer>
      <h2>User Transaction List</h2>
      {transactions.length === 0 ? (
        <EmptyListMessage>
          No transactions yet
        </EmptyListMessage>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            removeTransaction={removeTransaction}
          />
        ))
      )}
    </ListContainer>
  );
};

export default UserTransactionList;
