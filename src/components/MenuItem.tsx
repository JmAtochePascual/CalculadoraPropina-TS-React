import { TMenuItem } from "../types";
import { formatCurrency } from "../helpers";

type MenuItemProps = {
  item: TMenuItem;
  handleOrder: (item: TMenuItem) => void;
};

export const MenuItem = ({ item, handleOrder }: MenuItemProps) => {
  return (
    <div className="mb-4 pb-4 flex justify-between items-center border-b border-gray-200">
      <p className="font-bold">
        {item.name} <span className="text-gray-500">{formatCurrency(item.price)}</span>
      </p>

      <button
        onClick={() => handleOrder(item)}
        className="text-white bg-teal-500 px-3 py-1 rounded-md font-bold uppercase hover:bg-teal-600 transition-colors duration-300">
        Agregar
      </button>
    </div>
  );
};
