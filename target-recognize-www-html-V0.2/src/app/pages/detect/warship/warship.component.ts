import {Component, OnInit} from "@angular/core";
import {Select} from "@ngxs/store";
import {RecognizeState, RecognizeStateModel} from "../../../state/recognize.state";
import {Observable, Subscription} from "rxjs";
import {DetectHistory, Kms} from "../../../core/http-entity";

@Component({
  selector: '[app-warship]',
  templateUrl: './warship.component.html',
  styleUrls: ['./warship.component.less']
})
export class WarshipComponent implements OnInit {

  @Select(RecognizeState)
  recognize$: Observable<RecognizeStateModel>;
  recognizeSubscription: Subscription;

  kms: Kms[] = [];

  selectedTab = 1;

  ngOnInit(): void {
    this.recognizeSubscription = this.recognize$.subscribe((recognizeStateModel) => {
      if (recognizeStateModel == null || recognizeStateModel.recognizeJson == null) {
        return;
      }
      this.kms = JSON.parse(recognizeStateModel.recognizeJson) as Kms[];
      // console.log('----->kms', recognizeData);
    });
  }
}
