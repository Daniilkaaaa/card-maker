import React, { createContext, useEffect, useRef, useState } from 'react';
import { Editor, TextBox } from '../../types';
import { useTypedSelector } from '../../redux/hooks/TypeSelector';
import { useDispatch } from 'react-redux';
import {
  changeColorText,
  changeFontFamily, changeFontSize,
  changeFontWeight,
  changePosition,
  changeUnderline, deleteObject,
  editText
} from '../../redux/actionCreator';


function TextBlock(props: {
  key: number,
  text: TextBox,
  textProperty: string,
  setNone: () => void,
  action: string,
  // getTextData: (id: number, fontFamily: string) => void,
  // getBlockData: (x_: number, y_: number, id_: number, width: number, height: number) => void,
  widthScream: number,
  heightScream: number,
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}) {
  const state = useTypedSelector(state => state).editor;
  const dispatch = useDispatch();
  const {pos, size, id} = props.text;
  const [value, setValue] = useState(props.text.value);
  const [filter, setFilter] = useState(props.text.filter)
  const [color, setColor] = useState(props.text.color);
  const [fontFamily, setFontFamily] = useState(props.text.fontFamily);
  const [fontSize, setFontSize] = useState(props.text.fontSize);
  const [fontWeight, setFontWeight] = useState(props.text.fontWeight);
  const [italic, setItalic] = useState(props.text.italic);
  const [underline, setUnderline] = useState(props.text.underline)
  const x = pos.x;
  const y = pos.y;
  const [position, setPosition] = useState({x , y});
  const [isDragging, setIsDragging] = useState(false);
  const [delta, setDelta] = useState({ x: 0, y: 0 });
  const [width, setWidth] = useState(size.width);
  const [height, setHeight] = useState(size.height);
  const screenWidth = window.screen.width
  const screenHeight = window.screen.height
  const handleMouseDown = (event: React.MouseEvent) => {
    if (props.action === "changeFontFamily") {
       setFontFamily(props.textProperty);
    }
    if (props.action === "changeFontWeight") {
      setFontWeight(props.textProperty);
    }
    if (props.action === "italicFont") {
      setItalic(props.textProperty);
    }
    if (props.action === "underline") {
       setUnderline(props.textProperty);
     }
    if (props.action === "fontSize") {
      setFontSize(props.textProperty);
    }
    if (props.action === "changeColor") {
      setColor(props.textProperty);
    }
    if (props.action === "editText") {
      setValue(props.textProperty);
    }
    if (props.action === "none") {
      setIsDragging(true);
      const xOffset = event.clientX - position.x;
      const yOffset = event.clientY - position.y;
      setDelta({ x: xOffset, y: yOffset });
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const x = event.clientX - delta.x;
    const y = event.clientY - delta.y;
    if (props.action === "none" && x > 270 && x < (1090 - size.width) && y > 35 && y < (660-size.height)) {
      setPosition({x,y});
    }
  };

  

  const handleMouseUp = () => {
    if (props.action === "none" || props.action === "delete") {
      if (props.action === "delete") {
        dispatch(deleteObject(state, id));
        console.log(state);
      }
      if (isDragging) {
        dispatch(changePosition(state, id, position.x, position.y));
        setIsDragging(false);
      }
    }

    if (props.action === "changeFontFamily") {
      dispatch(changeFontFamily(state, id, props.textProperty));
      console.log(state);
    }

    if (props.action === "changeFontWeight") {
      dispatch(changeFontWeight(state, id, props.textProperty));
      console.log(state);
    }

    if (props.action === "editText") {
      dispatch(editText(state, id, props.textProperty));
      console.log(state);
    }

    if (props.action === "italicFont") {
      dispatch(editText(state, id, props.textProperty));
      console.log(state);
    }

    if (props.action === "underline") {
      dispatch(changeUnderline(state, id, props.textProperty));
      console.log(state);
    }

    if (props.action === "fontSize") {
      dispatch(changeFontSize(state, id, props.textProperty));
      console.log(state);
    }

    if (props.action === "changeColor") {
      dispatch(changeColorText(state, id, props.textProperty));
      console.log(state);
    }
    props.setNone();
  };
  return (
    <div
      style={{
        userSelect: "none",
        cursor: "pointer",
        position: 'absolute',
        filter: filter,
        color: color,
        width: width,
        height: height,
        fontSize: fontSize,
        fontStyle: italic,
        fontWeight: fontWeight,
        fontFamily: fontFamily,
        top: position.y,
        left: position.x,
        textDecoration: underline,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {value}
    </div>
  )
}
export { TextBlock }