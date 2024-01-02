import { Editor} from '../types';
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from 'react';
import { CanvasView } from './CanvasView';
import styles from "./EditorView.module.css"
import { Scrim } from './Scrim';
import { saveObjectAsJsonFile } from './Actions/ExportToJSON';
import { CreateText } from './Actions/CreateText';
import { AddObject } from './Actions/AddObject';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { CreateCircle } from './Actions/CreateCircle';
import { CreateRectangle } from './Actions/CreateRectangle';
import { CreateTriangle } from './Actions/CreateTriangle';
import { DeleteObject } from './Actions/DeleteObject';
import { CreateImage } from './Actions/CreateImage';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../redux/hooks/TypeSelector';
import { addObject, deleteObject, updateEditor } from '../redux/actionCreator';
import { UpdateEditor } from '../redux/hooks/UpdateEditor';

function EditorView(props: {
  editor: Editor;
  scale?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const state = useTypedSelector(state => state).editor;
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  const [src, setSrc] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [addingState, setAddingState] = useState("none");
  const [myData, setMyData] = useState<Editor | null>();
  const [action, setAction] = useState("none");
  const widthScrim = 800;
  const heightScrim = 600;

  const downloadClick = () => {
    saveObjectAsJsonFile(state, 'sample.json');
  };
  const [textData, setTextData] = useState("");
  const [textIsEditing, setTextIsEditing] = useState(false);
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [textProperty, setTextProperty] = useState("");
  const [visibleFontSize, setVisibleFontSize] = useState(false);
  const [visibleFontFamily, setVisibleFontFamily] = useState(false);
  const [visibleFontWeight, setVisibleFontWeight] = useState(false);
  const [visibleItalic, setVisibleItalic] = useState(false);
  const [visibleUnderline, setVisibleUnderline] = useState(false);
  const [visibleText, setVisibleText] = useState(false);
  const [visibleColor, setVisibleColor] = useState(false);
  const [visibleFigure, setVisibleFigure] = useState(false);

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTextData(event.target.value);
  }
  function editClick() {
    setTextIsEditing(true);
    setVisibleUnderline(false);
    setVisibleFontWeight(false);
    setVisibleFontFamily(false);
    setVisibleFontSize(false);
    setVisibleItalic(false);
  }

  function saveEditClick() {
    setTextIsEditing(false);
    setAction("editText");
    setTextProperty(textData);
  }
  function toggleContentFontSizeVisibility() {
    setVisibleFontSize(!visibleFontSize);
    setVisibleUnderline(false);
    setVisibleFontWeight(false);
    setVisibleFontFamily(false);
    setVisibleItalic(false);
    setVisibleColor(false);
  }

  function toggleContentFontFamilyVisibility() {
    setVisibleFontFamily(!visibleFontFamily);
    setVisibleUnderline(false);
    setVisibleFontWeight(false);
    setVisibleFontSize(false);
    setVisibleItalic(false);
    setVisibleColor(false);
  }

  function toggleContentFontWeightVisibility() {
    setVisibleFontWeight(!visibleFontWeight);
    setVisibleUnderline(false);
    setVisibleFontFamily(false);
    setVisibleFontSize(false);
    setVisibleItalic(false);
    setVisibleColor(false);
  }

  function toggleContentItalicVisibility() {
    setVisibleItalic(!visibleItalic);
    setVisibleUnderline(false);
    setVisibleFontWeight(false);
    setVisibleFontFamily(false);
    setVisibleFontSize(false);
    setVisibleColor(false);
  }

  function toggleContentUnderlineVisibility() {
    setVisibleUnderline(!visibleUnderline);
    setVisibleFontWeight(false);
    setVisibleFontFamily(false);
    setVisibleFontSize(false);
    setVisibleItalic(false);
    setVisibleColor(false);
  }

  function toggleContentColorVisibility() {
    setVisibleColor(!visibleColor);
    setVisibleUnderline(false);
    setVisibleFontWeight(false);
    setVisibleFontFamily(false);
    setVisibleFontSize(false);
    setVisibleItalic(false);
  }

  function toggleContentTextVisibility() {
    setVisibleText(!visibleText);
    setVisibleFigure(false);
  }

  function toggleContentFiguresVisibility() {
    setVisibleFigure(!visibleFigure);
    setVisibleText(false);
  }


  const inputRef = useRef<HTMLInputElement>(null);
  const changeImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result as string;
        setBase64Image(base64String);
      };
      setAddingState("image");

      reader.readAsDataURL(file);
    }
  };
  function deleteClick() {
    setIsDelete(true);
    setAction("delete");
  }

  function changeSize() {
    setAction("changeSize");
  }

  function setNone() {
    setAction("none")
  }

  function stopChangingSize() {
    setAction("none")
  }
  function changeText(){
    setAddingState("text");
  }
  function changeCircle() {
    setAddingState("circle");
  }

  function changeRectangle() {
    setAddingState("rectangle");
  }

  function changeTriangle() {
    setAddingState("triangle");
  }
  const inputRefSelectCard = useRef<HTMLInputElement>(null);

  const selectCardClick = () => {
    if (inputRefSelectCard.current) {
      inputRefSelectCard.current.click();
    }
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        // const myData = JSON.parse(reader.result as string) as Editor;
        dispatch(updateEditor(JSON.parse(reader.result as string) as Editor));
        console.log(updateEditor(JSON.parse(reader.result as string) as Editor));
        // if (myData != null) {
        //   dispatch(updateEditor(myData));
        //   console.log(myData);
        //   console.log(state);
        // }
      } catch (error) {
        console.error(error);
      }
    };
    reader.readAsText(file);
  }

  function courierNewFont() {
    setAction("changeFontFamily");
    setTextProperty("Courier New")
  }

  function freeMonoFont() {
    setAction("changeFontFamily");
    setTextProperty("FreeMono");
  }

  function SegoeUIFont() {
    setAction("changeFontFamily");
    setTextProperty("Segoe UI");
  }

  function boldFontWeight() {
    setAction("changeFontWeight");
    setTextProperty("bold");
  }

  function defaultFontWeight() {
    setAction("changeFontWeight");
    setTextProperty("normal");
  }

  function italicFont() {
    setAction("italicFont");
    setTextProperty("italic")
  }

  function noItalicFont() {
    setAction("italicFont");
    setTextProperty("normal");
  }

  function noUnderline() {
    setAction("underline");
    setTextProperty("none");
  }
  function defaultUnderline() {
    setAction("underline");
    setTextProperty("underline");
  }
  function pointUnderline() {
    setAction("underline");
    setTextProperty("underline dotted");
  }

  function wavyUnderline() {
    setAction("underline");
    setTextProperty("wavy underline");
  }
  function size10() {
    setAction("fontSize");
    setTextProperty("10px");
  }
  function size15() {
    setAction("fontSize");
    setTextProperty("15px")
  }

  function size20() {
    setAction("fontSize");
    setTextProperty("20px")
  }

  function size25() {
    setAction("fontSize");
    setTextProperty("25px")
  }

  function size30() {
    setAction("fontSize");
    setTextProperty("30px")
  }

  function size35() {
    setAction("fontSize");
    setTextProperty("35px")
  }

  function redColor() {
    setAction("changeColor");
    setTextProperty("red");
  }

  function blackColor() {
    setAction("changeColor");
    setTextProperty("black");
  }

  function blueColor() {
    setAction("changeColor");
    setTextProperty("blue");
  }

  function orangeColor() {
    setAction("changeColor");
    setTextProperty("orange");
  }



  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const x = event.clientX;
    const y = event.clientY;
    console.log(x,y);
    setId(id+1);
    let object;
    if (addingState == "text") {
      object = CreateText(x,y,id);
    }
    if (addingState === "image") {
      object = CreateImage(base64Image as string,x, y, id);
    }
    if (addingState == "circle") {
      object = CreateCircle(x, y, id);
    }
    if (addingState == "rectangle") {
      object = CreateRectangle(x, y, id);
    }
    if (addingState == "triangle") {
      object = CreateTriangle(x,y, id);
    }
    if (addingState != "none") {
      dispatch(addObject(state, object));
      setAddingState("none")
    }
  }
  const {name, history, canvas} = state
  return (
    <body>
    <div className={"main"}>
      <h1 className={styles.name}>{name}</h1>
      <ul className="main-menu2">
        <li><button className={"atuin-btn"} onClick={toggleContentTextVisibility}>Текст</button></li>
        {visibleText&&(<ul className="sub-menu">
        <li><button onClick={changeText}>Создать текст</button></li>
        {textIsEditing && (<li><input type={"text"} value={textData} onChange={handleTextChange} autoFocus/></li>)}
        {!textIsEditing && (<li><button onClick={editClick}>Редактировать текст</button></li>)}
        {textIsEditing && (<li><button onClick={saveEditClick}>Сохранить текст</button></li>)}
          <li><button onClick={toggleContentFontFamilyVisibility} className="main-item">Изменить шрифт</button></li>
          {visibleFontFamily&&(<ul className="sub-menu1">
              <li><button onClick={courierNewFont}>Courier New</button></li>
              <li><button onClick={freeMonoFont}>FreeMono</button></li>
              <li><button onClick={SegoeUIFont}>Segoe UI</button></li>
            </ul>)}
          <li><button onClick={toggleContentFontWeightVisibility}>Изменить начертание</button></li>
          {visibleFontWeight&&(<ul className="sub-menu">
            <li><button onClick={defaultFontWeight}>Нормальное</button></li>
            <li><button onClick={boldFontWeight}>Жирное</button></li>
          </ul>)}
          <li><button onClick={toggleContentFontSizeVisibility} className="main-item">Изменить размер шрифта</button></li>
          {visibleFontSize &&(<ul className="sub-menu1">
            <li><button onClick={size10}>10px</button></li>
            <li><button onClick={size15}>15px</button></li>
            <li><button onClick={size20}>20px</button></li>
            <li><button onClick={size25}>25px</button></li>
            <li><button onClick={size30}>30px</button></li>
            <li><button onClick={size35}>35px</button></li>
          </ul>)}
          <li><button onClick={toggleContentItalicVisibility}>Добавить курсив</button></li>
          {visibleItalic&&(<ul className="sub-menu">
            <li><button onClick={noItalicFont}>Без курсива</button></li>
            <li><button onClick={italicFont}>С курсивом</button></li>
          </ul>)}
          <li><button onClick={toggleContentUnderlineVisibility}>Добавить подчеркивание</button></li>
          {visibleUnderline&&(<ul className="sub-menu">
            <li><button onClick={noUnderline}>Без подчеркивания</button></li>
            <li><button onClick={defaultUnderline}>Обычное подчеркивание</button></li>
            <li><button onClick={pointUnderline}>Точечное подчеркивание</button></li>
            <li><button onClick={wavyUnderline}>Волнистое подчеркивание</button></li>
          </ul>)}
          <li><button onClick={toggleContentColorVisibility}>Добавить цвет</button></li>
          {visibleColor&&(<ul className="sub-menu">
            <li><button onClick={redColor}>Красный</button></li>
            <li><button onClick={blackColor}>Черный</button></li>
            <li><button onClick={blueColor}>Синий</button></li>
            <li><button onClick={orangeColor}>Оранжевый</button></li>
          </ul>)}
        </ul>)}
        <li><button onClick={changeImageClick}>Выбрать изображение</button></li>
        <input type="file" ref={inputRef}  onChange={handleImageUpload} style={{ display: 'none' }}/>
        <li><button onClick={toggleContentFiguresVisibility}>Фигура</button>
          {visibleFigure && (<ul className="sub-menu">
            <li><button onClick={changeCircle}>Круг</button></li>
            <li><button onClick={changeTriangle}>Треугольник</button></li>
            <li><button onClick={changeRectangle}>Прямоугольник</button></li>
          </ul>)}
        </li>
        <li><button onClick={changeSize}>Изменить размер</button></li>
        <li><button onClick={deleteClick}>Удалить объект</button></li>
        <li><button onClick={downloadClick}>Скачать</button></li>
        <li><button onClick={selectCardClick}>Выбрать открытку</button></li>
        <input type="file" ref={inputRefSelectCard} style={{ display: 'none' }} onChange={handleFileChange} />
      </ul>
      <div style={{
        //display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        //overflow: 'hidden'
      }}>
        <div style={{
          width: 800,
          height: 600,
          //position: 'relative' // добавляем position: relative
        }}>
          </div>
        <div onClick={handleClick}>
          <Scrim width={widthScrim} height={heightScrim}></Scrim>
        </div>
      </div>
      <div>
          <CanvasView canvas={canvas} isDelete={isDelete} action={action} stopChangingSize={stopChangingSize} textProperty={textProperty} setNone={setNone} widthScream={widthScrim} heightScream={heightScrim}></CanvasView>
      </div>
    </div>
    </body>
  )
}
export {EditorView}