import { formatCurrency } from "../helpers";
import { TOrderItem } from "../types";

type OrderTotalProps = {
  order: TOrderItem[];
  tip: number;
};

export const OrderTotal = ({ order, tip }: OrderTotalProps) => {
  const subtotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tipAmount = subtotal * tip;
  const total = subtotal + tipAmount;

  return (
    <div className="space-y-2">
      <h2 className="mb-4 text-2xl font-extrabold">Totales y Propina</h2>

      <p className="font-semibold">Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotal)}</span></p>
      <p className="font-semibold">Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
      <p className="font-semibold">Total a pagar: <span className="font-bold">{formatCurrency(total)}</span></p>
    </div>
  )
};
