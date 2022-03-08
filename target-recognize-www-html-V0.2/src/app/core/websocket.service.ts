import {Injectable} from "@angular/core";
import {interval, Observable, Subject, Subscription} from "rxjs";

@Injectable()
export class WebsocketService {
  messageSubject: Subject<string>;
  serverTimeoutSubscription: Subscription;
  period = 60 * 1000 * 10;                        // 10分钟检查一次

  websocket: WebSocket;
  connectSuccess = false;
  reconnectFlag = false;
  reconnectSubscription: Subscription;
  reconnectPeriod = 5 * 1000; // 重连失败,则5秒钟重连一次
  url: string;

  runTimeSubscription: Subscription; // 记录运行连接subscription
  runTimePeriod = 60 * 10000;                     // 记录运行连接时间
  constructor() {
    this.messageSubject = new Subject<string>();
    console.log('开始检测心跳');
    this.heartCheckStart();

  }

  /**
   * 开始心跳检测
   */
  heartCheckStart() {
    this.serverTimeoutSubscription = interval(this.period).subscribe((val: number) => {
      if (this.websocket !== null && this.websocket.readyState === 1) {
        console.log(val, '连接状态，发送消息保持连接');
      } else {
        // 停止心跳
        this.heartCheckStop();
        // 开始重连
        this.reconnect();
        console.log('连接已断开，重新连接');
      }
    });
  }

  /**
   * 停止心跳检测
   */
  heartCheckStop() {
    if (this.serverTimeoutSubscription !== undefined && this.serverTimeoutSubscription !== null) {
      this.serverTimeoutSubscription.unsubscribe();
    }
  }

  /**
   * 开始重新连接
   */
  reconnect() {
    // 如果已重连,则直接return,避免重复连接
    if (this.connectSuccess) {
      this.stopReconnect();
      console.log('已经连接成功，停止重连');
      return;
    }
    // 如果正在连接中,则直接return,避免产生多个轮训事件
    if (this.reconnectFlag) {
      console.log('正在重连,直接返回');
      return;
    }

    // 开始重连
    this.reconnectFlag = true;
    //  如果没能成功连接,则定时重连
    this.reconnectSubscription = interval(this.reconnectPeriod).subscribe(async (val) => {
      console.log(`重连:${val}次`);
      const url = this.url;
      // 重新连接
      this.connect(url);
    });

  }

  /**
   * 停止重连
   */
  stopReconnect() {
    // 连接标识置为false
    this.reconnectFlag = false;
    // 取消订阅
    if (this.reconnectSubscription !== undefined && this.reconnectSubscription !== null) {
      this.reconnectSubscription.unsubscribe();
    }
  }

  /**
   * 创建新连接
   * @param url
   */
  connect(url: string): Observable<any> {
    if (!!url) {
      this.url = url;
    }

    // 创建websocket对象
    return this.createWebSocket();
  }

  /**
   * 创建websocket
   */
  createWebSocket(): Observable<any> {
    // 如果没有建立过连接，才建立连接并且添加时间监听
    // this.websocket = new WebSocket();
    this.websocket = new WebSocket(this.url);
    // 建立连接成功
    this.websocket.onopen = (e: Event) => this.onOpen(e);
    this.websocket.onmessage = (e: MessageEvent) => this.onMessage(e);
    this.websocket.onclose = (e: CloseEvent) => this.onClose(e);
    this.websocket.onerror = (e: Event) => this.onError(e);

    return this.messageSubject;
  }

  /**
   * 连接打开
   */
  onOpen(ev: Event) {
    console.log('websocket 已连接');
    // 设置连接成功
    this.connectSuccess = true;
    // 如果是重连中
    if (this.reconnectFlag) {
      // 1.停止重连
      this.stopReconnect();
      // 2.重新开启心跳
      this.heartCheckStart();
      // 3.重新开始计算运行时间
      this.calcRunTime();
    }
  }

  /**
   * 收到消息
   */
  onMessage(ev: MessageEvent) {
    // console.log('接收到的消息', ev.data);
    // 将接受到的消息发布出去
    // console.log('接收到消息时间', new Date().getTime());
    this.messageSubject.next(ev.data);
  }

  onClose(ev: CloseEvent) {
    console.log('连接关闭', ev);
    this.connectSuccess = false;
    this.websocket.close();

    // 关闭时开始重连
    this.reconnect();
    this.stopRunTime();
  }

  onError(ev: Event) {
    // 出现异常时一定会进onClose,所以只在onClose做一次重连动作
    console.log('连接异常', ev);
    this.connectSuccess = false;
  }

  /**
   * 开始计算运行时间
   */
  calcRunTime() {
    this.runTimeSubscription = interval(this.runTimePeriod).subscribe(period => {
      console.log('运行时间', `${period}分钟`);
    });
  }

  /**
   * 停止计算运行时间
   */
  stopRunTime() {
    if (this.runTimeSubscription !== undefined && this.runTimeSubscription !== null) {
      this.runTimeSubscription.unsubscribe();
    }
  }
}
