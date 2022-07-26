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
  onlabel(): void {
    if (this.element.classList.contains('docHint')) {
      const res = this.data.find((p) => p.S_Name === this.element.innerText);
      this.dialog
        .open(NoteComponent, {
          disableClose: true,
          data: res,
        })
        .afterClosed()
        .subscribe();
    }
  }

}
