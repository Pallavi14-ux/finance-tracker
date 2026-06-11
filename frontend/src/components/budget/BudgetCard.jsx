const BudgetCard = ({
  budget,
  onDelete,
}) => {

  // TEMP SPENDING VALUE
  const spent = budget.amount * 0.6;

  const remaining =
    budget.amount - spent;

  const percentage =
    (spent / budget.amount) * 100;


  return (

    <div className="bg-white p-6 rounded-2xl shadow-md">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold">
          {budget.category}
        </h2>

        <button
          onClick={() =>
            onDelete(budget.id)
          }
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>

      </div>


      <p className="text-gray-500 mb-2">
        Month: {budget.month}
      </p>


      <div className="space-y-2">

        <p>
          Budget:
          <span className="font-bold">
            ₹ {budget.amount}
          </span>
        </p>

        <p>
          Spent:
          <span className="font-bold text-red-500">
            ₹ {spent}
          </span>
        </p>

        <p>
          Remaining:
          <span className="font-bold text-green-500">
            ₹ {remaining}
          </span>
        </p>

      </div>


      {/* PROGRESS BAR */}
      <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        ></div>

      </div>

    </div>
  );
};

export default BudgetCard;