import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.less']
})
export class WorldComponent implements OnInit {

  @Input() list:any;

  constructor() { }

  ngOnInit(): void {

  }

}
