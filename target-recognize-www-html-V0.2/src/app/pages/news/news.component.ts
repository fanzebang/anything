import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    var iframeDom = document.querySelector("iframe")
    this.route.paramMap.subscribe((params:any) => {

      var iframeDom = document.querySelector("iframe")
          iframeDom.src = params.params.iframe

        
    })
    if(iframeDom.src.split('/')[(iframeDom.src.split('/').length) -1] == 'undefined'){this.router.navigate(['/home']);}
  }

}
