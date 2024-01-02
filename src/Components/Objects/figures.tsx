import React, { useRef, useState } from 'react';
import { ArtObject } from '../../types';
import { useTypedSelector } from '../../redux/hooks/TypeSelector';
import { useDispatch } from 'react-redux';
import { changePosition, changeSize, deleteObject } from '../../redux/actionCreator';

function FigureBlock(props: {
  figure: ArtObject,
  isDelete: boolean,
  setNone: () => void,
  action: string,
  filter?: string,
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined
}) {
  const state = useTypedSelector(state => state).editor;
  const dispatch = useDispatch();
  const {pos, size, figure, color, id} = props.figure
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
      setPosition({
        x: event.clientX - delta.x,
        y: event.clientY - delta.y,
      });
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
  };
  let figureNow = null
  if (figure === 'circle') {
    figureNow = (
      <circle
        cx={(width / 2)}
        cy={(height / 2)}
        r={(width / 2)}
        fill={color.hex}
      />
    )
  }
  else if (figure === 'triangle') {
    figureNow = (
      <polygon
        points={`0,${height} ${
          (width / 2)
        },${0} ${width},${height}`}
        fill={color.hex}
      />
    )
  }
  else if (figure === 'rectangle') {
    figureNow = (
      <rect
        width={width}
        height={height}
        fill={color.hex}
      />
    )
  }

  return (
    <svg
      onClick={props.onClick}
      style={{
        cursor: "pointer",
        filter: props.filter,
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: width,
        height: height,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {figureNow}
    </svg>
  )
}
export { FigureBlock }