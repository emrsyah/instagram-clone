function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.detectiveconanworld.com%2Fwiki%2Fimages%2Farchive%2F6%2F60%2F20140714012314!Conan_Edogawa_Profile.jpg&f=1&nofb=1" 
        className="rounded-full border p-[2px] w-16 h-16"
        alt="" />

        <div className="flex-1 mx-4">
            <h2 className="font-semibold">muhammademirsyah</h2>
            <h3 className="text-sm text-gray-400">ʕ •ᴥ•ʔ</h3>
        </div>

        <button className="text-blue-400 text-sm font-semibold">
            Sign out
        </button>

    </div>
  )
}

export default MiniProfile