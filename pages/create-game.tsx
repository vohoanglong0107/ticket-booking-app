import Link from "next/link";
import Layout from "../components/Layout";

const CreateGame = () => (
  <>
    <h1>About</h1>
    <p>This is the create game page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
);

export default CreateGame;
