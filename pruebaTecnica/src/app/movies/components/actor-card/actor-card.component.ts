import { Component, Input } from '@angular/core';

export interface Actor {
  image: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styles: [
  ]
})
export class ActorCardComponent  {
  @Input() actor: Actor = { image: '', name: '', role: '' };

}
