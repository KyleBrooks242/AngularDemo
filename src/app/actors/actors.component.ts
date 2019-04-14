import { Component, OnInit } from '@angular/core';
import { Actor } from '../actor';
import { ACTORS } from '../mock-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors = ACTORS;
  selectedActor : Actor;

  constructor() { }

  ngOnInit() {

  }


  onSelect(actor: Actor)
  {
    console.log("toggling Display Image Value");
    this.selectedActor = actor;
    var button = this.selectedActor.name;
    this.selectedActor.displayImage = !this.selectedActor.displayImage;
    if (document.getElementById(button).innerText == "Show Image")
    {
      document.getElementById(button).innerText = "Hide Image";
    }
    else
    {
      document.getElementById(button).innerText = "Show Image";
    }
  }

}
