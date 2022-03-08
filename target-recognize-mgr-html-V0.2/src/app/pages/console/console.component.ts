import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {HttpClient} from '@angular/common/http';
import {HttpResult, User} from '../../core/http-entity';
import {environment} from '../../../environments/environment';

@Component({
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less']
})
export class ConsoleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private store: Store,
              private router: Router, private httpClient: HttpClient) {
  }

  user: User;

  ngOnInit(): void {
    this.httpClient.get(`${environment.API_URL}/v1/users/0`).subscribe((result: HttpResult<User>) => {
      if (HttpResult.succeed(result.code)) {
        this.user = result.data;
        localStorage.setItem('userInfo', JSON.stringify(this.user));
      }
    });
  }

  // 从缓存中拿去用户数据

}
