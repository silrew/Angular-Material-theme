import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public reviews = [
    {id:1,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/lonesomelemon/128.jpg?size=32x32', rating: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    { id:2,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg?size=32x32', rating: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    { id: 3,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/teeragit/128.jpg?size=32x32', rating: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    { id:4,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg?size=32x32', rating: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}
  ];

  public new_customers = [
    {id:1, profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/lonesomelemon/128.jpg?size=32x32',name:'Susie Sassy'},
    { id:2,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg?size=32x32', name:'Murli Mayank'},
    { id: 3,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/teeragit/128.jpg?size=32x32', name:'Steven Smith' },
    { id:4,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg?size=32x32', name: 'Sam Samuel' },
    { id:2,profile_pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/aleclarsoniv/128.jpg?size=32x32', name:'Murli Mayank'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
