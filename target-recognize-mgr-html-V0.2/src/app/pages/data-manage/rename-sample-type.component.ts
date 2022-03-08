import {Component, Input, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: './rename-sample-type.component.html',
  styleUrls: ['./rename-sample-type.component.less']
})
export class RenameSampleTypeComponent implements OnInit {

  @Input()
  sampleTypeName: string;

  addForm: FormGroup;

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }


  buildForm(): void {
    this.addForm = this.fb.group({
      sampleTypeName: [this.sampleTypeName, [Validators.required, Validators.maxLength(45)]],
    });
  }

  getNewName() {
    for (const i in this.addForm.controls) {
      this.addForm.controls[i].markAsDirty();
      this.addForm.controls[i].updateValueAndValidity();
    }
    if (this.addForm.valid) {
      return this.addForm.value.sampleTypeName;
    }
    return null;
  }
}
