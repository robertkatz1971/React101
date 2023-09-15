const Todo = () => {
    return (
        <div className="row">
            <div className="column">
                Walk the dog.
            </div>
            <div className="column">
                <label>
                    <input type="checkbox" />
                    Completed
                </label>
            </div>
        </div >
    );
}

export default Todo;