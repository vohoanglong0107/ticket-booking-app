import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function TitlebarImageList() {
  return (
    <ImageList cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={item.img} />
          <ImageListItemBar
            style={{ textAlign: "center" }}
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://dranahotel.com/upload/anh%20Thohtn/(1)Carousel-001.jpg",
    title: "Ninja Flyer",
    // author: '@bkristastucchio',
    // rows: 2,
    // cols: 2,
    featured: true,
  },
  {
    img: "https://image.thanhnien.vn/1200x630/Uploaded/2022/vocgmvbc/2022_04_20/asia-park-5270.jpg",
    title: "Journey to the West",
    // author: '@rollelflex_graphy726',
  },
  {
    img: "https://znews-photo.zingcdn.me/w660/Uploaded/wyhktpu/2020_07_06/Cong_vien_Chau_A_14_.jpg",
    title: "The Flying Kirins",
    // author: '@helloimnik',
  },
  {
    img: "https://media.thuonghieucongluan.vn/uploads/2021/03/04/1-1614810704.jpg",
    title: "Paradise Fall ",
    // author: '@nolanissac',
    // cols: 2,
  },
  {
    img: "https://www.tuannguyentravel.com/data/images/tro_choi_sky_treasure%281%29.jpg",
    title: "Golden Sky Tower",
    // author: '@hjrc33',
    // cols: 2,
  },
  {
    img: "https://media.baoquangninh.com.vn/dataimages/201701/original/images906734_FestivalCarousel__13_.jpg",
    title: "Queen Cobra",
    // author: '@arwinneil',
    // rows: 2,
    // cols: 2,
    // featured: true,
  },
  {
    img: "https://danangopentour.vn/uploads/10-2019/cac-tro-choi-cam-giac-manh-cong-vien-chau-a.jpg",
    title: "Singapore Sling",
    // author: '@tjdragotta',
  },
  {
    img: "https://congthuong.vn/stores/news_dataimages/minhnguyet/042016/23/14/b34f77597063aca592b555d129f2da03_vong-6.jpg",
    title: "Festival Carousel ",
    // author: '@katie_wasserman',
  },
  {
    img: "http://vyctravel.com/libs/upload/ckfinder/images/Da%20Nang/c%C3%B4ng%20vi%C3%AAn%20Asian%20Park.jpg",
    title: "Happy Choo Choo",
    // author: '@silverdalex',
    // rows: 2,
    // cols: 2,
  },
  {
    img: "http://image.congan.com.vn/thumbnail/CATP-1382-2017-4-5/anh-1_1.jpg",
    title: "Dino Island",
    // author: '@shelleypauls',
  },
  {
    img: "https://danangtransfer.vn/wp-content/uploads/2021/04/ve-Cong-vien-chau-a-asiapark-5-1024x529.jpg",
    title: " Sun Wheel ",
    // author: '@peterlaster',
  },
  {
    img: "https://asiapark.sunworld.vn/wp-content/uploads/2018/09/tro-choi-mao-hiem-sieu-chat-sap-co-mat-o-hoi-an-1.jpg",
    title: "Singapore Sling",
    // author: '@southside_customs',
    // cols: 2,
  },
];
