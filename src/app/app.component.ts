import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [HeaderComponent, MainPageComponent, FooterComponent]
})
export class AppComponent {
  title = 'portfolio';
}
