import React, { useEffect, useState } from "react";
import axios from "axios";
import AllMathBot from "./components/AllMathBot";
import toast, { Toaster } from "react-hot-toast";
import SingleBot from "./components/SingleBot";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [deleteBlocksOpen, setDeleteBlocksOpen] = useState();
  const [names, setNames] = useState([]);
  const [singleChat, setSingleChat] = useState([]);
  const [singleChatId, setSingleChatId] = useState("");

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark");
  };

  // All Message Block

  const fetchMathBotNames = async () => {
    try {
      const response = await axios.get("http://localhost:4000/mathbot/name");
      setNames(response.data.mathBots);
    } catch (error) {
      toast.error("Error fetching MathBot names:", error);
    }
  };

  const delteByMathBotId = async (_id) => {
    try {
      await axios.get(`http://localhost:4000/mathbot/delete/${_id}`);
      fetchMathBotNames();
      toast.success("MathBot deleted successfully");
    } catch (error) {
      toast.error("Error deleting MathBot:", error);
    }
  };

  const createSingleMathBot = async (name) => {
    try {
      await axios.get(`http://localhost:4000/mathbot/create/${name}`);
      fetchMathBotNames();
    } catch (error) {
      toast.error("Error creating MathBot:", error);
    }
  };

  // MainChatBlock

  const fetchSingleChat = async (id) => {
    try {
      const response = await axios
        .get(
          id
            ? `http://localhost:4000/mathbot/single/${id}`
            : `http://localhost:4000/mathbot/single`
        )
        .then((res) => {
          setSingleChatId(res?.data?.mathBot?._id);
          setSingleChat(res.data.mathBot);
        });
    } catch (error) {
      toast.error("Error fetching SingleChat:", error);
    }
  };

  useEffect(() => {
    fetchMathBotNames();
    fetchSingleChat(singleChatId); // Fetch recent chat initially
  }, []);

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
          <div className="md:hidden max-md:block bg-[pink] z-50">++</div>
          <div className="md:block max-md:hidden">
            <h1 className="font-bold text-3xl my-2">Chats</h1>
            <div className="flex flex-col gap-2 w-[95%]">
              <AllMathBot
                names={names}
                allFn={{
                  createSingleMathBot,
                  delteByMathBotId,
                  fetchSingleChat,
                  singleChatId,
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-11/12  max-md:w-full  bg-white rounded-lg">
          {JSON.stringify(setSingleChatId)}
          <SingleBot
            allFn={{
              singleChat,
              singleChatId,
              fetchSingleChat,
            }}
          />
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
