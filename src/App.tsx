import { MyButton } from "./components/MyButton/MyButton";
import { Profile } from "./components/Profile/Profile.tsx";
import { Product } from "./components/Product/Product.tsx";
import { ProductList } from "./components/ProductList/ProductList.tsx";

function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        Profile("Иван", "Воронин", "/userImg.jpg")
      ) : (
        <div>Авторизуйтесь</div>
      )};
      <ProductList/>
    </>
  );
}

export default App;
