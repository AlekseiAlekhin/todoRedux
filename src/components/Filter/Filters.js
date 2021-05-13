import ToDoFilter from "./ToDoFilter";
import CompletedFilter from "./CompletedFilter";
import AllFilter from "./AllFilter";

const Filters = ()=>{
    return <div className={'filtersDiv'}>
        <AllFilter/>
        <CompletedFilter/>
        <ToDoFilter />
    </div>
}

export default Filters;