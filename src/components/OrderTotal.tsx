import { formatCurrency } from "../helpers";
import { TOrderItem } from "../types";
import { useMemo } from 'react';

type OrderTotalProps = {
  order: TOrderItem[];
  tip: number;
  resetOrder: () => void;
};

export const OrderTotal = ({ order, tip, resetOrder }: OrderTotalProps) => {
  const subtotal = useMemo(() => order.reduce((acc, item) => acc + item.price * item.quantity, 0), [order]);
  const tipAmount = subtotal * tip;
  const total = subtotal + tipAmount;

  return (
    <div className="space-y-2">
      <h2 className="mb-4 text-2xl font-extrabold">Totales y Propina</h2>

      <p className="font-semibold">Subtotal a pagar: <span className="font-bold">{formatCurrency(subtotal)}</span></p>
      <p className="font-semibold">Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
      <p className="font-semibold">Total a pagar: <span className="font-bold">{formatCurrency(total)}</span></p>

      <button
        onClick={resetOrder}
        disabled={tip === 0}
        className="w-full p-2 block text-center rounded-md bg-gray-800 text-white hover:bg-gray-900 transition-colors duration-300 disabled:opacity-50">
        Resetear Orden
      </button>
    </div>
  )
};
