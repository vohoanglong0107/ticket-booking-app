import Link from "next/link";
import Layout from "../components/Layout";
import GameRegisterForm from "@/components/GameRegister";

const CreateGame = () => {
  const onClickEvent = () => {};

  return (
    <section>
      <Link href="/">
        <GameRegisterForm onClick={onClickEvent} />
      </Link>
    </section>
  );
};

export default CreateGame;
