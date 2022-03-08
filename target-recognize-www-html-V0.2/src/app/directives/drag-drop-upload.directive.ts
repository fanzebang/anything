import {Directive, HostBinding, HostListener, Output, EventEmitter} from "@angular/core";

@Directive({
  selector: '[appDragDropUpload]'
})
export class DragDropUploadDirective {
  @HostBinding('class.fileover')
  fileOver: boolean;

  @Output()
  fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event'])
  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }


}
