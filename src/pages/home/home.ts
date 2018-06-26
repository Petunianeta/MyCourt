import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teamA = 0;
  teamB = 0;
  constructor(public navCtrl: NavController) {

  }
  onReset(){
    this.teamA = 0;
    this.teamB = 0;
  }
onClickA(){
  this.teamA +=3;
  console.log(this.teamA);
}
onTwoA(){
  this.teamA +=2;
  console.log(this.teamA); 
}
onThrowA(){
  this.teamA +=1;
  console.log(this.teamA);  
}
onClickB(){
  this.teamB +=3;
  console.log(this.teamB);
}
onTwoB(){
  this.teamB +=2;
  console.log(this.teamB); 
}
onThrowB(){
  this.teamB +=1;
  console.log(this.teamB);
}
}
