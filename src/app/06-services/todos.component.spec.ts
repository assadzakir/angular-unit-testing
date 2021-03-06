import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('It should set todos property with the items returned from server', () => {

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([[1, 2, 3]]);
    });
    component.ngOnInit();
    expect(component.todos.length).toBe(3);

  });

  it('It should call the server to save the changes when a new todo add', () => {

    const spy = spyOn(service, 'add').and.callFake(() => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();

  });

  it('It should the new todo returned from the server', () => {
    const todo = {id: 1};
    spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);

  });

  it('It should set message property if server returns error while adding new todo', () => {
    const error = 'Internal Server Error';
    spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);

  });

  it('It should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);

  });

  it('It should NOT call the server to delete a todo item if the user cancel', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();

  });

});
