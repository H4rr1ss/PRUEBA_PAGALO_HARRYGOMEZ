import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/core/models/author.interface';


@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styles: [
  ]
})
export class ActorCardComponent  {
  @Input() actor!: Actor;
}
