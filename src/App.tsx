import { Header } from "./components/Header"
import { menuItems } from "./data/db"
import { MenuItem } from "./components/MenuItem"
import { useOrder } from "./hooks/useOrder";

function App() {
  const { handleOrder } = useOrder();

  return (
    <>
      <Header />

      <main className="w-11/12 max-w-7xl mx-auto grid gap-4 md:grid-cols-2">
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

        <section className=""></section>
      </main>
    </>
  )
}

export default App
