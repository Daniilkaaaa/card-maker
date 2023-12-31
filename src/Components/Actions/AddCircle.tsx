import { ArtObject, Color, Figures, ObjectType, Position, Size } from '../../types';


function AddCircle(
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
  const circle: ArtObject = {
    pos: pos,
    size: size,
    type: ObjectType.artObj,
    id: id_,
    color: color,
    figure: Figures.circle,
    filter: "none",
  }
  return circle
}
export { AddCircle }