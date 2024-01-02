import { Editor, TextBox } from '../../types';


function ItalicFont(
  editor: Editor,
  id: number,
  italic: string
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object = object as TextBox;
      object.italic = italic;
    }
  })
  canvas.objects = objects;
  const edit: Editor = {
    name: name,
    canvas: canvas,
    history: history,
  }
  return edit;
}

export {ItalicFont}