import TODOItem from "./TODOItem";

const TodoItems = ({ todoItems }) => {

    return (
        <div>
            {
                todoItems.map((item) => (
                    <TODOItem todoName={item.name} todoDate={item.dueDate}></TODOItem>
                ))
            }
        </div>
    )
}

export default TodoItems;