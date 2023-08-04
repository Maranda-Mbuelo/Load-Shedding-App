import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  @Input() currentStage!: number;
  @Input() schedule!: any[]; // Change 'any[]' to the appropriate type for the schedule data
}
