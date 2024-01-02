import { Editor, TextBox } from '../../types';


function ChangeFontFamily(
  editor: Editor,
  id: number,
  font_family: string
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object = object as TextBox;
      object.fontFamily = font_family;
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

export { ChangeFontFamily }