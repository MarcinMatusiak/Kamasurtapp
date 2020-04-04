import { useDispatch } from 'react-redux';
import { setSelectedObject } from '../store/editor/actions';

export default (ID: number) => {
    const dispatch = useDispatch();
    return () => dispatch(setSelectedObject(ID));
};
