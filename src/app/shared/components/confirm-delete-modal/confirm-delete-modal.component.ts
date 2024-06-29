import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-modal',
  templateUrl: './confirm-delete-modal.component.html',
  styleUrl: './confirm-delete-modal.component.scss'
})
export class ConfirmDeleteModalComponent {

  @Input() whatToDelete!:string;
  @Output() deleteAction = new EventEmitter<boolean>();
  @Output() cancelAction = new EventEmitter<boolean>();



  onClickDelete(){
    console.log('delete action responding')
    this.deleteAction.emit()
  }

  onClickCancel(){
    console.log('cancel action responding')
    this.cancelAction.emit()
  }

}
