import { Editor} from '../../types';

const saveObjectAsJsonFile = (obj: any, filename: string) => {
  const jsonStr = JSON.stringify(obj);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
export {saveObjectAsJsonFile}
