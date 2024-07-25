import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { PortfolioComponent } from './Portfolio/Portfolio.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent,PortfolioComponent,HomeComponent,ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
