import React, { useRef, useState, useEffect } from "react";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";

const SingleBot = ({
  allFn: { singleChat, singleChatId, fetchSingleChat, delteByMathBotId },
}) => {
  const bottomRef = useRef();
  const [openTrash, setOpenTrash] = useState(false);
  const [inputField, setInputField] = useState("");
  let timeoutId;

  const handleClick = () => {
    setOpenTrash(!openTrash);

    timeoutId = setTimeout(() => {
      setOpenTrash(false);
    }, 3000);
  };

  const createSingleOperation = async ({ id, operation }) => {
    try {
      await axios
        .post(`http://localhost:4000/operation`, {
          id,
          operation,
        })
        .then(async (res) => {
          await fetchSingleChat(singleChatId); // Scroll to bottom after updating chat
          scrollToBottom();
        });
    } catch (error) {
      toast.error(`Must be Arithematic operators +,-,/,*,**`);
    }
  };

  const handleTrashClick = () => {
    setOpenTrash(false);
    clearTimeout(timeoutId);
  };

  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to bottom on component mount
  useEffect(() => {
    scrollToBottom();
  }, [singleChat]);

  return (
    <div className="h-full flex items-end ">
      <div className="h-full w-full ">
        {singleChat.length == 0 ? (
          <div className="flex flex-col h-full justify-center items-center">
            Doesn,t have any chatbot
          </div>
        ) : (
          <div className="flex flex-col h-full ">
            <span className=" sticky top-0 right-0 px-3 w-full py-2 flex  bg-white justify-between items-center border-b-2 border-black/10">
              <span className="flex flex-col ml-14 ">
                <span className="text-lg font-bold  line-clamp-1 max-w-96 pr-3">
                  {singleChat?.name}
                </span>
                <span className="text-sm">
                  {moment(singleChat?.timestamp).fromNow()}
                </span>
              </span>
              <span className="relative">
                <div
                  className="p-2 bg-black/20 rounded-lg"
                  onClick={handleClick}
                >
                  <BsThreeDots />
                </div>
                {openTrash && (
                  <div className="absolute w-64 p-2 bg-white shadow-lg border right-0 top-[calc(100%+10px)] overflow-hidden">
                    <button
                      className="flex p-2 items-center gap-2 hover:bg-red-400 hover:text-white w-full rounded-sm"
                      onClick={() => {
                        delteByMathBotId(singleChat._id);
                        fetchSingleChat();
                      }}
                    >
                      <BsTrash />
                      Delete
                    </button>
                  </div>
                )}
              </span>
            </span>
            <div className="flex flex-col h-full  py-4 px-2 overflow-y-scroll">
              <div>
                <div className="flex flex-col gap-4  h-full  text-sm">
                  {singleChat?.operations?.map((_, index) => (
                    <div key={index} className="flex gap-4 flex-col ">
                      <span className=" ml-auto w-fit flex flex-col items-end">
                        <span className=" px-4  bg-black/20 py-2 break-all ml-10 rounded-s-lg rounded-tr-lg wordwr">
                          {_.operation}
                        </span>
                        <span className="text-[10px] font-semibold ml-auto">
                          {moment(_?.timestamp).fromNow()}
                        </span>
                      </span>
                      <span className="px-4 mr-auto py-2 bg-black/20  w-fit rounded-s-lg rounded-t-lg max-w-[90%]">
                        <span className=" rounded-md line-clamp-2">
                          {_.result}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <span ref={bottomRef} className="bg-[red]"></span>
            </div>

            <form className="flex bg-[pink] rounded-lg m-1 bg-black/10 border-2 focus-within:border-black">
              <input
                type="text"
                name="message"
                className="w-full bg-transparent p-3 outline-none"
                id="message"
                value={inputField}
                onChange={(e) => setInputField(e.target.value)}
              />
              <button
                type="submit"
                className="bg-black text-white  rounded-lg px-5 py-2 m-1"
                onClick={async (e) => {
                  e.preventDefault();
                  await createSingleOperation({
                    id: singleChatId,
                    operation: inputField,
                  });
                  setInputField("");
                }}
              >
                Submitted
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBot;
