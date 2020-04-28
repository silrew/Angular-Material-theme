import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostersService } from 'src/app/services/posters.service';
import { of, combineLatest } from 'rxjs';
import { debounceTime, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-posters-catlog',
  templateUrl: './posters-catlog.component.html',
  styleUrls: ['./posters-catlog.component.scss']
})
export class PostersCatlogComponent implements OnInit {
 posters;
 category;
  constructor(private service : PostersService, private router: ActivatedRoute) { }

  onSearch(value) {
      // let input$ = of(value).pipe(debounceTime(500));
      // let combine = combineLatest([input$, this.service.getPosters()]).pipe(
      //   map(([input, posters])=>{ console.log(posters,input)
      //     posters.filter(poster => input? poster.category.indexOf(input) != -1 :true )
      //   })
      // )
      // combine.subscribe(data => console.log(data))
  }

  ngOnInit() {
    this.service.getPosters().subscribe(data => this.posters = data );
   
    this.router.params.subscribe(data => {
      this.category = data['name'];
      if(this.category){
     this.posters = this.service.posters.filter(row => row.category == this.category);
      }
    })
  
  }

}
