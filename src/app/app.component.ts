import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from "./name/name.component";
import { AcademicYearComponent } from "./academic-year/academic-year.component";
import { GoalsComponent } from "./goals/goals.component";
import { HobbiesComponent } from "./hobbies/hobbies.component";
import { TechnologiesComponent } from "./technologies/technologies.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NameComponent, AcademicYearComponent, GoalsComponent, HobbiesComponent, TechnologiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-website';
}
