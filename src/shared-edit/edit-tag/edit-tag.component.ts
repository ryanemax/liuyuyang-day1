import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {
  @Output() tagsChange = new EventEmitter<any>();
  @Input() tags:Array<string> = [];

  tag:string = ""
  constructor() { }
  addTag(){
    
    if(this.tag==""){
      alert("请填写标签")
    }else{
      if(!this.tags){
        this.tags = []
      }
      this.tags.push(this.tag)
    }
    this.tagsChange.emit(this.tags)
  }
  deleteTag(tag){
    let index = this.tags.indexOf(tag)
    this.tags.splice(index,1)
    this.tagsChange.emit(this.tags)
  }
  ngOnInit() {
  }

}
