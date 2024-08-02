import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paigonpig-front-end';
  tasks: any[] = [];

  constructor(private apiService: ApiService) {
    this.apiService.getTasks().subscribe(task => {
      this.tasks.push(task.message);
      console.log(task);
    });
  }
}
