import { Component } from '@angular/core';
import { Prodect } from '../prodect';
@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent {
  prodects:Prodect[]=[
    {img:'./assets/image/cake.png',decs:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt obcaecati recusandae!',title:'TASTY CAKE'},
    {img:'./assets/image/cabin.png',decs:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt obcaecati recusandae!',title:'LOG CABIN'},
    {img:'./assets/image/circus.png',decs:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt obcaecati recusandae!',title:'CIRCUS TENT'},
    {img:'./assets/image/game.png',decs:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt obcaecati recusandae!',title:'CONTROLLER'},
    {img:'./assets/image/safe.png',decs:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt obcaecati recusandae!',title:'LOCKED SAFE'},
    {img:'./assets/image/submarine.png',decs:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia incidunt obcaecati recusandae!',title:'SUBMARINE'},
  ]
  prodectDetails:any={}
  show(p:any){
   this.prodectDetails=p
  }
}
