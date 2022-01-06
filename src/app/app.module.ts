import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {UploadAvatarComponent} from './upload/upload-avatar/upload-avatar.component';
import {AngularFireStorage, AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment.prod';
import {ListStudentComponent} from './content/list-student/list-student.component';
import {CreateStudentComponent} from './content/create-student/create-student.component';
import {EditStudentComponent} from './content/edit-student/edit-student.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateComponent } from './content/update/update.component';
import { DialogComponent } from './content/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  },
  {
    path: `listStudent`,
    component: ListStudentComponent
  },
  {
    path: `createStudent`,
    component: CreateStudentComponent
  },
  {
    path: `detail/:id`,
    component: EditStudentComponent
  },
  {
    path: `update-category/:id`,
    component: UpdateComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, UploadAvatarComponent, ListStudentComponent, CreateStudentComponent, EditStudentComponent, UpdateComponent, DialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatNativeDateModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatTableModule, MatPaginatorModule, FormsModule, MatDatepickerModule, MatProgressSpinnerModule, MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
