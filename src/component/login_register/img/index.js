import Img1 from "./1.svg";
import Img2 from "./2.svg";
import Img3 from "./3.svg";
import Img4 from "./4.svg";

const ListImgLogin = [Img1, Img2, Img3, Img4];
const random =  Math.floor(Math.random() * ListImgLogin.length);

export default ListImgLogin[random];