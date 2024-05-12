// import "./axiosResponse.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function AxiosResponse() {
//   const [posts, setPosts] = useState([]);
//   const [album, setAlbum] = useState([]);
//   const [imgCheck, setImgCheck] = useState<boolean>(false);
//   const [postCheck, setPostCheck] = useState<boolean>(true);

//   const instance = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com",
//   });

//   useEffect(() => {
//     instance.get("albums").then((resp) => {
//       setPosts(resp.data);
//     });
//   }, []);

//   const userIdHandler = (id) => {
//     instance.get("photos").then((response) => {
//       let albumFilter = response.data.filter((item) => item.albumId === id);
//       setAlbum(albumFilter);
//       setImgCheck(true);
//       setPostCheck(false);
//     });
//   };

//   return (
//     <>
//       <ul className="album__list">
//         {postCheck &&
//           posts.map((post, index) => (
//             <li
//               key={`post` + index}
//               onClick={() => userIdHandler(post.id)}
//               className="album__list-item"
//             >
//               {post.title}
//             </li>
//           ))}
//       </ul>
//       <div className="img__wrap">
//         {imgCheck &&
//           album.map((album, index) => (
//             <img
//               key={`album` + index}
//               src={album.thumbnailUrl}
//               className="img"
//             />
//           ))}
//       </div>
//     </>
//   );
// }
