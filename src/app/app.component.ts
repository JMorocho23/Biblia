import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { PadrePage } from '../pages/padre/padre';
import { HijoPage } from '../pages/hijo/hijo';
import { EspSantoPage } from '../pages/esp-santo/esp-santo';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(private screenOrientation: ScreenOrientation, private menuCtrl: MenuController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Padre', component: PadrePage },
      { title: 'Hijo', component: HijoPage },
      { title: 'Espíritu Santo', component: EspSantoPage },
      { title: 'Acerca De', component: AcercaDePage } 
    ];
 
   
  }
 
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  home() {
    this.nav.setRoot(HomePage);
    this.menuCtrl.close();
  }

  padre() {
    this.nav.setRoot(PadrePage);
    this.menuCtrl.close();
  } 
  
  hijo() {
    this.nav.setRoot(HijoPage);
    this.menuCtrl.close();
  } 
  
  esp() {
    this.nav.setRoot(EspSantoPage);
    this.menuCtrl.close();
  }   
  
  acerca() {
    this.nav.setRoot(AcercaDePage);
    this.menuCtrl.close();
    }
    
}
