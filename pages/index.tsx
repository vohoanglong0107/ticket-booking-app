import TitlebarImageList from "@/components/View/View-source";
import { gql, useQuery } from "@apollo/client";

const queryGames = gql`
  query Games {
    games {
      id
      title: name
    }
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(queryGames);
  if (loading) return <p>loading</p>;

  if (error) {
    console.log(error);
    return <p>error</p>;
  }

  return (
    <div>
      <TitlebarImageList games={data.games} />
    </div>
  );
}
