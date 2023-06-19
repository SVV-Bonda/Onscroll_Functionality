import { Component, VERSION } from '@angular/core';
declare let alertify: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  onScroll() {
    alertify.success('scrolled');
    // this.result = [...this.result, ...this.mergeArray]; for Merge array values
  }
}
