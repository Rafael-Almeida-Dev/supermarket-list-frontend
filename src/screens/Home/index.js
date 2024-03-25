import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Button, Input } from "../../components";
import { SAVE_USERNAME_PATH } from "../../services/constants";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onClickContinue = () => {
    if (username.length < 3) {
      alert("Username deve conter mais do que 3 caracters");
      return;
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username);
    navigate("/list");
  };

  return (
    <div className="home-screen-container ">
      <div className="home-screen-content-container">
        <img
          className="shopping-bag-image"
          src="/images/shopping-bag.svg"
          alt="shopping-bag"
        />
        <h1 className="home-screen-title">
          Sua lista de supermercado mais fácil do que nunca
        </h1>
        <h3 className="home-screen-subtitle">
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </h3>
        <h3 className="home-screen-subtitle-description">
          Digite baixo seu usuário para ter acesso a sua lista de compras
        </h3>
        <Input
          onChange={(text) => setUsername(text)}
          value={username}
          label="Username"
          placeholder="Ex:Jhon"
        />
        <div className="home-screen-button-container">
          <Button onClick={onClickContinue}>Continuar</Button>
        </div>
      </div>
    </div>
  );
};
