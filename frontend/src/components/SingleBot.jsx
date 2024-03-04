import React, { useState } from "react";
import { BsThreeDots, BsTrash } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";

const SingleBot = ({
  allFn: { singleChat, singleChatId, fetchSingleChat },
}) => {
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
        .then((res) => {
          fetchSingleChat(singleChatId);
        });
    } catch (error) {
      toast.error("Error creating MathBot:", error);
    }
  };

  const handleTrashClick = () => {
    setOpenTrash(false);
    clearTimeout(timeoutId);
  };

  return (
    <div className="h-full  flex items-end">
      <div className="  h-full w-full  ">
        <div className="flex flex-col h-full   ">
          <span className="sticky top-0 right-0 px-3 w-full py-2 flex bg-white justify-between items-center   border-b-2 border-black/10">
            <span>
              <span className="text-lg font-bold">{singleChat?.name}</span>
              <span>{}</span>
            </span>
            <span className="relative">
              <div className="p-2 bg-black/20 rounded-lg" onClick={handleClick}>
                <BsThreeDots />
              </div>
              {openTrash && (
                <div className="absolute w-64 p-2 bg-white shadow-lg border right-0 top-[calc(100%+10px)] overflow-hidden">
                  <button
                    className="flex p-2 items-center gap-2 hover:bg-red-400 hover:text-white w-full rounded-sm"
                    onClick={handleTrashClick}
                  >
                    <BsTrash />
                    Delete
                  </button>
                </div>
              )}
            </span>
          </span>
          <div className="flex flex-col h-full justify-between py-4 px-2 overflow-y-scroll">
            <div className="flex flex-col gap-4">
              {singleChat?.operations?.map((_, index) => (
                <div key={index} className="flex gap-4 flex-col">
                  <span className="px-4 ml-auto py-2 bg-[red] w-fit rounded-s-lg rounded-tr-lg max-w-[90%]">
                    <span className=" rounded-md     line-clamp-2">
                      {_.operation}
                    </span>
                  </span>
                  <span className="px-4 mr-auto py-2 bg-[red] w-fit rounded-s-lg rounded-t-lg max-w-[90%]">
                    <span className=" rounded-md     line-clamp-2">
                      {_.result}
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
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-400  rounded-lg px-5 py-2 m-1"
              onClick={(e) => {
                e.preventDefault();
                createSingleOperation({
                  id: singleChatId,
                  operation: inputField,
                });
              }}
            >
              {" "}
              Submitted
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleBot;