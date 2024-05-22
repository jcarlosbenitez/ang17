import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
.then(resp => console.log([resp])
)
  .catch((err) => {
    console.log('custom error',new Date())
    console.error(err)});
