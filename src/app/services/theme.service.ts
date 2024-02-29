import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkTheme: boolean = false;

  constructor() { }

  public checkUserPreferences(): Observable<any> {
    const preferences = new Observable((observer) => {
      window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        observer.next(this.darkTheme = true);
        observer.next(true);
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        observer.next(this.darkTheme = false);
        observer.next(false);
      }
    })
    return preferences;
  }

  public changeTheme(isApply: boolean): boolean {
    isApply = !isApply;
    isApply ?
      document.documentElement.setAttribute('data-theme', 'dark') :
      document.documentElement.setAttribute('data-theme', 'light');
    return isApply
  }

  // applyTheme(): Observable<any> {
  //   const theme = new Observable((observer) => {
  //     this.darkTheme ?
  //       observer.next(document.documentElement.setAttribute('data-theme', 'dark')) :
  //       observer.next(document.documentElement.setAttribute('data-theme', 'light'));
  //     console.log(this.darkTheme);
  //     observer.next(console.log('observer', this.darkTheme))
  //   })
  //   return theme;
  // }
}
