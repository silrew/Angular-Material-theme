import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { SalesRecords } from 'src/app/shared/data/sales-records';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {PageEvent} from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTooltip } from '@angular/material/tooltip'
import {MatTable} from '@angular/material';
import { SalesRecordsService } from 'src/app/services/sales-records.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  dataSource;
  length = 100;
  pageSize = 10;
  pageEvent: PageEvent;
  sortedData;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['id','person.first_name', 'person.last_name', 
   'person.email', 'person.address', 'person.zip_code', 'edit'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) matTable: MatTable<any>;
  constructor(private salesservice: SalesRecordsService) { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
      
    }
  }


  ngOnInit() {
    this.salesservice.getSalesRecords().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sortingDataAccessor = (data, sortHeaderId: string) => {
        return this.getPropertyByPath(data, sortHeaderId);
      };
    
    })
  }

  getPropertyByPath(obj: Object, pathString: string) {
    return pathString.split('.').reduce((o, i) => o[i], obj);
  }

}
