import React, { useRef, useState } from 'react';
import { Picture } from '../../types';
import { changePosition, changeSize, deleteObject } from '../../redux/actionCreator';
import { useTypedSelector } from '../../redux/hooks/TypeSelector';
import { useDispatch } from 'react-redux';

function ImageBlock(props: {
  image: Picture,
  action: string,
  setNone: () => void,
  filter?: string,

  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) {
  if (props.onClick != undefined) {
    console.log("Вы выбрали картинку");
  }
  const state = useTypedSelector(state => state).editor;
  const dispatch = useDispatch();
  const {pos, size, path, id} = props.image;
  const x = pos.x;
  const y = pos.y;
  const [position, setPosition] = useState({x , y});
  const [isDragging, setIsDragging] = useState(false);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(size.width);
  const [height, setHeight] = useState(size.height);
  const [isResizing, setIsResizing] = useState(false);
  const prevX = useRef(0);
  const prevY = useRef(0);
  const handleMouseDown = (event: React.MouseEvent) => {
    // if (props.isDelete) {
    //   props.deleting(id);
    // }
    if (props.action === "none") {
      setIsDragging(true);
      const xOffset = event.clientX - position.x;
      const yOffset = event.clientY - position.y;
      setDelta({ x: xOffset, y: yOffset });
    }
    if (props.action === "changeSize") {
      prevX.current = event.clientX;
      prevY.current = event.clientY;
      setIsResizing(true);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isResizing) {
      const newWidth = width + event.clientX - prevX.current;
      const newHeight = height + event.clientY - prevY.current;
      setWidth(newWidth);
      setHeight(newHeight);
      prevX.current = event.clientX;
      prevY.current = event.clientY;
    }
    if (!isDragging) return;
    const x = event.clientX - delta.x;
    const y = event.clientY - delta.y;
    if (props.action === "none" && x > 278 && x < (1077 - size.width) && y > 39 && y < (640-size.height)) {
      setPosition({x, y});
    }
  };

  const handleMouseUp = () => {
    if (isResizing) {
      dispatch(changeSize(state, id, width, height));
      setIsResizing(false);
    }
    if (isDragging) {
      dispatch(changePosition(state, id, position.x, position.y));
      setIsDragging(false);
      console.log(state);
    }
    if (props.action === "delete") {
      dispatch(deleteObject(state, id));
      console.log(state);
    }
    // props.getBlockData(position.x, position.y, id, width, height);
  };
  return (
    <div
      onClick={props.onClick}
      style={{
        cursor: "pointer",
        filter: props.filter,
        width: width,
        height: height,
        top: position.y,
        left: position.x,
        position: 'absolute',
        //border: props.isSelected ? '2px solid blue' : 'none',
      }}
    >
      <img
        draggable={'false'}
        src={path}
        alt=""
        style={{
          width: width,
          height: height,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </div>
  )
}
export { ImageBlock }