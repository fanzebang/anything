import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-target2-label',
  templateUrl: './target2-label.component.html',
  styleUrls: ['./target2-label.component.less']
})
export class Target2LabelComponent implements OnInit {

  @Input() list:any;

  constructor() { }

  ngOnInit(): void {

    console.log(this.list)

  }

}
