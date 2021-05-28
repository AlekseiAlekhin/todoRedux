import {useDispatch} from "react-redux";
import { Button } from 'bootstrap-4-react';
import {memo} from "react";

const AllFilter = ()=>{
    const dispatch = useDispatch();
    return <Button type={'button'} onClick={()=>dispatch({type:'SHOW_ALL'})} light>All</Button>
}

export default memo(AllFilter);

