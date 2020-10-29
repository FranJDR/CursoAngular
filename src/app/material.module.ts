import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';


const myModuleMaterial = [
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatChipsModule,
  MatDividerModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatSortModule,
  MatSnackBarModule,
  MatPaginatorModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModuleMaterial
  ],
  exports: [
    myModuleMaterial
  ]
})
export class MaterialModule { }
