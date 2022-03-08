import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.less']
})
export class KeyComponent implements OnInit {

@Input() list:any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.list)

  }

}
