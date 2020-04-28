import { Component, OnInit } from '@angular/core';
import { PostersService } from 'src/app/services/posters.service';
import { ActivatedRoute , Router} from  '@angular/router'

@Component({
  selector: 'app-poster-detail',
  templateUrl: './poster-detail.component.html',
  styleUrls: ['./poster-detail.component.scss']
})
export class PosterDetailComponent implements OnInit {
  poster;
  matcher;
  isdisabled = false;
  inputValue;
  id;
  constructor( private service: PostersService, private route: ActivatedRoute, 
                private router: Router) { }
  onChnage(value){
  this.router.navigate(['/posters'])
}
  ngOnInit() {
    this.route.params.subscribe((data) =>{
      this.id  = data['id'];
      this.poster = this.service.posters.find(poster =>this.id == poster.id);
      this.inputValue = this.poster.url;
    } )
  }

}
