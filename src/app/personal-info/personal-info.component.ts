import { Component, OnInit , Input, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { SalesRecords } from 'src/app/shared/data/sales-records';
import { SalesRecordsService } from 'src/app/services/sales-records.service';
import { filter, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  user;
  salesRec: SalesRecords;
  users;
  id;
  isCustomer;
  model ={};
  constructor(private route: ActivatedRoute, private router:Router,
               private service: SalesRecordsService   ) {
                this.users = this.service.getOrdersArray();
  }

  onSubmit(form){
   this.user.person.first_name = form.name;
    this.user.person.last_name = form.last_name;
    this.user.person.email = form.email;
    let idx = parseInt(this.id) -1;
    this.users[idx] = this.user;
    this.service.salesRecordsSubject.next(this.users);
    if(this.isCustomer){
      this.router.navigate(['/customers'])
    }else{
    this.router.navigate(['/orders']).then(()=>{
    
    });

  }
    }
    ngOnInit() { 
    this.isCustomer = this.route.snapshot.paramMap.get('customer');
    this.route.params.subscribe(data =>{ console.log(data)
     this.id = data['id'];
      this.user = this.users.find(person => person.id == this.id);
    })
  }

}
