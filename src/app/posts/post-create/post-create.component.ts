import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {

  // newPost1 = 'Write something here!';

  // onAddPost(postUserInput: HTMLTextAreaElement){
  //   this.newPost1 = postUserInput.value;
  // }

  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter();

  createPost(){
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }
}

