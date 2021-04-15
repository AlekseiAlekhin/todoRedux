import {useDispatch} from "react-redux";
import { Button } from 'bootstrap-4-react';

const CompletedFilter = ()=>{
    const dispatch = useDispatch();
    return <Button type={'button'} name={'filter'} onClick={()=>dispatch({type:'SHOW_COMPLETED', })} light>Show Completed</Button>
}

export default CompletedFilter;