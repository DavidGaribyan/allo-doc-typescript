import "./balanceHistory.css";

interface BalanceHistoryProps {
  initial: Transaction[];
}
interface Transaction {
  balancePeriud: string;
  balanceTransactionCondition: string;
  balanceTransactionCount: string;
  balanceTransactionDate: string;
  balanceTransactionIcon: string;
}

const BalanceHistory: React.FC<BalanceHistoryProps> = function ({ initial }) {
  const transaction: Transaction[] = initial;

  return (
    <>
      {transaction.map((item, index) => (
        <div className="balanceHistory__item" key={index}>
          <img
            className="balanceHistory__icon"
            src={item.balanceTransactionIcon}
            alt="icon"
          />
          <p className="balanceHistory__date">{item.balanceTransactionDate}</p>
          <div className="balanceHistory__condition">
            <p>{item.balanceTransactionCondition}</p>
          </div>
          <p
            className={
              item.balanceTransactionCount.charAt(0) === "+"
                ? "balanceHistory__count-green"
                : "balanceHistory__count-red"
            }
          >
            {item.balanceTransactionCount}
          </p>
        </div>
      ))}
    </>
  );
};
export default BalanceHistory;
