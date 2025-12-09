import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root Angular component
 * Contains the router outlet for navigation between main and map components
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
