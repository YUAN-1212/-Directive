import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TestDto } from '../service/Dto';

@Component({
  selector: 'app-NoteComponent',
  templateUrl: './NoteComponent.html',
  styleUrls: ['./NoteComponent.scss']
})
export class NoteComponent implements OnInit {

  /** 根據傳入的參數，回傳要顯示的內容 */

  /** 標題 */
  caption = '';

  /** 要顯示的內容 */
  testDto: TestDto = {
    caption: '',
    S_Name: '',
    S_Age: '',
    S_Math: '',
    S_Chinese: '',
    S_Scientist: '',
    T_Note: '',
    S_Note: '',
  };

  constructor(
    private dialogRef: MatDialogRef<NoteComponent>,

    /** 帶入的參數 */
    @Inject(MAT_DIALOG_DATA) public data: TestDto
  ) { }

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
    if (!!this.data) {
      this.caption = this.data.caption;
      this.testDto = this.data;
    }
  }

  @HostListener('window:keydown.f10')
  @HostListener('window:keydown.alt.c')
  onClose(): void {
    this.dialogRef.close();
  }

}
