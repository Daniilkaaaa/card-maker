import React, { useRef, useState } from 'react';
import { Picture } from '../../types';

function ImageBlock(props: {
  image: Picture,
  action: string,
  getBlockData: (x_: number, y_: number, id_: number, width: number, height: number) => void;
  //isSelected: boolean,
  filter?: string,

  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) {
  if (props.onClick != undefined) {
    console.log("Вы выбрали картинку");
  }
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
      console.log(1);
      const newWidth = width + event.clientX - prevX.current;
      const newHeight = height + event.clientY - prevY.current;
      setWidth(newWidth);
      setHeight(newHeight);
      prevX.current = event.clientX;
      prevY.current = event.clientY;
    }
    if (!isDragging) return;
    if (props.action === "none") {
      setPosition({
        x: event.clientX - delta.x,
        y: event.clientY - delta.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    props.getBlockData(position.x, position.y, id, width, height);
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