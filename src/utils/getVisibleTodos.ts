import { FilterStatus } from '../types/TodoFilter';
import { Todo } from '../types/Todo';

export function getVisibleTodos(
  todos: Todo[],
  filter: FilterStatus,
  loadingTodoIds: number[],
): Todo[] {
  return todos.filter(todo => {
    if (loadingTodoIds.includes(todo.id)) {
      return true;
    }

    switch (filter) {
      case FilterStatus.All:
        return true;

      case FilterStatus.Active:
        return !todo.completed;

      case FilterStatus.Completed:
        return todo.completed;

      default:
        return true;
    }
  });
}
