import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SampleOssType} from '../../core/http-entity';


@Component({
  templateUrl: './data-manage-add-sample.component.html',
  styleUrls: ['./data-manage-add-sample.component.less']
})
export class DataManageAddSampleComponent implements OnInit {
  @Input()
  sampleUpId: number;
  addForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.addForm = this.fb.group({
      sampleTypeName: [null, [Validators.required, Validators.maxLength(45)]],
      isLeaf: [0, [Validators.required]],
    });
  }

  getAddFormValue(): SampleOssType {
    if (this.addForm.valid) {

      const formValue = this.addForm.value;
      return {
        imageCount: 0,
        isLeaf: false,
        id: formValue.id,
        sampleTypeNumber: 0,
        sampleTypeName: formValue.sampleTypeName,
        sampleUpId: this.sampleUpId,
        samplePath: formValue.samplePath
      };
    }
    return null;
  }


}
