import BudgetCard
from "./BudgetCard";

const BudgetList = ({
  budgets,
  onDelete,
}) => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {budgets.map((budget) => (

        <BudgetCard
          key={budget.id}
          budget={budget}
          onDelete={onDelete}
        />

      ))}

    </div>
  );
};

export default BudgetList;