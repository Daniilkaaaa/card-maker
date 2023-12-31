import {
    ObjectType,
    Figures,
    Color,
    //CardObject,
    TextBox,
    Picture,
    ArtObject,
    Canvas,
    Size,
    Editor,
    Position,
} from "./types"

const pos: Position = {
    x: 120,
    y: 240,
}
const pos1: Position = {
    x: 34,
    y: 76,
}

const pos3: Position = {
    x: 180,
    y: 120,
}

const pos4: Position = {
    x: 700,
    y: 200,
}

const color: Color = {
    hex: '#FF0000',
    opacity: 0.5,
}
const color3: Color = {
    hex: '#000000',
    opacity: 0,
}

const size: Size = {
    width: 120,
    height: 90,
}
const textBox: TextBox = {
    pos: pos3,
    size: size,
    type: ObjectType.text,
    id: 1,
    value: "Здесь написан какой то текст",
    color: "red",
    fontSize: "17",
    fontWeight: "normal",
    fontFamily: "Oxygen",
    italic: "normal",
    underline: "none",
    filter: "none",
}

// const textBox2: TextBox = {
//     pos: pos1,
//     size: size,
//     type: ObjectType.text,
//     id: 1,
//     value: "Здесь написан другой текст",
//     color: color,
//     fontSize: 3,
//     fontFamily: "Oxygen",
// }

const size1: Size = {
    width: 400,
    height: 500,
}

const size2: Size = {
    width: 450,
    height: 600,
}

const picture: Picture = {
    pos: pos,
    size: size1,
    id: 2,
    type: ObjectType.image,
    path: "https://sun9-15.userapi.com/c857620/v857620773/3407f/90XIvgGEpHg.jpg",
    filter: "none",
}
const rectangle: ArtObject =  {
    pos: pos1,
    size: size,
    color: color,
    id: 3,
    type: ObjectType.artObj,
    figure: Figures.rectangle,
    filter: "none",
}
const color2: Color = {
    hex: '#FF8754',
    opacity: 0.6,
}

const circle: ArtObject =  {
    pos: pos4,
    size: size2,
    color: color3,
    id: 3,
    type: ObjectType.artObj,
    figure: Figures.circle,
    filter: "none",
}

const sizeC: Size = {
    width: 500,
    height: 700,
}


const canva: Canvas = {
    size: sizeC,
    objects: [],
}

let canva1: Canvas = {
    size: size1,
    objects: []
}

// const history: HistoryActions = {
//     id: 1,
//     events: [canva, canva1],
// }

export const editor: Editor = {
    name: "card",
    canvas: canva,
    history: [],
}
console.log("Текстовое поле: ", textBox);
console.log("Картинка: ", picture);
console.log("Арт-объект: ", rectangle);
console.log("Холст: ", canva);
console.log("Эдитор: ", editor);

export {canva}

