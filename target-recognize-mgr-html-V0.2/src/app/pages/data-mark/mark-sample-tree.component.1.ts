import {Component, OnInit, ViewChild} from "@angular/core";
import {NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions} from "ng-zorro-antd";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {HttpResult} from "../../core/http-entity";

@Component({
  templateUrl: './mark-sample-tree.component.html',
  styleUrls: ['./mark-sample-tree.component.less']
})
export class MarkSampleTreeComponent implements OnInit {
  @ViewChild('nzTreeComponent', {static: false}) nzTreeComponent!: NzTreeComponent;
  defaultCheckedKeys = ['10020'];
  defaultSelectedKeys = ['10010'];
  defaultExpandedKeys = ['100', '1001'];

  nodes: NzTreeNodeOptions[] = [];

  selectedSampleId: number;
  selectedSamplePath: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(`${environment.API_URL}/v1/sample-oss-types`).subscribe((result: HttpResult<any>) => {
      if (HttpResult.succeed(result.code)) {
        this.nodes = result.data.map((data) => {
          return {
            title: data.data.sampleTypeName,
            key: data.data.id,
            isLeaf: data.isLeaf,
            samplePath: data.data.samplePath
          }
        });
      }
    });
  }

  expandSampleNode(event: NzFormatEmitEvent) {
    if (event.eventName === 'expand') {
      if (event.node.isExpanded && event.node.children.length === 0) {
        // 异步加载下个节点
        this.loadChildrenSamples(event.node.key).subscribe((result: HttpResult<any>) => {
          if (HttpResult.succeed(result.code)) {
            console.log('result is :', result.data);
            const childrenNodes = result.data.map(data => {
              return {
                title: data.data.sampleTypeName,
                key: data.data.id,
                isLeaf: data.isLeaf,
                samplePath: data.data.samplePath
              }
            });
            event.node.addChildren(childrenNodes);
          }
        });
      }
    }
  }

  loadChildrenSamples(sampleUpId: string) {
    return this.http.get(`${environment.API_URL}/v1/sample-oss-types`, {
      params: {
        sampleUpId
      }
    });
  }

  selectSample(event: NzFormatEmitEvent): void {
    this.selectedSampleId = +event.node.key;
    this.selectedSamplePath = event.node.origin.samplePath;
  }


}
