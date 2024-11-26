import { formatCurrency } from "../helpers";
import { TOrderItem } from "../types";

type OrderTotalProps = {
  order: TOrderItem[];
};

export const OrderTotal = ({ order }: OrderTotalProps) => {
  const total = order.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="space-y-2">
      <h2 className="mb-4 text-2xl font-extrabold">Totales y Propina</h2>

      <p className="font-semibold">Subtotal a pagar: <span className="font-bold">{formatCurrency(total)}</span></p>
      <p className="font-semibold">Propina: <span className="font-bold">{formatCurrency(total * 0.1)}</span></p>
      <p className="font-semibold">Total a pagar: <span className="font-bold">{formatCurrency(total + total * 0.1)}</span></p>
    </div>
  )
};
