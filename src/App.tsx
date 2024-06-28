import { MyButton } from "./components/MyButton/MyButton";
import { Profile } from "./components/Profile/Profile.tsx";

function App() {
  const isLoggedIn = true;

  let content;

  return (
    <>
      {isLoggedIn ? (
        Profile("Иван", "Воронин", "/userImg.jpg")
      ) : (
        <div>Авторизуйтесь</div>
      )}
    </>
  );
}

export default App;
