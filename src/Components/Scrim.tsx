import React from 'react';

function Scrim(props: {
  width: number
  height: number
}) {
  // const handleClick = (e: React.MouseEvent) => {
  //   console.log(`Clicked at position X: ${e.clientX} Y: ${e.clientY}`);
  // };
  const w = props.width
  const h = props.height
  return <div
  style={{
    width: w,
    height: h,
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }}></div>
}
export {Scrim}