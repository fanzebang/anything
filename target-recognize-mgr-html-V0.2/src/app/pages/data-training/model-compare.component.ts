import {Component, Input} from "@angular/core";
import {DataTrain} from "../../core/http-entity";

@Component({
  templateUrl: './model-compare.component.html',
  styleUrls: ['./model-compare.component.less']
})
export class ModelCompareComponent {
  @Input()
  comparingDataTrainList: DataTrain[] = [];

}
