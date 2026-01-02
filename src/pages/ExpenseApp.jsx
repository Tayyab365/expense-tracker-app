import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ExpenseList from "../components/ExpenseList";
import AddExpense from "../components/AddExpense";

const categories = [
  "Food",
  "Transport",
  "Bills",
  "Shopping",
  "Health",
  "Entertainment",
  "Education",
  "Groceries",
  "Other",
];

const ExpenseApp = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [newExpense, setNewExpense] = useState({
    subject: "",
    amount: "",
    category: "",
    description: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(null);
  const [category, setCategory] = useState("All");
  const [error, setError] = useState("");

  const handleAddExpense = () => {
    if (
      !newExpense.subject.trim() ||
      !newExpense.amount ||
      !newExpense.category.trim() ||
      !newExpense.description.trim() ||
      !newExpense.date
    ) {
      setError("Please fill all the fields");
      return;
    }
    if (Number(newExpense.amount) <= 0) {
      setError("Amount must be greater than 0");
      return;
    }
    setError("");

    if (isEditing !== null) {
      setExpenses(
        expenses.map((e) =>
          e.id === isEditing ? { ...newExpense, id: isEditing } : e
        )
      );
    } else {
      setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    }
    setIsModelOpen(false);
    setIsEditing(null);
    setNewExpense({
      subject: "",
      amount: "",
      category: "",
      description: "",
      date: "",
    });
  };

  const handleEditExpense = (expense) => {
    setIsModelOpen(true);
    setNewExpense(expense);
    setIsEditing(expense.id);
  };

  const handleExpenseDelete = (id) => {
    const updatedExpenses = expenses.filter((e) => e.id !== id);
    setExpenses(updatedExpenses);
  };

  const filteredExpenses =
    category === "All"
      ? expenses
      : expenses.filter((e) => e.category === category);

  const totalAmount = filteredExpenses.reduce(
    (total, e) => total + Number(e.amount),
    0
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="bg-[#0b0b0b] rounded-xl p-5 sm:p-10 relative">
      <Navbar
        isModelOpen={isModelOpen}
        setIsModelOpen={setIsModelOpen}
        categories={categories}
        category={category}
        setCategory={setCategory}
        totalAmount={totalAmount}
      />
      {filteredExpenses.length === 0 ? (
        <div className="mt-10 text-center text-gray-400">
          <p className="text-md">
            No expenses yet. Click{" "}
            <span className="text-[#00dac6]">+ New Expense</span> to add one.
          </p>
        </div>
      ) : (
        <ExpenseList
          expenses={filteredExpenses}
          handleExpenseDelete={handleExpenseDelete}
          setIsModelOpen={setIsModelOpen}
          handleEditExpense={handleEditExpense}
        />
      )}
      {isModelOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 ">
          <AddExpense
            setIsModelOpen={setIsModelOpen}
            newExpense={newExpense}
            setNewExpense={setNewExpense}
            handleAddExpense={handleAddExpense}
            categories={categories}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            error={error}
            setError={setError}
          />
        </div>
      )}
    </div>
  );
};

export default ExpenseApp;
