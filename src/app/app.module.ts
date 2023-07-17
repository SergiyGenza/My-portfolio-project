import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedModule } from './shared/shared.module';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ProjectsPageComponent,
    AboutMePageComponent,
    TechStackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
