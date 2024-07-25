//first import componenet package
import { Component } from "@angular/core";

//second component decorator contain componenet info(metadata)
@Component({
    //1-selector-name,2-check stasnd-alone(true),
    //3-imports(if this component use anotehr stand-alone component)
    //4-templateurl this carry html path or template this carry html code not just path
    //5-styleurl this carry css path
    selector:'app-Portfolio',
    standalone: true,
    imports:[],
    templateUrl:'./Portfolio.component.html',
    styleUrl:'./Portfolio.component.css',
})
//after know component info create componenet itself
export class PortfolioComponent
{

}