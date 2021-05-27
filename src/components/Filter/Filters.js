import ToDoFilter from "./ToDoFilter";
import CompletedFilter from "./CompletedFilter";
import AllFilter from "./AllFilter";

const Filters = ()=>{
    return <div className={'filtersDiv'}> // todo должен быть filters-div (kebab style)
        <AllFilter/>
        <CompletedFilter/>
        <ToDoFilter />
    </div>
}
// todo обернуть в memo
export default Filters;
