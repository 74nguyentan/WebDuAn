import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-regist-dialog',
  templateUrl: './regist-dialog.component.html',
  styleUrls: ['./regist-dialog.component.css']
})
export class RegistDialogComponent implements OnInit {

  status = false
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<RegistDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }

}
