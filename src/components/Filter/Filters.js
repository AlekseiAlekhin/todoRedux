import ToDoFilter from "./ToDoFilter";
import CompletedFilter from "./CompletedFilter";
import AllFilter from "./AllFilter";
import {memo} from "react";

const Filters = ()=>{
    return <div className={'filters-Div'}>
        <AllFilter/>
        <CompletedFilter/>
        <ToDoFilter />
    </div>
}

export default memo(Filters);
