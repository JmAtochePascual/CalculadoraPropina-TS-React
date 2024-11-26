import { Header } from "./components/Header"
import { menuItems } from "./data/db"
import { MenuItem } from "./components/MenuItem"
import { useOrder } from "./hooks/useOrder";
import { OrderItem } from "./components/OrderItem";
import { OrderTotal } from "./components/OrderTotal";
import Tip from "./components/Tip";

function App() {
  const { order, handleOrder, deleteOrder, tip, setTip } = useOrder();
  // State derived
  const orderEmpty = order.length === 0;

  return (
    <>
      <Header />

      <main className="w-11/12 max-w-7xl mx-auto pb-12 grid gap-4 md:grid-cols-2 md:gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-center">Menu</h2>

          {
            menuItems.map((item) =>
              <MenuItem
                key={item.id}
                item={item}
                handleOrder={handleOrder}
              />
            )
          }
        </section>

        <section className="border-dashed border-2 border-gray-300 p-4 rounded-md">
          <h2 className="mb-4 text-2xl font-bold text-center">Orden</h2>

          {
            orderEmpty
              ? <p className="text-center text-2xl">La orden está vacía</p>
              : order.map((item) =>
                <OrderItem
                  key={item.id}
                  item={item}
                  deleteOrder={deleteOrder}
                />
              )
          }

          <Tip
            tip={tip}
            setTip={setTip}
          />

          <OrderTotal
            tip={tip}
            order={order}
          />
        </section>
      </main>
    </>
  )
}

export default App
