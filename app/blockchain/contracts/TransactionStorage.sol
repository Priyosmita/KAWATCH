// contracts/TransactionStorage.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransactionStorage {
    struct Transaction {
        uint id;
        string prediction;
        string negativeProbability;
        string positiveProbability;
    }

    Transaction[] public transactions;
    uint public nextId = 1;

    function storeTransaction(string memory _prediction, string memory _negativeProbability, string memory _positiveProbability) public {
        transactions.push(Transaction(nextId, _prediction, _negativeProbability, _positiveProbability));
        nextId++;
    }

    function getTransaction(uint _id) public view returns (Transaction memory) {
        for (uint i = 0; i < transactions.length; i++) {
            if (transactions[i].id == _id) {
                return transactions[i];
            }
        }
        revert('Transaction not found');
    }
}
