import ToDoFilter from "./ToDoFilter";
import CompletedFilter from "./CompletedFilter";
import AllFilter from "./AllFilter";

const Filters = ()=>{
    return <div>
        <AllFilter/>
        <CompletedFilter/>
        <ToDoFilter link/>
    </div>
}

export default Filters;