import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({
  expenses,
  handleExpenseDelete,
  setIsModelOpen,
  handleEditExpense,
}) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[800px] border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-[#1b1b1b]">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
              Subject
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
              Category
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
              Description
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
              Date
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-300">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleExpenseDelete={handleExpenseDelete}
              setIsModelOpen={setIsModelOpen}
              handleEditExpense={handleEditExpense}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
