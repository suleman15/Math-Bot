import { useState } from "react";
import { BsThreeDots, BsTrash } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [deleteBlocksOpen, setDeleteBlocksOpen] = useState(
    Array(3).fill(false)
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  const handleDeleteClick = (index) => {
    setDeleteBlocksOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      updatedOpen[index] = !updatedOpen[index];
      return updatedOpen;
    });
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } flex justify-center items-center h-screen max-w-6xl mx-auto  `}
    >
      <img
        src="./bg.jpg"
        alt="jpg"
        className="absolute -z-20 left-0 bottom-0 w-full h-screen"
      />
      <div
        className={`w-[calc(100%-15px)] h-[calc(100vh-15px)] flex backdrop-blur-lg border-2 p-2  border-white rounded-lg   shadow-lg `}
      >
        <div className="w-3/12 max-md:absolute  ">
          <div className="md:hidden max-md:block">++</div>
          <div className="md:block max-md:hidden">
            <h1 className="font-bold text-3xl my-2">Chats</h1>
            <div className="flex flex-col gap-2 w-[95%]">
              {Array(3)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white/50 rounded-lg px-3 py-2 cursor-pointer flex justify-between "
                    onClick={() => handleDeleteClick(index)}
                  >
                    <span>Message</span>
                    <span className="relative">
                      <BsThreeDots />
                      <div
                        className={`absolute w-64 p-2 bg-white shadow-lg z-10 border left-0 top-[calc(100%+10px)] overflow-hidden ${
                          deleteBlocksOpen[index] ? "flex" : "hidden"
                        }`}
                      >
                        <button className="flex p-2 items-center gap-2 hover:bg-red-400 hover:text-white w-full rounded-sm">
                          <BsTrash />
                          Delete
                        </button>
                      </div>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-11/12  max-md:w-full  bg-white rounded-lg">
          <div className="h-full  flex items-end">
            <div className="  h-full w-full  ">
              <div className="flex flex-col h-full   ">
                <span className="sticky top-0 right-0 px-3 w-full py-2 flex bg-white justify-between items-center   border-b-2 border-black/10">
                  <span>ChatName</span>
                  <span className="relative p-2 bg-black/20 rounded-lg">
                    <BsThreeDots />
                    <div className="absolute w-64 p-2 bg-white shadow-lg border right-0 top-[calc(100%+10px)] overflow-hidden">
                      <button className="flex p-2 items-center gap-2 hover:bg-red-400 hover:text-white w-full rounded-sm">
                        <BsTrash />
                        Delete
                      </button>
                    </div>
                  </span>
                </span>
                <div className="flex flex-col h-full justify-between py-4 px-2 overflow-y-scroll">
                  <div className="flex flex-col gap-4">
                    {Array(10)
                      .fill()
                      .map((_, index) => (
                        <div key={index} className="flex gap-4 flex-col">
                          <span className="px-4 ml-auto py-2 bg-[red] w-fit rounded-s-lg rounded-tr-lg max-w-[90%]">
                            <span className=" rounded-md     line-clamp-2">
                              Lorem ipsum dolor sit ametldfjaskdfjaksdjafklsj
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quidem, aliquam pariatur quasi, consequuntur
                              molestias repellendus ratione officia fugiat
                              incidunt quia dolore error hic. Iure nulla eius
                              dolor dolore, eligendi omnis natus et ea iusto
                              voluptatum commodi mollitia atque debitis pariatur
                              totam vero. Ipsa, voluptates dolorum! Doloribus
                              officiis amet expedita magni?
                            </span>
                          </span>
                          <span className="px-4 mr-auto py-2 bg-[red] w-fit rounded-s-lg rounded-t-lg max-w-[90%]">
                            <span className=" rounded-md     line-clamp-2">
                              Lorem ipsum dolor sit ametldfjaskdfjaksdjafklsj
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quidem, aliquam pariatur quasi, consequuntur
                              molestias repellendus ratione officia fugiat
                              incidunt quia dolore error hic. Iure nulla eius
                              dolor dolore, eligendi omnis natus et ea iusto
                              voluptatum commodi mollitia atque debitis pariatur
                              totam vero. Ipsa, voluptates dolorum! Doloribus
                              officiis amet expedita magni?
                            </span>
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <span></span>
                <form className=" flex bg-[pink] rounded-lg m-1 bg-black/10 border-2 focus-within:border-black">
                  <input
                    type="text"
                    name="message"
                    className="w-full bg-transparent p-3 outline-none"
                    id="message"
                  />
                  <button
                    type="submit"
                    className="bg-red-400  rounded-lg px-5 py-2 m-1"
                  >
                    {" "}
                    Submitted
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
