import { Editor, TextBox } from '../../types';


function ChangeFontSize(
  editor: Editor,
  id: number,
  font_size: string
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object = object as TextBox;
      object.fontSize = font_size
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

export { ChangeFontSize }