import { useSelector } from 'react-redux';
import { RootState } from './TypeSelector';


export const useAppSelector = (selector: (state: RootState) => any) => useSelector(selector)