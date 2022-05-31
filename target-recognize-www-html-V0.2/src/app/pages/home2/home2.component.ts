import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {HttpResult, User} from '../../core/http-entity';
import {NzModalService} from 'ng-zorro-antd';
import axios from 'axios';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.less']
})
export class Home2Component implements OnInit {


  select1:string= "通用";
  select2:string = "高精度";
  spin:boolean = false;
  constructor(private router:Router,private http:HttpClient,private nzModal: NzModalService,) { }



  ngOnInit(): void {
  }

  inputClick(){

      var inputDom:any = document.querySelector("#fileInput");
      inputDom.click();

  }

  getFile(e:any){
    this.spin = true;
    let files = e.target.files as FileList;;
    var formData = new FormData();
    formData.append("files",files[0]);
    formData.append("algorithmType",this.select1);
    formData.append("modelType",this.select2);
    axios.post(`${environment.API_URL}/v1/detect-api/personalDetect?algorithmType=${this.select1}&modelType=${this.select2}`,formData,{
      headers: {
        'Authorization':'Bearer 123456',
        'TR-Role': 'TR-Api'
      }
    })
    .then((result) => {

        if(result.data.code == 1){
            var resultData = JSON.parse(result.data.data);
            var detectId = resultData[0].detectId;
          this.router.navigate(['/detect2', {detectId: detectId,home2ToDetect2:true}]);

        }else{

       this.nzModal.error({
          nzTitle: '上传失败',
          nzContent: result.data.message
        })

        }

        var inputDom:any = document.querySelector("#fileInput");
        inputDom.value = ""
    })
    .catch(e=>{
      console.log(e)
    })
    .finally(()=>{
      this.spin = false;
    })
 
  }

}
