enum ObjectType {
  image = 'image',
  text = 'text',
  artObj = 'artObj'
}
enum Figures {
  triangle = 'triangle',
  rectangle = 'rectangle',
  circle = 'circle'
}

type Color = {
  hex: string;
  opacity: number;
}


type Size = {
  width: number;
  height: number;
}

type Position = {
  x: number,
  y: number,
}

type CardObject = {
  pos: Position,
  size: Size,
  id: number,
  type: ObjectType,
  filter: string,
}

type TextBox = CardObject & {
  value: string;
  color: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  italic: string;
  underline: string;
  filter: string;
}
type Picture = CardObject & {
  path: string;
}
type ArtObject = CardObject & {
  color: Color,
  figure: Figures,
  filter: string,
}

type Canvas = {
  size: Size;
  objects: Array<TextBox|Picture|ArtObject>;

}
type Editor = {
  name: string,
  canvas: Canvas,
  history: Canvas[],
}
export { ObjectType, Figures }
export type {
  Color,
  CardObject,
  TextBox,
  Picture,
  ArtObject,
  Canvas,
  Size,
  Editor,
  Position,
}