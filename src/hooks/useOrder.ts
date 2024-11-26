import { useState } from "react";
import { TMenuItem, TOrderItem } from "../types";

export const useOrder = () => {
  const [order, setOrder] = useState<TOrderItem[]>([]);
  const [tip, setTip] = useState<number>(0);

  // Add item to order
  const addOrder = (item: TMenuItem) => {
    setOrder([...order, { ...item, quantity: 1 }]);
  };

  // Increase quantity of item in order
  const increaseQuantity = (item: TMenuItem) => {
    const newOrder = order.map((orderItem) => orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem);
    setOrder(newOrder);
  };

  // Delete item from order
  const deleteOrder = (id: TOrderItem['id']) => {
    const newOrder = order.filter((orderItem) => orderItem.id !== id);
    setOrder(newOrder);

    if (newOrder.length === 0) {
      setTip(0);
    }
  };

  // Reset order
  const resetOrder = () => {
    setOrder([]);
    setTip(0);
  };

  // Handle order
  const handleOrder = (item: TMenuItem) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id)!;

    return existingItem
      ? increaseQuantity(item)
      : addOrder(item);
  };

  return {
    order,
    tip,
    setTip,
    handleOrder,
    deleteOrder,
    resetOrder,
  };
};
