import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import styles from "./View-source.module.css";
import { itemData } from "@/utils/sample-data";

interface Game {
  id: string;
  title: string;
}
interface Props {
  games: Game[];
}

export default function TitlebarImageList({ games }: Props) {
  return (
    <div className={styles.div}>
      <ImageList cols={3}>
        {games.map((game, index) => (
          <ImageListItem key={index} style={{ padding: "30px" }}>
            <img
              src={itemData[index % itemData.length].img}
              style={{ borderRadius: "44px 44px 44px 44px" }}
            />
            <ImageListItemBar
              style={{ textAlign: "center", padding: "20px" }}
              title={game.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
