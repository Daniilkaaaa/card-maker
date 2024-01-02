import { ObjectType, Picture, Position, Size } from '../../types';


function CreateImage(
  src: string,
  x_: number,
  y_: number,
  id_: number,
) {
  const pos: Position = {
    x: x_,
    y: y_
  }
  const size: Size = {
    width: 200,
    height: 300,
  }
  const picture: Picture = {
    pos: pos,
    size: size,
    id: id_,
    type: ObjectType.image,
    path: src,
    filter: "none",
  }
  return picture

}
export { CreateImage }