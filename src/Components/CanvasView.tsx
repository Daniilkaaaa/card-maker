import React from 'react';
import { ArtObject, Canvas, ObjectType, Picture, TextBox } from '../types';
import { TextBlock } from './Objects/text';
import { FigureBlock } from './Objects/figures';
import { ImageBlock } from './Objects/image';

function CanvasView(props: {
  canvas: Canvas,
  scale?: number,
  textProperty: string,
  setNone: () => void,
  deleting: (id: number) => void,
  action: string,
  isDelete: boolean,
  stopChangingSize: () => void,
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
  widthScream: number,
  heightScream: number,
}) {
  let {objects } = props.canvas;
  // const [objects, setObjects] = useState(props.canvas.objects);
  const getBlockData = (x: number, y: number, id: number, width: number, height: number) => {
    if (props.action === "delete") {
        props.deleting(id);
    }
    if (props.action === "changeSize") {
      objects.map((object, index) => {
        if (object.id === id) {
          object.size.width = width;
          object.size.height = height;
        }
        props.stopChangingSize();
      })

    }
    if (props.action === "none") {
      objects.map((object, index) => {
        if (object.id === id) {
          object.pos.x = x;
          object.pos.y = y;
        }
      })
    }
  };
  function getTextData(id: number, textProperty: string) {
    if (props.action === "italicFont") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.italic = textProperty;
        }
      })
      props.setNone();
    }
    if (props.action === "changeFontFamily") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.fontFamily = textProperty;
        }
      })
      props.setNone();
    }
    if (props.action === "changeFontWeight") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.fontWeight = textProperty;
        }
      })
      props.setNone();
    }
    if (props.action === "underline") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.underline = textProperty;
        }
      })
      props.setNone();
    }
    if (props.action === "fontSize") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.fontSize = textProperty;
        }
      })
      props.setNone();
    }
    if (props.action === "changeColor") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.color = textProperty;
        }
      })
      props.setNone();
    }
    if (props.action === "editText") {
      objects.map((object, index) => {
        if (object.id === id && object.type === ObjectType.text) {
          object = object as TextBox;
          object.value = textProperty;
        }
      })
      props.setNone();
    }
  }
  return (
    <div onClick={props.onClick}>
      {objects.map((object, index) => {
          switch (object.type) {
            case ObjectType.text:
              return (
                <TextBlock key={object.id} text={object as TextBox} getBlockData={getBlockData} action={props.action} textProperty={props.textProperty} getTextData={getTextData} widthScream={props.widthScream} heightScream={props.heightScream}></TextBlock>
              );
            case ObjectType.artObj:
              return (
                <FigureBlock key={index} figure={object as ArtObject} getBlockData={getBlockData} isDelete={props.isDelete} action={props.action}></FigureBlock>
              );
            case ObjectType.image:
              return (
                <ImageBlock key={index} image={object as Picture} getBlockData={getBlockData} action={props.action}></ImageBlock>
              );
            default:
              return null;
          }
      })}
    </div>
  );
}

export { CanvasView };