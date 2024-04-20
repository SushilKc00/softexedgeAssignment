import { FaHome } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const SideLinks = [
  {
    LinkName: "Home",
    Src: "/",
    Icon: <FaHome size={18} color="#9e9e9e" />,
  },
  {
    LinkName: "Users",
    Src: "/users",
    Icon: <IoPeople size={18} color="#9e9e9e" />,
  },
];

export default SideLinks;
