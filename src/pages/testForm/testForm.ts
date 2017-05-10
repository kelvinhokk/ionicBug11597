import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'testForm',
  templateUrl: 'testForm.html'
})
export class TestFormPage {
  data = {};

  constructor(public navCtrl: NavController) {
  }
  onSubmit(form: NgForm){
    console.log(form.valid);
  }

}
