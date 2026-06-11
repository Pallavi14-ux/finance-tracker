const RecentTransactions = ({
  transactions,
}) => {

  return (

    <div className="bg-white shadow-md rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-4">
        Recent Transactions
      </h2>

      <div className="space-y-4">

        {transactions.map((item) => (

          <div
            key={item.id}
            className="flex justify-between border-b pb-2"
          >

            <div>

              <h3 className="font-semibold">
                {item.category}
              </h3>

              <p className="text-sm text-gray-500">
                {item.description}
              </p>

            </div>

            <div>

              <p
                className={
                  item.type === "income"
                    ? "text-green-500 font-bold"
                    : "text-red-500 font-bold"
                }
              >
                ₹ {item.amount}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentTransactions;