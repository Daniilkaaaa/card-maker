import { ArtObject, Color, Figures, ObjectType, Position, Size } from '../../types';


function CreateRectangle(
  x_: number,
  y_: number,
  id_: number
) {
  const pos: Position = {
    x: x_,
    y: y_

  }
  const size: Size = {
    width: 200,
    height: 300,
  }
  const color: Color = {
    hex: '#FF8754',
    opacity: 0.6,
  }
  const rectangle: ArtObject = {
    pos: pos,
    size: size,
    type: ObjectType.artObj,
    id: id_,
    color: color,
    figure: Figures.rectangle,
    filter: "none",
  }
  return rectangle
}
export { CreateRectangle }