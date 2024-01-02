import { Editor } from '../../types';


function ChangeSize(
  editor: Editor,
  id: number,
  width: number,
  height: number
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object.size.width = width;
      object.size.height = height;
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

export { ChangeSize }