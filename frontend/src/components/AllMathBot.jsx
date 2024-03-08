import { useEffect, useRef, useState } from "react";
import { BsThreeDots, BsTrash3 } from "react-icons/bs";
import toast from "react-hot-toast";

const AllMathBot = ({
  names,
  allFn: {
    createSingleMathBot,
    delteByMathBotId,
    fetchSingleChat,
    singleChatId,
  },
}) => {
  const [deleteBlockOpen, setdeleteBlockOpen] = useState("");
  const [inputCreate, setInputCreate] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  return (
    <div>
      <div className="flex flex-col  max-md:px-10 pr-2  gap-2 py-2   mr-2 max-h-[calc(100vh-200px)] max-md:max-h-[calc(100vh-280px)]  overflow-auto  ">
        {names.map((name, index) => (
          <div
            key={name._id}
            className={`${
              singleChatId == name._id ? `bg-white/50   ` : `bg-white/10`
            }  gap-2 rounded-sm px-3 max-md:h-[100vh-100px] py-2 cursor-pointer border border-white hover:border-black/20 flex justify-between relative`}
            onClick={() => {
              fetchSingleChat(name._id);
            }}
          >
            <span className="line-clamp-1 z-10">{name.name}</span>
            <span className="relative z-30">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  !deleteBlockOpen.length > 0
                    ? setdeleteBlockOpen(name._id)
                    : setdeleteBlockOpen("");
                }}
                className="block p-1 rounded-full hover:bg-white  hover:text-black cursor-pointer"
              >
                <BsThreeDots />
              </span>
              {deleteBlockOpen == name._id && (
                <div className="absolute text-black  p-1 -mr-3  bg-white backdrop-blur-lg  border right-0 top-[calc(100%+10px)] overflow-hidden">
                  <button
                    onClick={() => {
                      delteByMathBotId(name._id);
                      fetchSingleChat();
                    }}
                    className="flex w-32  p-1   items-center gap-2 hover:bg-red-400 hover:text-white  rounded-sm"
                  >
                    <BsTrash3 />
                    Delete
                  </button>
                </div>
              )}
            </span>
          </div>
        ))}
      </div>
      <form
        className="w-[99%] p-3 pr-5  flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setIsDisable(true);
          if (!inputCreate) {
            toast.error("Must has name");
            setIsDisable(false);
            return;
          }
          createSingleMathBot(inputCreate);
          setInputCreate("");
          setIsDisable(false);
        }}
      >
        <input
          type="text"
          name="create"
          className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your text here..."
          onChange={(e) => setInputCreate(e.target.value)}
          value={inputCreate}
        />

        <button
          disabled={isDisable}
          type="submit"
          className="bg-black text-white w-full py-2 rounded-lg"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default AllMathBot;
