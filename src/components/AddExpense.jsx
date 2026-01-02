import { X } from "lucide-react";

const AddExpense = ({
  setIsModelOpen,
  newExpense,
  setNewExpense,
  handleAddExpense,
  categories,
  isEditing,
  setIsEditing,
  error,
  setError,
}) => {
  return (
    <div className="bg-[#1b1b1b] p-4 sm:p-6 rounded-2xl w-[95%] sm:w-full max-w-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">
          {isEditing !== null ? "Update Expense" : "New Expense"}
        </h1>
        <button className="cursor-pointer">
          <X
            size={20}
            onClick={() => {
              setIsModelOpen(false);
              setIsEditing(null);
              setError("");
              setNewExpense({
                subject: "",
                amount: "",
                category: "",
                description: "",
                date: "",
              });
            }}
          />
        </button>
      </div>
      <div className="mt-4">
        {error && (
          <div className="bg-red-500/10 text-red-400 text-sm px-3 py-2 rounded-md">
            {error}
          </div>
        )}
      </div>
      <div className="mt-5 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] items-center gap-2">
          <label className="text-sm">Subject</label>
          <input
            type="text"
            autoFocus
            required
            value={newExpense.subject}
            onChange={(e) =>
              setNewExpense({ ...newExpense, subject: e.target.value })
            }
            className="bg-[#383838] rounded-md px-3 p-2 outline-none text-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] items-center gap-2">
          <label className="text-sm">Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            value={newExpense.amount}
            onChange={(e) =>
              setNewExpense({ ...newExpense, amount: e.target.value })
            }
            className="bg-[#383838] rounded-md px-3 p-2 outline-none text-sm "
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] items-center gap-2">
          <label className="text-sm">Category</label>
          <select
            value={newExpense.category}
            onChange={(e) =>
              setNewExpense({ ...newExpense, category: e.target.value })
            }
            className="bg-[#383838] rounded-md px-3 p-2 outline-none text-sm"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] items-center gap-2">
          <label className="text-sm">Description</label>
          <textarea
            type="text"
            maxLength={100}
            value={newExpense.description}
            onChange={(e) =>
              setNewExpense({ ...newExpense, description: e.target.value })
            }
            className="bg-[#383838] rounded-md px-3 p-2 outline-none text-sm min-h-[40px] max-h-[120px]"
          />
        </div>
        <p className="text-xs text-gray-400 text-right">
          {newExpense.description.length}/100
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] items-center gap-2">
          <label className="text-sm">Date</label>
          <input
            type="date"
            value={newExpense.date}
            onChange={(e) =>
              setNewExpense({ ...newExpense, date: e.target.value })
            }
            className="bg-[#383838] rounded-md px-3 p-2 outline-none text-sm "
          />
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-3 flex-col sm:flex-row">
        <button
          onClick={() => {
            setIsModelOpen(false);
            setIsEditing(null);
            setError("");
            setNewExpense({
              subject: "",
              amount: "",
              category: "",
              description: "",
              date: "",
            });
          }}
          className="bg-[#00dac6] text-[#030303] px-5 py-1 text-sm rounded-md w-full sm:w-auto"
        >
          Cancel
        </button>
        <button
          onClick={handleAddExpense}
          className="bg-[#28282a] text-[#00dac6] border border-[#333333] px-5 py-1 text-sm rounded-md w-full sm:w-auto"
        >
          {isEditing !== null ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
