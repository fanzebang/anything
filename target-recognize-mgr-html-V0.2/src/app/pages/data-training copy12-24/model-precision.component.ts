import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {DataTrain, HttpResult} from "../../core/http-entity";

@Component({
  templateUrl: './model-precision.component.html',
  styleUrls: ['./model-precision.component.less']
})
export class ModelPrecisionComponent implements OnInit {

  @Input()
  trainId: number;

  dataTrain: DataTrain;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(`${environment.API_URL}/v1/data_train/${this.trainId}`).subscribe((result: HttpResult<DataTrain>) => {
      if (HttpResult.succeed(result.code)) {
        this.dataTrain = result.data;
      }
    });
  }


}
