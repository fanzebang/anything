import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learningSystems';
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
	height: number = 100;
  constructor(private router:Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var collectionData:any = localStorage.getItem("collectionData")

    if(!collectionData){
      this.router.navigate(['/login']);
    }
   
  }
}
