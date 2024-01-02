import { Editor, TextBox } from '../../types';


function ChangeFontWeight(
  editor: Editor,
  id: number,
  font_weight: string
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object = object as TextBox;
      object.fontWeight = font_weight;
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

export {ChangeFontWeight}