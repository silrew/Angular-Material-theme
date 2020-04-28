import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-categoris',
  templateUrl: './categoris.component.html',
  styleUrls: ['./categoris.component.scss']
})
export class CategorisComponent implements OnInit {
categories =[{name:'flowers'},{name: 'couples'},{name: 'nature'},{name: 'thanksgiving'},{name: 'animals'}];
displayedColumns: string[] = [ 'name', 'links'];
dataSource =  new MatTableDataSource(this.categories);

@ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() {
        }
  
    ngOnInit() {
      this.dataSource.sort = this.sort;
    }
 

}
