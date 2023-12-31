import { ArtObject, Editor, TextBox } from '../../types';
import { text } from 'stream/consumers';


function AddObject(
  editor: Editor,
  object: any
) {
  const { canvas, history} = editor;
  history.push(canvas);
  canvas.objects.push(object);
  const edit: Editor = {
    name: editor.name,
    canvas: canvas,
    history: history
  }
  return(edit);
}

export {AddObject}