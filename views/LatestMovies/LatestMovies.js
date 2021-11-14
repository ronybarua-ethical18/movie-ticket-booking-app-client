import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import Image from "next/image";
import React from "react";
import styles from "./LatestMovies.module.css";
import Link from "next/link";
import moment from "moment";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { useQuery } from "@apollo/client";
import { FETCH_MOVIE_QUERY } from "../../utilities/hooks/GraphQL/FetchMovieData";
import LikeButton from "../../components/LikeButton/LikeButton";

const LatestMovies = () => {
  const { loading, data } = useQuery(FETCH_MOVIE_QUERY);
  console.log(data);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1619 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    laptop: {
      breakpoint: { max: 1619, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const carouselParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlay: true,
    autoPlaySpeed: 2000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    // customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
  };
  return (
    <div style={{ marginTop: 100, maginBottom: 100 }}>
      <h1 className={styles.sectionTitle}>Latest Movies</h1>
      {data?.getMovies && (
        <Carousel {...carouselParams}>
          {data?.getMovies.map((item) => (
            <Card className={styles.cardItem} key={item.id}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    {/* <MoreVertIcon /> */}
                  </IconButton>
                }
                title={item.title}
                // subheader={moment(item.createdAt).fromNow()}
                subheader={<small style={{ color: "gray" }}>an hour ago</small>}
              />
              <img
                src={item.img}
                alt="movieImage"
                style={{ width: "100%", height: "250px", padding: "0px 10px" }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <strong>{item.title}</strong>
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div style={{display: "flex"}}>
                  <LikeButton movie={{id: item.id, likes: item?.likes, likeCount: item.likeCount}} />
                  <IconButton aria-label="share">
                    <ChatBubbleIcon
                      style={{ color: "white", marginRight: 10 }}
                    />
                    <h4 style={{ fontSize: 16, color: "white" }}>{item?.commentCount}</h4>
                  </IconButton>
                </div>
                <div>
                  <Link href={`/singleMovie/${item.id}`}>
                    <button className={styles.playBtn}>Book</button>
                  </Link>
                </div>
              </CardActions>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {/* <ThumbUp  */}
              </div>
            </Card>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default LatestMovies;
