import { createContext, useState } from 'react';


export function MyComponent(posx_: number, posy_: number, id_: number) {
  const ObjectDataContext = createContext({posx_, posy_, id_});
  const [objectData, setObjectData] = useState({posx_, posy_, id_});

  // Обновление значений posx_, posy_ и id_

  return (
    <ObjectDataContext.Provider value={objectData}>
      {/* Ваш код */}
    </ObjectDataContext.Provider>
  );
}
