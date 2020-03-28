import { useDispatch } from "react-redux"
import { setSelectedObject } from '../store/editor/actions';

export default (ID: number) => {
    console.log(ID);
    const dispatch = useDispatch();
    return () => dispatch(setSelectedObject(ID));
}
