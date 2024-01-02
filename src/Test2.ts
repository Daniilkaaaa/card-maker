import {
  ObjectType,
  Figures,
  //HistoryActions,
  ArtObject,
  Canvas,
  Size,
  Editor,
  Position,
} from "./types"

const pos: Position = {
  x: 34,
  y: 54,
}

// const color: Color = {
//   hex: '#FF0000',
//   opacity: 0.5,
// }

const size: Size = {
  width: 34,
  height: 56,
}

const size1: Size = {
  width: 25,
  height: 65,
}

// const rectangle: ArtObject =  {
//   pos: pos,
//   size: size,
//   id: 3,
//   type: ObjectType.artObj,
//   figure: Figures.rectangle,
// }
// const color2: Color = {
//   hex: '#FF8754',
//   opacity: 0.2,
// }


const sizeC: Size = {
  width: 500,
  height: 700,
}


// const canva: Canvas = {
//   size: sizeC,
//   objects: [rectangle],
// }

const canva: Canvas = {
  //size: size1,
  objects: []
}

// const history: HistoryActions = {
//   id: 1,
//   events: [canva, canva1],
// }

const editor: Editor = {
  name: "card",
  canvas: canva,
  history: [],
}
export {editor}
// console.log("Арт-объект: ", rectangle);
// console.log("Холст: ", canva);
// console.log("Эдитор: ", editor);

