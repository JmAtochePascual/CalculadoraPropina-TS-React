import { formatCurrency } from "../helpers";
import { TOrderItem } from "../types";

type OrderItemProps = {
  item: TOrderItem;
  deleteOrder: (id: TOrderItem['id']) => void;
};

export const OrderItem = ({ item, deleteOrder }: OrderItemProps) => {
  return (
    <div className="mb-4 flex justify-between items-center border-b border-gray-200 pb-4">

      <div className="flex flex-col gap-1">
        <p className="font-semibold">
          {item.name} - <span className="text-gray-500">{formatCurrency(item.price)}</span>
        </p>

        <p className="font-bold">
          Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
        </p>
      </div>

      <button
        onClick={() => deleteOrder(item.id)}
        className="text-white bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300">
        X
      </button>
    </div>
  )
};

