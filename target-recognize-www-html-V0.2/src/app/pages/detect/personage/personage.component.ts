import {Component, OnInit} from "@angular/core";
import {Select} from "@ngxs/store";
import {RecognizeState, RecognizeStateModel} from "../../../state/recognize.state";
import {Observable, Subscription} from "rxjs";
import {Kms} from "../../../core/http-entity";
import {environment} from "../../../../environments/environment.prod";

@Component({
  selector: '[app-personage]',
  templateUrl: './personage.component.html',
  styleUrls: ['./personage.component.less']
})
export class PersonageComponent implements OnInit {

  kmsUrl: string;
  @Select(RecognizeState)
  recognize$: Observable<RecognizeStateModel>;
  recognizeSubscription: Subscription;

  kms: Kms[] = [];

  ngOnInit(): void {
    console.log(environment)
    this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
      if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
        return;
      }
      this.kms = JSON.parse(recognizeStateModel.recognizeJson) as Kms[];
      if (this.kms[0]){
        console.log('测试',this.kms[0]);
        if (!this.kmsUrl){
          // this.kmsUrl = environment.KMS_URL + this.kms[0].id;
          console.log('结果', this.kmsUrl);
        }
      }
    });
  }

}
