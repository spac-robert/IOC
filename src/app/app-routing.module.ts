import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayComponent} from "./play/play.component";
import {HomeComponent} from "./home/home.component";
import {Lvl1Component} from "./lvl1/lvl1.component";
import {Lvl2Component} from "./lvl2/lvl2.component";
import {Lvl3Component} from "./lvl3/lvl3.component";
import {Lvl4Component} from "./lvl4/lvl4.component";
import {Lvl5Component} from "./lvl5/lvl5.component";

//const routes: Routes = [{path: '/play', component: PlayComponent}];
const routes: Routes = [{path: 'play', component: PlayComponent},
  {path: '', component: HomeComponent},
  {path: 'lvl-1', component: Lvl1Component},
  {path: 'lvl-2', component: Lvl2Component},
  {path: 'lvl-3', component: Lvl3Component},
  {path: 'lvl-4', component: Lvl4Component},
  {path: 'lvl-5', component: Lvl5Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
