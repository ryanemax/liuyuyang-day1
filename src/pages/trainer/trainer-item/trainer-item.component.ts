import { Component, OnInit, Input  } from '@angular/core';
import { TrainerService } from '../trainer.service'

@Component({
  selector: 'app-trainer-item',
  templateUrl: './trainer-item.component.html',
  styleUrls: ['./trainer-item.component.scss']
})
export class TrainerItemComponent implements OnInit {

  @Input() trainer: any

  trainers: Array<Trainer>
  constructor(private trainServ:TrainerService) {
    
   }

  ngOnInit() {
  }

  delete(trainer){
    this.trainServ.deleteById(trainer.objectId).subscribe(data=>{
        location.href = "/trainer"
    })
  }

}
