const SummaryCard = ({
  title,
  amount,
}) => {

  return (

   <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all">

      <h2 className="text-gray-500 text-sm">
        {title}
      </h2>

      <h1 className="text-3xl font-bold mt-2">
        ₹ {amount}
      </h1>

    </div>
  );
};

export default SummaryCard;