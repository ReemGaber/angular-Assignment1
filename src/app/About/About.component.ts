import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from '../Portfolio/Portfolio.component';


@Component({
  selector: 'app-About',
  standalone: true,
  imports: [RouterOutlet,PortfolioComponent],
  templateUrl: './About.component.html',
  styleUrl: './About.component.css'
})
export class AboutComponent {
}
