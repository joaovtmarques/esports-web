import logoImg from "./assets/logo.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";

import "./styles/main.css";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-gradient bg-clip-text">duo</span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner 
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={5}
        />
        <GameBanner 
          bannerUrl="/game-2.png"
          title="Apex"
          adsCount={5}
        />
        <GameBanner 
          bannerUrl="/game-3.png"
          title="Counter Strike"
          adsCount={5}
        />
        <GameBanner 
          bannerUrl="/game-4.png"
          title="World WarCraft"
          adsCount={5}
        />
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
