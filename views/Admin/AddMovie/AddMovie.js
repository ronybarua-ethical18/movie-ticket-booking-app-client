import React, { useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import Image from "next/image";
import styles from "./AddMovie.module.css";
import Meta from "../../../components/Meta";
import { Container, Grid } from "@material-ui/core";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UIErrors from "../../../components/UIErrors/UIErrors";
import AdminFormInput from "../../../components/AdminFormInput/AdminFormInput";
import storage from "../../../firebase";
import { ADD_MOVIE_DATA } from "../../../utilities/hooks/GraphQL/MutataionData";
import { useMutation } from "@apollo/client";
import imageOne from "../../../public/assets/member-1.png";
import imageTwo from "../../../public/assets/member-2.png";

const AddMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImage] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [uploadFile, setUploadFile] = useState(0);
  const [errors, setErrors] = useState({});

  console.log(trailer)
  console.log(img)

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item?.file?.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Progress is" + progress + "% done");
        },
        (err) => {
          console.log(err);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploadFile((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: trailer, label: "trailer" },
    ]);
  };

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const [addMovie, { loading }] = useMutation(ADD_MOVIE_DATA, {
    update(_, result) {
      console.log(result);
    },
    onError(err) {
      console.log(JSON.stringify(err, null, 2));
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: movie,
  });

  const [uploadImage, setUploadImage] = useState({
    image: imageOne,
    trailer: imageTwo,
  });

  return (
    <AdminLayout>
      <Container>
        <Meta title="Add Movie" />
        <SectionTitle title="Add Movie" />
        <div className={styles.formHandle}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="Title"
                name="title"
                label="Title"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="Description"
                name="desc"
                label="Description"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="Year"
                name="year"
                label="Year"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="Genre"
                name="genre"
                label="Genre"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="Duration"
                name="duration"
                label="Duration"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="Limit"
                name="limit"
                label="Limit"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <AdminFormInput
                type="text"
                placeholder="isSeries"
                name="isSeries"
                label="isSeries"
                onChange={handleChange}
              />
            </Grid>
            <Grid item md={4}>
              <div className={styles.imageHolder}>
                <Image src={uploadImage.image} className={styles.img} />
              </div>
              <input
                type="file"
                label="Image"
                placeholder="Image"
                className={styles.input}
                bgc="#f2f2f2"
                name="img"
                id="input-file"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div className={styles.fileHandle}>
                <h3 className={styles.title}>Image</h3>
                <label
                  htmlFor="input-file"
                  className={styles.fileLabel}
                  id="file-label"
                >
                  Chosse File
                </label>
              </div>
            </Grid>
            <Grid item md={4}>
              <div className={styles.imageHolder}>
                <Image src={uploadImage.trailer} className={styles.img} />
              </div>

              <input
                type="file"
                label="Trailer"
                placeholder="Trailer"
                className={styles.input}
                bgc="#f2f2f2"
                name="trailer"
                id="input-trailer"
                onChange={(e) => setTrailer(e.target.files[0])}
              />
              <div className={styles.fileHandle}>
                <h3 className={styles.title}>Trailer</h3>
                <label
                  htmlFor="input-trailer"
                  className={styles.fileLabel}
                  id="file-label"
                >
                  Chosse File
                </label>
              </div>
            </Grid>
          </Grid>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {uploadFile === 2 ? (
              <button className={styles.adminButton} onClick={() => addMovie()}>
                create
              </button>
            ) : (
              <button className={styles.adminButton} onClick={handleUpload}>
                Upload
              </button>
            )}
          </div>
        </div>
        <UIErrors errors={errors}/>
      </Container>
    </AdminLayout>
  );
};

export default AddMovie;
