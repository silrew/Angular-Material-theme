import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostersService {
posters = [  {
  "id": 17,
  "length": 364,
  "width": 49,
  "category": 'flowers',
  "url": 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 328.74,
  "stock": 11
}, {
  "id": 18,
  "length": 582,
  "width": 34,
  "category":'flowers',
  "url": 'https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 482.24,
  "stock": 65
}, {
  "id": 19,
  "length": 285,
  "width": 56,
  "category": 'flowers',
  "url": 'https://images.pexels.com/photos/358429/pexels-photo-358429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/358429/pexels-photo-358429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 263.93,
  "stock": 36
}, {
  "id": 20,
  "length": 88,
  "width": 80,
  "category": 'flowers',
  "url": 'https://images.pexels.com/photos/8172/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/8172/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 441.69,
  "stock": 77
},
{
  "id": 21,
  "length": 196,
  "width": 25,
  "category": 'animals',
  "url": 'https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 473.52,
  "stock": 51
}, {
  "id": 22,
  "length": 739,
  "width": 21,
  "category":'animals',
  "url": 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 298.3,
  "stock": 2
}, {
  "id": 23,
  "length": 495,
  "width": 94,
  "category":'animals',
  "url": 'https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 297.68,
  "stock": 97
}, {
  "id": 24,
  "length": 727,
  "width": 68,
  "category":'animals',
  "url": 'https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 310.2,
  "stock": 10
},{
  "id": 1,
  "length": 280,
  "width": 44,
  "category": 'thanksgiving',
  "url": 'https://images.pexels.com/photos/773124/pexels-photo-773124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/773124/pexels-photo-773124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 324.73,
  "stock": 98
}, {
  "id": 2,
  "length": 267,
  "width": 28,
  "category":'thanksgiving',
  "url": 'https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 366.85,
  "stock": 95
}, {
  "id": 3,
  "length": 550,
  "width": 33,
  "category": 'thanksgiving',
  "url": 'https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/248469/pexels-photo-248469.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 391.41,
  "stock": 52
}, {
  "id": 4,
  "length": 622,
  "width": 99,
  "category": 'thanksgiving',
  "url": 'https://images.pexels.com/photos/989704/pexels-photo-989704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/989704/pexels-photo-989704.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 296.91,
  "stock": 17
}, {
  "id": 5,
  "length": 798,
  "width": 17,
  "category": 'thanksgiving',
  "url": 'https://images.pexels.com/photos/1437655/pexels-photo-1437655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1437655/pexels-photo-1437655.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 308.56,
  "stock": 78
}, {
  "id": 6,
  "length": 791,
  "width": 93,
  "category": 'nature',
  "url": 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 312.09,
  "stock": 52
}, {
  "id": 7,
  "length": 753,
  "width": 43,
  "category": 'nature',
  "url": 'https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 403.9,
  "stock": 85
}, {
  "id": 8,
  "length": 778,
  "width": 80,
  "category": 'nature',
  "url": 'https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 336.55,
  "stock": 68
}, {
  "id": 9,
  "length": 687,
  "width": 55,
  "category": 'nature',
  "url": 'https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 475.3,
  "stock": 7
},
{
  "id": 13,
  "length": 351,
  "width": 40,
  "category": 'couples',
  "url": 'https://images.pexels.com/photos/712468/pexels-photo-712468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/712468/pexels-photo-712468.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 495.07,
  "stock": 12
}, {
  "id": 14,
  "length": 675,
  "width": 95,
  "category": 'couples',
  "url": 'https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 320.36,
  "stock": 40
}, {
  "id": 15,
  "length": 675,
  "width": 68,
  "category": 'couples',
  "url": 'https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 458.87,
  "stock": 65
}, {
  "id": 16,
  "length": 196,
  "width": 56,
  "category": 'flowers',
  "url": 'https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 399.21,
  "stock": 60
}, {
  "id": 10,
  "length": 159,
  "width": 88,
  "category": 'nature',
  "url": 'https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 479.88,
  "stock": 17
}, {
  "id": 11,
  "length": 72,
  "width": 79,
  "category": 'nature',
  "url": 'https://images.pexels.com/photos/2275453/pexels-photo-2275453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/2275453/pexels-photo-2275453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 383.58,
  "stock": 68
}, {
  "id": 12,
  "length": 66,
  "width": 97,
  "category":'couples',
  "url": 'https://images.pexels.com/photos/773124/pexels-photo-773124.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/773124/pexels-photo-773124.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 297.52,
  "stock": 99
},
  {
  "id": 25,
  "length": 703,
  "width": 48,
  "category": 'animals',
  "url": 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 1x, https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500 2x',
  "price": 266.5,
  "stock": 44
}, {
  "id": 26,
  "length": 282,
  "width": 93,
  "category": 26,
  "url": 26,
  "price": 396.65,
  "stock": 76
}, {
  "id": 27,
  "length": 72,
  "width": 55,
  "category": 27,
  "url": 27,
  "price": 387.28,
  "stock": 100
}, {
  "id": 28,
  "length": 36,
  "width": 50,
  "category": 28,
  "url": 28,
  "price": 252.31,
  "stock": 62
}, {
  "id": 29,
  "length": 610,
  "width": 87,
  "category": 29,
  "url": 29,
  "price": 407.49,
  "stock": 36
}, {
  "id": 30,
  "length": 420,
  "width": 45,
  "category": 30,
  "url": 30,
  "price": 328.65,
  "stock": 14
}, {
  "id": 31,
  "length": 674,
  "width": 15,
  "category": 31,
  "url": 31,
  "price": 335.56,
  "stock": 88
}, {
  "id": 32,
  "length": 286,
  "width": 78,
  "category": 32,
  "url": 32,
  "price": 355.83,
  "stock": 52
}, {
  "id": 33,
  "length": 706,
  "width": 31,
  "category": 33,
  "url": 33,
  "price": 307.64,
  "stock": 58
}, {
  "id": 34,
  "length": 455,
  "width": 77,
  "category": 34,
  "url": 34,
  "price": 416.55,
  "stock": 92
}, {
  "id": 35,
  "length": 198,
  "width": 30,
  "category": 35,
  "url": 35,
  "price": 358.94,
  "stock": 28
}, {
  "id": 36,
  "length": 547,
  "width": 18,
  "category": 36,
  "url": 36,
  "price": 417.44,
  "stock": 60
}, {
  "id": 37,
  "length": 668,
  "width": 33,
  "category": 37,
  "url": 37,
  "price": 335.8,
  "stock": 98
}, {
  "id": 38,
  "length": 478,
  "width": 18,
  "category": 38,
  "url": 38,
  "price": 476.3,
  "stock": 59
}, {
  "id": 39,
  "length": 111,
  "width": 78,
  "category": 39,
  "url": 39,
  "price": 296.03,
  "stock": 66
}, {
  "id": 40,
  "length": 250,
  "width": 85,
  "category": 40,
  "url": 40,
  "price": 322.54,
  "stock": 9
}]

  constructor() { }
  public postersSubject = new BehaviorSubject(this.posters)
  public posters$ = this.postersSubject.asObservable();

 getPosters() {
   return this.posters$;
 }

 getPostersByCategory(category) {
   let  filteredPosters = this.posters.filter(poster =>  poster.category == category);
   this.postersSubject.next(filteredPosters);
 }


}
