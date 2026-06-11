import TransactionItem
from "./TransactionItem";

const TransactionList = ({
  transactions,
  onDelete,
}) => {

  return (

    <div className="space-y-4">

      {transactions.map((item) => (

        <TransactionItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />

      ))}

    </div>
  );
};

export default TransactionList;