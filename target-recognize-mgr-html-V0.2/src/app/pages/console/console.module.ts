import {NgModule} from "@angular/core";
import {ConsoleComponent} from "./console.component";
import {ConsoleRoutingModule} from "./console-routing.module";

const APP_COMPONENT = [ConsoleComponent]

@NgModule({
  declarations: [...APP_COMPONENT],
  imports: [ConsoleRoutingModule]
})
export class ConsoleModule {

}
