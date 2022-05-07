import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginAction} from "../../state/login.action";
import {Store} from "@ngxs/store";

@Component({
  template: `<div style="color: white;">登录中....</div>`
})
export class SsoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store, private router: Router) {
    
  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(paramMap => {
      // console.log(paramMap)
      // if (paramMap.has('jwt')) {
      //   const jwt = paramMap.get('jwt');
      //   localStorage.setItem('Bearer', jwt);
      //   this.store.dispatch(new LoginAction(jwt)).subscribe(() => {
      //     this.router.navigate(['/home']);
      //   });
      // }
    })
  }
}
