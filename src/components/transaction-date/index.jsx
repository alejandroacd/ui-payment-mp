import  React  from "react";
import Clock from "../Clock";

export default function TransactionDate() {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(today)

  return (
    <p className="transaction-date">
      {formattedDate} a las <Clock />
    </p>
  )
}
