import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// import required modules
import { EffectCube, Pagination } from "swiper/modules";
const Home = () => {
  const Api = "http://65.108.148.136:8080";
  const ImageApi = "http://65.108.148.136:8080/images/";
  const [data, setData] = useState([]);
  const [addImg, setAddImg] = useState(null);
  const [idx, setIdx] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    setOpen(true);
    setIdx(id);
  };
  const handleClose = () => setOpen(false);
  async function getTodo() {
    try {
      const { data } = await axios.get(`${Api}/ToDo/get-to-dos`);
      if (data.statusCode === 200) {
        setData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function addImage() {
    const Form = new FormData();
    Form.append("ToDoId", idx);
    Form.append("Images", addImg);
    try {
      const { data } = await axios.post(
        `${Api}/ToDo/add-to-do-images`,
        Form,
        "Content-Type:multipart/form-data"
      );
      if (data.statusCode === 200) {
        toast.success(data.data);
        getTodo();
        handleClose();
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <div className="">
        {data.map((e) => {
          return (
            <Card key={e.id} sx={{ maxWidth: 345 }}>
              <CardContent>
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className="mySwiper"
                >
                  {e.images.map((ell) => {
                    return (
                      <SwiperSlide key={ell.id}>
                        <img
                          className="w-[auto] h-[300px] object-cover"
                          src={`${ImageApi}${ell.imageName}`}
                        />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleOpen(e.id)}>Add Image</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <input type="file" onChange={(e) => setAddImg(e.target.files[0])} />
          <button onClick={() => addImage()}>Save</button>
        </Box>
      </Modal>
    </div>
  );
};

export default Home;
