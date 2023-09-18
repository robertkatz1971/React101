const Todo = (props) => {

    const {title, completed} = props;

    return (
        <div className="row">
            <div className="column">
                {title}
            </div>
            <div className="column">
                <input name="completed" type="checkbox" checked={completed} />
                <label for="completed">Completed</label>
            </div>
        </div >
    );
}

export default Todo;