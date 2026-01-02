import { Pencil, Trash2 } from "lucide-react";

const ExpenseItem = ({ expense, handleExpenseDelete, handleEditExpense }) => {
  const date = new Date(expense.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  return (
    <tr className="border-t border-gray-700 hover:bg-[#1b1b1b]">
      <td className="px-4 py-3 text-xs sm:text-sm font-medium">
        {expense.subject}
      </td>
      <td className="px-4 py-3 text-xs sm:text-sm font-medium">
        Rs. {expense.amount}
      </td>
      <td className="px-4 py-3 text-xs sm:text-sm font-medium">
        {expense.category}
      </td>
      <td className="px-4 py-3 text-xs sm:text-sm font-medium max-w-[100px] ">
        {expense.description.length > 30 ? (
          <span title={expense.description} className="block truncate">
            {expense.description}
          </span>
        ) : (
          <span>{expense.description}</span>
        )}
      </td>
      <td className="px-4 py-3 text-xs sm:text-sm font-medium">{date}</td>

      <td className="px-4 py-3 text-center">
        <div className="flex justify-center items-center gap-3">
          <button>
            <Pencil
              size={16}
              onClick={() => handleEditExpense(expense)}
              className="text-blue-400"
            />
          </button>
          <button
            onClick={() => handleExpenseDelete(expense.id)}
            className="text-red-400"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseItem;
