import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestoreDb } from "../firebase";
import Post from "./Post";

// const posts = [
//   {
//     id: "123",
//     username: "muhammademirsyah",
//     userImg:
//       "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1",
//     img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimgix.bustle.com%2Fuploads%2Fimage%2F2017%2F7%2F10%2F87e178c9-116e-4b66-bcf5-883d99276008-rehost2f20162f92f132fc2b10d21-a9b7-4d35-bb9c-7cf229df049a.jpg%3Fw%3D1200%26h%3D630%26q%3D70%26fit%3Dcrop%26crop%3Dfaces%26fm%3Djpg&f=1&nofb=1",
//     caption: '"Were you loving all the things that you do"',
//   },
//   {
//     id: "124",
//     username: "muhammademirsyah",
//     userImg:
//       "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1",
//     img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.0Fm-DIFkCJpaX7-PbblugAHaDt%26pid%3DApi&f=1",
//     caption: "90s vibes",
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestoreDb, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [firestoreDb]);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
