import { ArtObject, Editor, Figures, Picture, TextBox } from '../types';

export enum Actions {
  ADD_OBJECT='ADD_OBJECT',
  DELETE_OBJECT='DELETE_OBJECT',
  CHANGE_SIZE='CHANGE_SIZE',
  CHANGE_POSITION='CHANGE_POSITION',
  CHANGE_FONT_FAMILY='CHANGE_FONT_FAMILY',
  CHANGE_FONT_WEIGHT='CHANGE_FONT_WEIGHT',
  EDIT_TEXT='EDIT_TEXT',
  ITALIC_FONT='ITALIC_FONT',
  UNDERLINE='UNDERLINE',
  CHANGE_FONT_SIZE='CHANGE_FONT_SIZE',
  CHANGE_COLOR_TEXT='CHANGE_COLOR_TEXT',
  UPDATE_EDITOR='UPDATE_EDITOR'
}
type AddObject = {
  type: Actions.ADD_OBJECT,
  payload: {
    editor: Editor,
    object: TextBox | ArtObject | Picture
  }
}

type DeleteObjects = {
  type: Actions.DELETE_OBJECT,
  payload: {
    editor: Editor,
    id: number
  }
}

type ChangeSize = {
  type: Actions.CHANGE_SIZE,
  payload: {
    editor: Editor,
    id: number,
    width: number,
    height: number
  }
}

type ChangePosition = {
  type: Actions.CHANGE_POSITION,
  payload: {
    editor: Editor,
    id: number,
    pos_x: number,
    pos_y: number
  }
}

type ChangeFontFamily = {
  type: Actions.CHANGE_FONT_FAMILY,
  payload: {
    editor: Editor,
    id: number,
    font_family: string
  }
}

type ChangeFontWeight = {
  type: Actions.CHANGE_FONT_WEIGHT,
  payload: {
    editor: Editor,
    id: number,
    font_weight: string
  }
}

type EditText = {
  type: Actions.EDIT_TEXT,
  payload: {
    editor: Editor,
    id: number,
    value: string
  }
}

type ItalicFont = {
  type: Actions.ITALIC_FONT,
  payload: {
    editor: Editor,
    id: number,
    italic: string
  }
}

type Underline = {
  type: Actions.UNDERLINE,
  payload: {
    editor: Editor,
    id: number,
    underline: string
  }
}

type ChangeFontSize = {
  type: Actions.CHANGE_FONT_SIZE,
  payload: {
    editor: Editor,
    id: number,
    font_size: string
  }
}

type ChangeColorText = {
  type: Actions.CHANGE_COLOR_TEXT,
  payload: {
    editor: Editor,
    id: number,
    color: string
  }
}

type UpdateEditor = {
  type: Actions.UPDATE_EDITOR,
  payload: {
    editor: Editor,
  }
}


type ActionsType =
  | AddObject
  | DeleteObjects
  | ChangeSize
  | ChangePosition
  | ChangeFontFamily
  | ChangeFontWeight
  | EditText
  | ItalicFont
  | Underline
  | ChangeFontSize
  | ChangeColorText
  | UpdateEditor
export type { ActionsType }
