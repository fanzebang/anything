import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginAction} from "../../state/login.action";
import {Store} from "@ngxs/store";

@Component({
  template: `
    <div style="color: white;">登录中....</div>`
})
export class SsoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(paramMap => {
      if (paramMap.has('jwt')) {
        const jwt = paramMap.get('jwt');
        localStorage.setItem('Bearer', jwt);
        this.store.dispatch(new LoginAction(jwt)).subscribe(() => {
          this.router.navigate(['/console/data-manage']);
        });
      }
    })

    this.route.fragment.subscribe(fragments => {
      console.log('fragments is :', fragments.split("#"));
      var fragments1:any = fragments.split("#")

      localStorage.setItem('sampleResourcePath', fragments1[1]);
      localStorage.setItem('Bearer', fragments1[0]);
      localStorage.setItem('targetRecognizePath', fragments1[2]);
      this.store.dispatch(new LoginAction(fragments1[0])).subscribe(() => {
        this.router.navigate(['/console/data-manage']);
      });
    })
  }


}
