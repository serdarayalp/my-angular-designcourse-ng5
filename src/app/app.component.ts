import { Component } from '@angular/core';

// This will give us access to the route parameters. (.../:id)
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-designcourse-ng5';
}
