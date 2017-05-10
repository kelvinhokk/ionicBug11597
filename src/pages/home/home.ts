import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestFormPage } from '../testForm/testForm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goTestPage(): void {
    this.navCtrl.push(TestFormPage);
  }

}
