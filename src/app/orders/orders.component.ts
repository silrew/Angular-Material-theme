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
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  dataSource;
  dataSource2;
  dataSource3;
  showdelteIcon = false;
  rowsToDelete =[];
  tabledata;
  length = 100;
  pageSize = 5;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = ['select','date', 'reference', 'customer', 'NB_items', 'total'];
  displayedColumns1: string[] = ['date', 'reference', 'customer', 'NB_items', 'total','returned','edit'];
  displayedColumns2: string[] = ['date', 'reference', 'customer', 'NB_items', 'total'];
  selection = new SelectionModel<any>(true, []);
  selectedFilters =[];
  filterOptions: Array<any> =[{id:1, value:"Customer"}, 
   {id:2, value:"Passed before"}, 
   {id:3, value:'Min amount'}]
  salesRec: SalesRecords;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) matTable: MatTable<any>;
  @ViewChild('tooltip', {static: true}) tooltip: MatTooltip ;
  constructor(private salesservice: SalesRecordsService) { }

  onSelect(event,value) { 
    this.filterOptions = this.filterOptions.filter(val => value != val.value);
    this.selectedFilters.push(value);
  }
  ngOnInit() {
      this.salesservice.getSalesRecords().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource2 = new MatTableDataSource(data);
      this.tabledata = data;
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;
      this.dataSource2.sort = this.sort; 
      this.dataSource2.paginator = this.paginator; 
      })
  }

  setupFilter(column: string) {
    this.dataSource.filterPredicate = (d, filter: string) => {
      const textToSearch = d[column] && d[column].toLowerCase() || ''; 
      if(column == 'Passed before'){
        return (new Date(d.date).getTime()) < (new Date(filter).getTime()) ; 
      } else if ( column == 'Min amount'){
          return d.total > +filter;
      }
      else{
      return d.customer.toLowerCase().indexOf(filter) !== -1 || d.total.toString().indexOf(filter) !== -1 || d.date.toString().indexOf(filter) !== -1;
      }
    };
  }
  customFilter(data,str) {
    if(this.selectedFilters[this.selectedFilters.length-1] == 'Passed before'){
      //this.dataSource.filteredData = this.dataSource.filteredData.filter( (row) =>(new Date(row.date).getTime()) < (new Date(str).getTime() ) )
      return  (new Date(data.date).getTime()) < (new Date(str).getTime()) ;   
      
     
    }
     else {}
  }
  
  applyFilter(value) {
     this.dataSource.filter = value;
     
    }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  onClose(filter){
    
    let idx= this.selectedFilters.indexOf('filter');
    this.selectedFilters.splice(idx,1);
    this.filterOptions.push({id:idx, value: filter})
   //  this.selectedFilters.filter(row=> row.)
  }
  onChecked(row){
    event.stopPropagation();
    this.showdelteIcon = true;
    this.rowsToDelete.push(row);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  onDeletRow() {
    this.selection.selected.forEach(item => {
      let index: number = this.tabledata.findIndex(d => d === item);
      this.tabledata.splice(index,1)
      this.dataSource = new MatTableDataSource<Element>(this.tabledata);
    });
    this.selection = new SelectionModel<Element>(true, []);
    this.dataSource.sort = this.sort; 
    this.showdelteIcon = false;
    this.dataSource.paginator = this.paginator;
    this.rowsToDelete =[];
  }
 
}

