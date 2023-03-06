import CartContainer from "./CartContainer";
import Navbar from "./Navbar";
import { useCartContext } from "./AppContext";

function App() {
  const { state } = useCartContext();
  return (
    <main>
      {state.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <Navbar />
          <CartContainer />
        </>
      )}
    </main>
  );
}

export default App;
