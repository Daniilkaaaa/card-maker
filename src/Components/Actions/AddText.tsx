import { Color, ObjectType, Size, TextBox } from '../../types';
import { Position} from '../../types';

function AddText(
  x_: number,
  y_: number,
  id : number,
) {
  const pos: Position = {
    x: x_,
    y: y_
  }
  const size: Size = {
    width: 200,
    height: 60,
  }
  const color: Color = {
    hex: '#FF8754',
    opacity: 0.6,
  }
  const textBox: TextBox = {
    pos: pos,
    size: size,
    type: ObjectType.text,
    id: id,
    value: "Здесь написан какой-то текст",
    color: "black",
    fontSize: "17",
    fontWeight: "normal",
    fontFamily: "cursive",
    italic: "normal",
    underline: "none",
    filter: "none"
  }
  return textBox

}
export { AddText }