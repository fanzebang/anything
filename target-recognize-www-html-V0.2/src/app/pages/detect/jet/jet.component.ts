import {Component, OnInit} from "@angular/core";
import {Select} from "@ngxs/store";
import {RecognizeState, RecognizeStateModel} from "../../../state/recognize.state";
import {Observable, Subscription} from "rxjs";
import {Kms} from "../../../core/http-entity";

@Component({
  selector: '[app-jet]',
  templateUrl: './jet.component.html',
  styleUrls: ['./jet.component.less']
})
export class JetComponent  implements OnInit{

  selectedTab = 1;

  @Select(RecognizeState)
  recognize$: Observable<RecognizeStateModel>;
  recognizeSubscription: Subscription;

  kms: Kms[] = [];
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
