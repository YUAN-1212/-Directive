import { Directive, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteComponent } from './NoteComponent/NoteComponent';
import { TestDto } from './service/Dto';
import { LbelHintServiceService } from './service/lbel-hint-service.service';

@Directive({
  selector: 'label'
})
export class LabelHintDirective {

  element: any = null;

  data: TestDto[] = [];

  constructor(
    private el: ElementRef,
    private service: LbelHintServiceService,
    private dialog: MatDialog
  ) {
    this.element = el.nativeElement;
    this.data = this.service.getData();
  }

  ngAfterViewInit(): void {
    if (this.data.find((p) => p.S_Name === this.element.innerText)) {
      this.element.classList.add('docHint');
    }
  }

  /** click */
  @HostListener('click')
  @HostListener("contextmenu", ["$event"]) // 右鍵
  onlabel(event: PointerEvent): void {
    if (event !== undefined && event.type === 'contextmenu') {
      // 右鍵
      // preventDefault avoids to show the visualization of the right-click menu of the browser
      event.preventDefault();
    }

    if (this.element.classList.contains('docHint')) {
      const res = this.data.find((p) => p.S_Name === this.element.innerText);
      this.dialog
        .open(NoteComponent, {
          disableClose: true,
          hasBackdrop: true,//false的話就是關閉黑色背景
          panelClass: ['custom-dialog-resize'],
          data: res,
        })
        .afterClosed()
        .subscribe();
    }
  }

}
