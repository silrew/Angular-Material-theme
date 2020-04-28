import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components 
import { 
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatExpansionModule,
  MatDividerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatTabsModule,
  MatCheckboxModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
     MatExpansionModule,
     MatDividerModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSelectModule,
     MatTabsModule,
     MatCheckboxModule,
     MatTooltipModule
  ],
  exports: [
    MatTooltipModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
     MatIconModule,
     MatSidenavModule,
     MatExpansionModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
     MatSelectModule ,
     MatTabsModule ,
     MatCheckboxModule
  ],
  declarations: []
})
export class MaterialAngularModule { }