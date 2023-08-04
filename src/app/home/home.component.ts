import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadsheddingService } from 'src/services/loadshedding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showInformation: boolean = false;
  searchedTown: string = '';
  currentStage!: number;
  schedule!: any[];
  apiResponse!: any;

  constructor(private router: Router, private loadsheddingService: LoadsheddingService) {}
  
  ngOnInit(): void {
    // this.getLoadSheddingData('mafukani');
  }

  onSearchClicked(town: string): void {
    this.searchedTown = town;
    this.getLoadSheddingData(town);
  }

  getLoadSheddingData(place: string): void {
    this.loadsheddingService.getLoadSheddingSchedule(place).subscribe(
      (data) => {
        this.searchedTown = data.town.toString();
        this.currentStage = data.details.currentStage;
        this.schedule = data.schedule;
        this.showInformation = true;
        console.log(data)
        console.log(`passed`);
        this.apiResponse = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toggleConsole() {
    this.router.navigate(['/console'], { queryParams: { apiResponse: JSON.stringify(this.apiResponse) } });
  }

}
