const TransactionItem = ({
  item,
  onDelete,
}) => {

  return (

    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">

      <div>

        <h3 className="font-bold">
          {item.category}
        </h3>

        <p className="text-gray-500">
          {item.description}
        </p>

        <p className="text-sm">
          {item.date}
        </p>

      </div>


      <div className="flex items-center gap-4">

        <h2
          className={
            item.type === "income"
              ? "text-green-500 font-bold"
              : "text-red-500 font-bold"
          }
        >
          ₹ {item.amount}
        </h2>


        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default TransactionItem;