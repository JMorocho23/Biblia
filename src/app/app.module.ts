import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { PadrePage } from '../pages/padre/padre';
import { HijoPage } from '../pages/hijo/hijo';
import { EspSantoPage } from '../pages/esp-santo/esp-santo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONF } from './firebase.credentials';
import { Hijo } from '../services/Hijo.service';
import { EspirituSanto } from '../services/EspirituSanto.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AcercaDePage,
    PadrePage,
    HijoPage,
    EspSantoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONF),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,    
    AcercaDePage,
    PadrePage,
    HijoPage,
    EspSantoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Hijo,
    EspirituSanto
  ]
})
export class AppModule {}
