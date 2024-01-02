import { Editor, TextBox } from '../../types';

function ChangeColorText(
  editor: Editor,
  id: number,
  color: string
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object = object as TextBox;
      object.color = color;
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

export { ChangeColorText }