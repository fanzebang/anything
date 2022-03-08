import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NzMessageService, NzModalService, NzTreeNode} from 'ng-zorro-antd';
import {environment} from '../../../../environments/environment';
import {HttpResult, SampleOssFile, StatInfo} from '../../../core/http-entity';
import {filter} from 'rxjs/operators';

@Component({
  templateUrl: './not-leaf.data-manage.component.html',
  styleUrls: ['./not-leaf.data-manage.component.less']
})
export class NotLeafDataManageComponent implements OnInit {


  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  sampleUpId: any;
  dataSet: SampleOssFile[] = [];
  titleData: NzTreeNode[] = [];
  statInfo: StatInfo;

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if (params.has('sampleUpId')) {
          this.sampleUpId = params.get('sampleUpId');
          this.loadInitialize();
          this.loadImage();
        }
      },
    );
    this.loadStatInfo();
  }

  // 携带一个分类ID 去查询
  loadImage(): void {
    let httpParams;
    if (isNaN(+this.sampleUpId)) {
      httpParams = new HttpParams().append('sampleTypeName', 'KJG');
      this.http.get(`${environment.API_URL}/v1/sample-oss-file/type/0`, {params: httpParams})
        .subscribe((result: HttpResult<SampleOssFile[]>) => {
          if (HttpResult.succeed(result.code)) {
            this.dataSet = result.data;
            this.dataSet.forEach((x:any)=>{
              if(x.markStatus == 0){
                x.markStatusText = "未标注"
              }else if(x.markStatus == 1){
                x.markStatusText = "已标注"
              }else if(x.markStatus == 2){
                x.markStatusText = "标注错误" 
              }else if(x.markStatus == 3){
                x.markStatusText = "正确的标注(审核通过)" 
              }else if(x.markStatus == 4){
                x.markStatusText = "客户端图片检测纠错过来的数据" 
              }
            })
          }
        });
    } else {
      this.http.get(`${environment.API_URL}/v1/sample-oss-file/type/${this.sampleUpId}`)
        .subscribe((result: HttpResult<SampleOssFile[]>) => {
          if (HttpResult.succeed(result.code)) {
            this.dataSet = result.data;
            this.dataSet.forEach((x:any)=>{
              if(x.markStatus == 0){
                x.markStatusText = "未标注"
              }else if(x.markStatus == 1){
                x.markStatusText = "已标注"
              }else if(x.markStatus == 2){
                x.markStatusText = "标注错误" 
              }else if(x.markStatus == 3){
                x.markStatusText = "正确的标注(审核通过)" 
              }else if(x.markStatus == 4){
                x.markStatusText = "客户端图片检测纠错过来的数据" 
              }
            })
          }
        });
    }


  }

  loadInitialize(): void {
    let httpParams;
    if (isNaN(+this.sampleUpId)) {
      httpParams = new HttpParams().append('sampleTypeName', 'KJG');
    } else {
      httpParams = new HttpParams().append('sampleUpId', this.sampleUpId);
    }
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {params: httpParams})
      .subscribe((result: HttpResult<any>) => {
        if (HttpResult.succeed(result.code)) {
          const visibleLight = result.data.map((samples: any) => {
            return new NzTreeNode({
              title: samples.data.sampleTypeName + '    ' + samples.count,
              key: samples.data.id + '',
              data: samples.data,
              isLeaf: samples.data.isLeaf,
              imageCount: samples.imageCount,
            });
          });
          this.titleData = visibleLight;
        }
      });
  }

  loadStatInfo(): void {
    this.http.get(`${environment.API_URL}/v1/stat-infos/`).subscribe((result: HttpResult<StatInfo>) => {
      if (HttpResult.succeed(result.code)) {
        this.statInfo = result.data;
      }
    });
  }

  scrollChange(event: any, key: string): void {
    const id = event.target.children[event.target.childElementCount - 1].id;
    const clientHeight = event.target.clientHeight;
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight;
    // console.log(Math.ceil(scrollTop + clientHeight) + ' ---->' + scrollHeight);
    if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
      const params = new HttpParams().append('typeId', key);
      this.http.get(`${environment.API_URL}/v1/sample-oss-file/${id}`, {params}).subscribe((result: HttpResult<SampleOssFile[]>) => {
        if (HttpResult.succeed(result.code)) {



          result.data.map((s:any) => {
            if(s.markStatus == 0){
              s.markStatusText = "未标注"
            }else if(s.markStatus == 1){
              s.markStatusText = "已标注"
            }else if(s.markStatus == 2){
              s.markStatusText = "标注错误" 
            }else if(s.markStatus == 3){
              s.markStatusText = "正确的标注(审核通过)" 
            }else if(s.markStatus == 4){
              s.markStatusText = "客户端图片检测纠错过来的数据" 
            }
            this.dataSet.push(s);
          });
        }
      });
    }
  }

  toDetail(imageId: number): void {
    this.router.navigate(['../detail', {imageId}], {relativeTo: this.route});
    console.log('点击了', imageId);
  }

}
