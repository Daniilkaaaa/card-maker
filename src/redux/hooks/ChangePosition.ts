import { Editor } from '../../types';


function ChangePosition(
  editor: Editor,
  id: number,
  pos_x: number,
  pos_y: number
) {
  let{name , history, canvas} = editor;
  let objects = canvas.objects;
  objects.map((object, index) => {
    if (object.id === id) {
      object.pos.x = pos_x;
      object.pos.y = pos_y;
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

export { ChangePosition }