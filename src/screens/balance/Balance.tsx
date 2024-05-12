import BalanceHistory from "./balanceHistory/BalanceHistory";
import WrapperMain from "../../components/wrapperMain/WrapperMain";
import Button from "../../components/main/consultations/button/InfoBtn";
import "./balance.css";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Balance() {
  const { t } = useTranslation();
  const [balancePeriud, setBalancePeriud] = useState("1");
  const balanceData: BalanceData[] = t("balancePage.balanceData", {
    returnObjects: true,
  });

  interface BalanceData {
    balancePeriud: string;
    balanceTransactionCondition: string;
    balanceTransactionCount: string;
    balanceTransactionDate: string;
    balanceTransactionIcon: string;
  }

  const filteredData = useMemo(() => {
    switch (balancePeriud) {
      case "1":
        return balanceData.filter((item) => item.balancePeriud === "1");
      case "2":
        return balanceData.filter(
          (item) => item.balancePeriud === "1" || item.balancePeriud === "2"
        );
      case "3":
        return balanceData.filter(
          (item) =>
            item.balancePeriud === "1" ||
            item.balancePeriud === "2" ||
            item.balancePeriud === "3"
        );
      default:
        return [];
    }
  }, [balancePeriud, balanceData]);

  return (
    <>
      <WrapperMain>
        <div>
          <h2 className="balance__heading">
            {t("balancePage.balanceHeading")}
          </h2>
        </div>
        <div className="my__balance-wrapper">
          <p className="balance__amount">{t("balancePage.balanceAmount")}</p>
          <Button
            className="blue balanceBtn"
            btnName={t("balancePage.balanceBtn")}
          ></Button>
        </div>

        <p className="balanceHistory__heading">
          {t("balancePage.balanceHistoryListHeading")}
        </p>

        <ul className="balanceNotes__list">
          <li
            onClick={() => setBalancePeriud("1")}
            className={`balanceNotes__item  ${
              balancePeriud === "1" ? "balanceNotes__item-active" : ""
            }`}
          >
            {t("balancePage.balanceListItem_1")}
          </li>
          <li
            onClick={() => setBalancePeriud("2")}
            className={`balanceNotes__item  ${
              balancePeriud === "2" ? "balanceNotes__item-active" : ""
            }`}
          >
            {t("balancePage.balanceListItem_2")}
          </li>
          <li
            onClick={() => setBalancePeriud("3")}
            className={`balanceNotes__item  ${
              balancePeriud === "3" ? "balanceNotes__item-active" : ""
            }`}
          >
            {t("balancePage.balanceListItem_3")}
          </li>
        </ul>

        <BalanceHistory initial={filteredData} />
      </WrapperMain>
    </>
  );
}
