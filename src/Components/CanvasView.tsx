import React from 'react';
import { ArtObject, Canvas, Editor, ObjectType, Picture, TextBox } from '../types';
import { TextBlock } from './Objects/text';
import { FigureBlock } from './Objects/figures';
import { ImageBlock } from './Objects/image';

function CanvasView(props: {
  canvas: Canvas,
  scale?: number,
  textProperty: string,
  setNone: () => void,
  action: string,
  isDelete: boolean,
  stopChangingSize: () => void,
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
  widthScream: number,
  heightScream: number,
}) {
  let {objects } = props.canvas;
  return (
    <div onClick={props.onClick}>
      {objects.map((object, index) => {
          switch (object.type) {
            case ObjectType.text:
              return (
                <TextBlock key={object.id} text={object as TextBox} action={props.action} setNone={props.setNone} textProperty={props.textProperty} widthScream={props.widthScream} heightScream={props.heightScream}></TextBlock>
              );
            case ObjectType.artObj:
              return (
                <FigureBlock key={index} figure={object as ArtObject} setNone={props.setNone} isDelete={props.isDelete} action={props.action}></FigureBlock>
              );
            case ObjectType.image:
              return (
                <ImageBlock key={index} image={object as Picture} setNone={props.setNone} action={props.action}></ImageBlock>
              );
            default:
              return null;
          }
      })}
    </div>
  );
}

export { CanvasView };