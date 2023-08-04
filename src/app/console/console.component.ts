import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface ApiResponse {
  details: {
    currentStage: number;
    reason: string;
    nextStages: any[]; // Use a specific type for nextStages if possible
  };
  schedule: {
    date: string;
    schedule: string[];
  }[];
  town: string;
}

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {
  apiResponse!: ApiResponse; // Use the ApiResponse interface here

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['apiResponse']) {
        this.apiResponse = JSON.parse(params['apiResponse']) as ApiResponse; // Cast to ApiResponse
      }
    });
  }

  goBack(): void {
    // Go back to the last page in the browser's history
    this.router.navigate(['/home']);
  }
}
