import Post from "./Post"

const posts = [
    {
        id: '123',
        username: 'muhammademirsyah',
        userImg : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1",
        caption: "'Were you loving all the things that you do'",
    },
    {
        id: '124',
        username: 'muhammademirsyah',
        userImg : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1",
        img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1",
        caption: "'Were you loving all the things that you do'",
    },
]

function Posts() {
  return (
    <div>
        {posts.map(post=>(
            <Post key={post.id} id={post.id} username={post.name}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption} />
        ))}
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts