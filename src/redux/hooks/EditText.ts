import { Editor, TextBox } from '../../types';


function EditText(
  editor: Editor,
  id: number,
  value: string
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object = object as TextBox;
      object.value = value;
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

export { EditText }