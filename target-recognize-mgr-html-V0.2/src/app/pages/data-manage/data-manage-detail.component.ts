import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SampleOssFile} from '../../core/http-entity';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import * as echarts from 'echarts';
import {ECharts} from "echarts";

@Component({
  templateUrl: './data-manage-detail.component.html',
  styleUrls: ['./data-manage-detail.component.less']
})
export class DataManageDetailComponent implements OnInit, AfterViewInit {
  @Input()
  sampleOssId: number;
  @Input()
  secondaryData: SampleOssFile[] = [];
  // imgUrl: string;
  sampleOssFile: SampleOssFile;
  // echartsInstance: ECharts;
  // lineChartOption: any = {};

  @ViewChild('lineEchart')
  lineEchartElm: ElementRef;
  lineEchart: ECharts;


  constructor(private http: HttpClient, private nzMessage: NzMessageService, private nzModal: NzModalService) {

  }

  ngOnInit(): void {
    this.secondaryData.forEach((images) => {
      if (images.id === this.sampleOssId) {
        this.sampleOssFile = images;
        return;
      }
    });

  }

  ngAfterViewInit(): void {
    this.loadCharts();
  }


  nextImage() {
    for (let i = 0; i < this.secondaryData.length; i++) {
      if (this.secondaryData[i].id === this.sampleOssId) {
        if (i < this.secondaryData.length - 1) {
          this.sampleOssFile = this.secondaryData[i + 1];
          this.sampleOssId = this.secondaryData[i + 1].id;
          return;
        } else {
          this.nzMessage.error('已经是最后一张啦!');
        }
      }
    }
  }

  lastImage() {
    for (let i = 0; i < this.secondaryData.length; i++) {
      if (this.secondaryData[i].id === this.sampleOssId) {
        if (i === 0) {
          this.nzMessage.error('已经是第一张啦!');
        } else {
          this.sampleOssId = this.secondaryData[i - 1].id;
          this.sampleOssFile = this.secondaryData[i - 1];
          return;
        }
      }
    }
  }

  loadCharts() {
    const lineChartOption: any = {
      xAxis: {
        // data: [122, 130, 170],
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        data: ['浏览次数', '下载次数', '训练次数'],
        type: 'category',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        interval: 0
      },
      grid: {
        x: 100
      },
      series: [
        {
          data: [122, 130, 170],
          type: 'bar',
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'insideRight'
              },
              color: (params) => {
                console.log('params is :', params);
                const colors = [{
                  start: '#88c9ec',
                  end: '#5599FF'
                }, {
                  start: '#b0efb6',
                  end: '#1ef50f'
                }, {
                  start: '#7f8ae8',
                  end: '#2e31ea'
                }]
                return new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    {offset: 0, color: colors[params.dataIndex].start},
                    {offset: 1, color: colors[params.dataIndex].end}
                  ]
                )
              }
            }
          }

        }
      ]
    };

    if (!this.lineEchart) {
      this.lineEchart = echarts.init(this.lineEchartElm.nativeElement);
    }
    this.lineEchart.setOption(lineChartOption);

  }
}
