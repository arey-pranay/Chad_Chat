import React from "react";
import rectangleIcon from "../resources/icons/rectangle.svg";
import { toolTypes } from "../constants/toolType";
import { useDispatch, useSelector } from "react-redux";
import { setToolType } from "./WhiteBoardSlice";
const IconButton = ({ src, type }) => {
  const dispatch = useDispatch();
  const selectedToolType = useSelector((state) => state.whiteboard.tool);
  const handleToolChange = () => {
    dispatch(setToolType(type));
  };

  return (
    <button
      onClick={handleToolChange}
      className={`w-6 h-6 border-md hover:bg-purple-100 hover:scale-110  transition-all 0.7s p-1 ${
        selectedToolType === type ? "bg-purple-300 " : "bg-purple-50"
      }`}
    >
      <img src={src} alt="buttons" />
    </button>
  );
};
const Menu = () => {
  return (
    <div className="relative w-[10vw] translate-x-[25vw] top-2 shadow-purple-300 shadow-lg bg-gray-200 flex justify-between p-2 items-center">
      <IconButton src={rectangleIcon} type={toolTypes} />
    </div>
  );
};

export default Menu;
