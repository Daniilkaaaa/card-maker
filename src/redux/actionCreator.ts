
import { ArtObject, Editor, Picture, TextBox } from '../types';
import { Actions } from './types';

function addObject(editor: Editor, object: any) {
  return {
    type: Actions.ADD_OBJECT,
    payload: {editor, object}
  }
}

function deleteObject(editor: Editor, id: number) {
  return {
    type: Actions.DELETE_OBJECT,
    payload: {editor, id}
  }
}

function changeSize(editor: Editor,id: number, width: number, height: number) {
  return {
    type: Actions.CHANGE_SIZE,
    payload: {editor, id, width, height}
  }
}

function changePosition(editor: Editor,id: number, pos_x: number, pos_y: number) {
  return {
    type: Actions.CHANGE_POSITION,
    payload: {editor, id, pos_x, pos_y}
  }
}

function changeFontFamily(editor: Editor,id: number, font_family: string) {
  return {
    type: Actions.CHANGE_POSITION,
    payload: {editor, id, font_family}
  }
}

function changeFontWeight(editor: Editor,id: number, font_weight: string) {
  return {
    type: Actions.CHANGE_FONT_WEIGHT,
    payload: {editor, id, font_weight
    }
  }
}

function editText(editor: Editor,id: number, value: string) {
  return {
    type: Actions.EDIT_TEXT,
    payload: {editor, id, value}
  }
}

function italicFont(editor: Editor,id: number, italic: string) {
  return {
    type: Actions.ITALIC_FONT,
    payload: {editor, id, italic}
  }
}

function changeUnderline(editor: Editor,id: number, underline: string) {
  return {
    type: Actions.UNDERLINE,
    payload: {editor, id, underline}
  }
}

function changeFontSize(editor: Editor,id: number, font_size: string) {
  return {
    type: Actions.CHANGE_FONT_SIZE,
    payload: {editor, id, font_size}
  }
}

function changeColorText(editor: Editor,id: number, color: string) {
  return {
    type: Actions.CHANGE_COLOR_TEXT,
    payload: {editor, id, color}
  }
}

function updateEditor(editor: Editor) {
  return {
    type: Actions.UPDATE_EDITOR,
    payload: {editor}
  }
}

export { addObject, deleteObject, changeSize, changePosition, changeFontFamily, changeFontWeight, editText, italicFont, changeUnderline, changeFontSize, changeColorText, updateEditor}