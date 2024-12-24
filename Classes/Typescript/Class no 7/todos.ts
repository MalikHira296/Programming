interface Todo {
    title: string[];
    createTodo(): void;
    deleteTodo(): void;
    resetTodo(): void;
}

class Todo {
    title: string[];
    constructor(title: string[]) {
        this.title = title;
    }
    createTodo(){
        return this.title.push("New Value");
    }
    deleteTodo(){
        return this.title.pop();
    }
    resetTodo(){
        // return this.title.length = 0;
        return this.title = [];
    }
}

let todo = new Todo(["Buy milk", "Buy bread", "Buy eggs"]);

todo.createTodo();
todo.deleteTodo();
todo.resetTodo();
console.log(todo);

































































