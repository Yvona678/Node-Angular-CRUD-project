import { Component, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';



@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})


export class TodoListComponent {

  @Input() public itemList = [];
  @Output() public deleteItem = new EventEmitter<number>();
  @Output() public updateItem=new EventEmitter<number>();

  constructor() { }


  public onClickDelete(itemId: number): void {
    this.deleteItem.emit(itemId); // emitem un eveniment care contine id-ul itemului ce il vom sterge
  }
  public onClickUpdate(item:any):void{
    item.name = document.getElementById("input-" + item.id).textContent;
    this.updateItem.emit(item);
    this.onClickCancelUpdate(item.id);
  }
  public onClickMakeEditable(id:number):void{
    document.getElementById("input-" + id).contentEditable = "true";
    document.getElementById("edit-" + id).hidden = true;
    document.getElementById("update-" + id).hidden = false;
    document.getElementById("cancel-" + id).hidden = false;
  }


  public onClickCancelUpdate(id:number):void{
    document.getElementById("input-" + id).contentEditable = "false";
    document.getElementById("edit-" + id).hidden = false;
    document.getElementById("update-" + id).hidden = true;
    document.getElementById("cancel-" + id).hidden = true;
  }
}


