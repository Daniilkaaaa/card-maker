import { editor } from '../Test2';
import { combineReducers } from 'redux';
import { Actions, ActionsType } from './types';
import { AddObject } from '../Components/Actions/AddObject';
import { DeleteObject } from '../Components/Actions/DeleteObject';
import { ChangeSize } from './hooks/ChangeSize';
import { ChangePosition } from './hooks/ChangePosition';
import { ChangeFontWeight } from './hooks/ChangeFontWeight';
import { EditText } from './hooks/EditText';
import { ItalicFont } from './hooks/ItalicFont';
import { Underline } from './hooks/Underline';
import { ChangeFontSize } from './hooks/ChangeFontSize';
import { ChangeColorText } from './hooks/ChangeColorText';
import { UpdateEditor } from './hooks/UpdateEditor';


export const initState = editor

const objectReducer = (
  state= initState,
  action: ActionsType

) => {
  switch (action.type) {
    case Actions.ADD_OBJECT: {
      return AddObject(state, action.payload.object)
    }
    case Actions.DELETE_OBJECT: {
      return DeleteObject(state, action.payload.id)
    }
    case Actions.CHANGE_SIZE: {
      return ChangeSize(state, action.payload.id, action.payload.width, action.payload.height)
    }
    case Actions.CHANGE_POSITION: {
      return ChangePosition(state, action.payload.id, action.payload.pos_x, action.payload.pos_y);
    }
    case Actions.CHANGE_FONT_WEIGHT: {
      return ChangeFontWeight(state, action.payload.id, action.payload.font_weight);
    }
    case Actions.EDIT_TEXT: {
      return EditText(state, action.payload.id, action.payload.value)
    }
    case Actions.ITALIC_FONT: {
      return ItalicFont(state, action.payload.id, action.payload.italic)
    }
    case Actions.UNDERLINE: {
      return Underline(state, action.payload.id, action.payload.underline)
    }
    case Actions.CHANGE_FONT_SIZE: {
      return ChangeFontSize(state, action.payload.id, action.payload.font_size)
    }
    case Actions.CHANGE_COLOR_TEXT: {
      return ChangeColorText(state, action.payload.id, action.payload.color)
    }
    case Actions.UPDATE_EDITOR: {
      return UpdateEditor(action.payload.editor)
    }
    default:
      return state;
  }

}
const rootReducer = combineReducers({
  editor: objectReducer
})


export { rootReducer }