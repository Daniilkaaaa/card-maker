import React from 'react';
import { editor} from './Test';
import { CanvasView } from './Components/CanvasView';
import { EditorView } from './Components/EditorView';

function App() {
  return (
    <div>
      <EditorView editor={editor}></EditorView>
    </div>
  );
}

export default App;
