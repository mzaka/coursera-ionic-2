import { Component,Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../shared/comment';
import { Dish } from '../../shared/dish';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  CommentForm: FormGroup;
  comment: Comment;
  dish: Dish;


  constructor(public navCtrl: NavController, public navParams: NavParams,
      @Inject('BaseURL') private BaseURL,
       public viewCtrl: ViewController,
       private formBuilder: FormBuilder) {
    this.dish = navParams.get('dish');
    console.log(this.dish)
    this.CommentForm = this.formBuilder.group({
        rating: 2,
        comment: '',
        author: ['', Validators.required],
        date:''
      });
  }

  onSubmit() {

    //console.log(this.CommentForm.value);
    this.comment = this.CommentForm.value;
    var d = new Date();
    this.comment.date = d.toISOString();
    //alert(this.dish.id);
    //this.dish.comments.push(this.comment);
    //console.log(this.comment);
    let data = this.comment;

    this.viewCtrl.dismiss(data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }



  dismiss() {
    this.viewCtrl.dismiss();
  }

}
