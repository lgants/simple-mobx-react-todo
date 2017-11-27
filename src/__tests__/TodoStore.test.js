import { TodoStore } from "../src/js/TodoStore"

describe("TodoStore", () => {
  it("creates new todos", () => {
    const store = new TodoStore
    store.createTodo("todo1")
    store.createTodo("todo2")
    expect(store.todos.length).toBe(2)
    expect(store.todos[0].value).toBe("todo1")
    expect(store.todos[1].value).toBe("todo2")
  })
})
