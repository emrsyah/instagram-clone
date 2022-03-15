import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { CameraIcon } from "@heroicons/react/outline";
import { useState, useRef } from "react";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);

  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  //ini dipake nanti buat reference ke input file dari ikon kamera
  const filePickerRef = useRef(null)
  const captionRef = useRef(null)

  const uploadPost = async () =>{
    if(loading) return;
    setLoading(true)

    

  }

  const addImageToPost = (ev) =>{
    const reader = new FileReader();
    if(ev.target.files[0]){
        reader.readAsDataURL(ev.target.files[0]);
    }
    reader.onload = (readerEvent) =>{
        setSelectedFile(readerEvent.target.result);
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          {/* Transition child ini ngebungkus elemen yg mau di transisiin. karena di modal ada 2 yaitu modalnya dan juga bg hitamnya maka ada 2*/}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Dialog overlay mah keknya buat bg item dibelakangnya tea */}
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* Pake span buat trik centering modal element */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale:100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>

                {/* Ini if check buat render preview img kalo misalnya udh ada file yg dipilih, dan akan nge render input berupa ikon kamera misalnya belum */}
                {selectedFile ?(
                    <img src={selectedFile} onClick={()=> setSelectedFile(null)} alt=""
                    className="w-full object-contain cursor-pointer" />
                ):(
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                onClick={()=>filePickerRef.current.click()}>
                  <CameraIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>

                ) }


                {/* Kata-kata dan input file + caption */}
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900 text-center"
                    >
                      Upload a photo
                    </Dialog.Title>
                  </div>
                  <div>
                    {/* ini kita hidden, jadinya ini cuma buat di referensi ama icon kamera diatas, jadi setelah kamera atas di klik dia bakal trigger input ini.
                    tujuannya ya biar inputan gambarnya gak jelek kek input file biasa */}
                    <input
                      type="file"
                      name=""
                      id=""
                      ref={filePickerRef}
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      ref={captionRef}
                      className="border-none focus:ring-0 w-full text-center"
                      placeholder="Enter your caption..."
                    />
                  </div>
                </div>

                {/* Button */}
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    //   disabled={!selectedFile}
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4
                      py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none
                      focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed
                      hover:disabled:bg-gray-300"
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
