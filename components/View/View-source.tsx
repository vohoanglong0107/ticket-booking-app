import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import styles from "./View-source.module.css";
import { itemData } from "@/utils/sample-data";
import Link from "next/link";
import Image from "next/image";

interface Game {
  id: string;
  title: string;
}
interface Props {
  games: Game[];
}

export default function TitlebarImageList({ games }: Props) {
  return (
    <div className={`${styles.div} px-5`}>
      <ImageList cols={3} rowHeight={200} gap={25}>
        {games.map((game, index) => (
          <ImageListItem key={index}>
            <Link href={`/games/${game.id}`}>
              <a>
                <Image
                  src={itemData[index % itemData.length].img}
                  style={{ borderRadius: "33px" }}
                  layout="fill"
                  objectFit="cover"
                />
                <ImageListItemBar
                  title={game.title}
                  sx={{
                    textAlign: "center",
                    borderRadius: "0px 0px 33px 33px",
                  }}
                />
              </a>
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
