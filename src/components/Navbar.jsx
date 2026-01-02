const Navbar = ({
  setIsModelOpen,
  categories,
  category,
  setCategory,
  totalAmount,
}) => {
  return (
    <div className="flex justify-between items-center flex-col md:flex-row gap-4 md:gap-0">
      <h1 className="text-xl sm:text-2xl font-bold">Expenses</h1>
      <h1 className="text-sm sm:text-lg font-bold">
        Total Amount: {totalAmount}
      </h1>

      <div className="flex items-center gap-3 sm:gap-5 flex-col sm:flex-row w-full md:w-auto">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#383838] rounded-md px-3 p-2 outline-none text-xs sm:text-sm w-full sm:w-auto"
        >
          <option value="All">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <button
          onClick={() => setIsModelOpen(true)}
          className="bg-[#00dac6] text-black px-3 py-2 text-xs sm:text-sm rounded-md w-full sm:w-auto"
        >
          + New Expense
        </button>
      </div>
    </div>
  );
};

export default Navbar;
