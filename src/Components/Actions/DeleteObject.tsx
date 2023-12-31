import { ArtObject, Editor, ObjectType, Picture, TextBox } from '../../types';
import { TextBlock } from '../Objects/text';
import { FigureBlock } from '../Objects/figures';
import { ImageBlock } from '../Objects/image';
import React from 'react';


function DeleteObject(
  editor: Editor,
  id: number,
) {
  let{name , history, canvas} = editor;
  const filteredObjects = canvas.objects.filter((object) => object.id != id);
  canvas.objects = filteredObjects;
  const edit: Editor = {
    name: name,
    canvas: canvas,
    history: history,

  }
  return edit;
  }

export { DeleteObject }