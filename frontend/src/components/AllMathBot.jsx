import { useState } from "react";
import { BsThreeDots, BsTrash3 } from "react-icons/bs";

const AllMathBot = ({
  names,
  allFn: { createSingleMathBot, delteByMathBotId },
}) => {
  const [deleteBlockOpen, setdeleteBlockOpen] = useState("");
  const [inputCreate, setInputCreate] = useState("");

  return (
    <div className="flex flex-col gap-2">
      {names.map((name, index) => (
        <div
          key={name._id}
          className="bg-white/50 gap-2 rounded-lg px-3 py-2 cursor-pointer flex justify-between relative"
        >
          <span className="line-clamp-1">{name.name}</span>
          <span className="relative">
            <span
              onClick={() =>
                !deleteBlockOpen.length > 0
                  ? setdeleteBlockOpen(name._id)
                  : setdeleteBlockOpen("")
              }
              className="block p-1 rounded-full hover:bg-white cursor-pointer"
            >
              <BsThreeDots />
            </span>
            {deleteBlockOpen == name._id && (
              <div className="absolute  p-1   bg-white shadow-lg z-10 border left-0 top-[calc(100%+10px)] overflow-hidden">
                <button
                  onClick={() => delteByMathBotId(name._id)}
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
      <form
        className="w-[99%]  flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          createSingleMathBot(inputCreate);
        }}
      >
        <input
          type="text"
          name="create"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your text here..."
          onChange={(e) => setInputCreate(e.target.value)}
          value={inputCreate}
        />

        <button type="submit" className="bg-blue-400 w-full py-2 rounded-lg">
          Create
        </button>
      </form>
    </div>
  );
};

export default AllMathBot;
