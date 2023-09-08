import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(
    private router: Router
    ) {}
  images : any[]=[
    "https://tse2.mm.bing.net/th?id=OIP.l0Ib4mvh-tZzinUeXD7BzQHaEo&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.xM17SvUvQiqcaalnLPwB5AHaFj&pid=Api&P=0&h=180",
    "https://tse4.mm.bing.net/th?id=OIP.CO5Vgxd9ZwpHzEdeln9JVQHaEo&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.rsl7XshHl1VZY52TKkIkQgHaE8&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.rsl7XshHl1VZY52TKkIkQgHaE8&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.rsl7XshHl1VZY52TKkIkQgHaE8&pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th?id=OIP.eEbPE46M70VJPFoaZzwoKAHaEo&pid=Api&P=0&h=180"
  ]

  detail(){
    //this.router.navigate(['./details.component.html']);
    /*this.router.navigate(['./details.component.html'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log("errrrorrrr",err) // when there's an error
    });*/
    alert("hey!!!!!");
  }

  ngOnInit() {

  }

}
