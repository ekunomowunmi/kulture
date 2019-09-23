// tslint:disable-next-line:quotemark
import { FooterComponent } from "./Components/footer/footer.component";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";
// tslint:disable-next-line:quotemark
import { Routes, RouterModule } from "@angular/router";

// tslint:disable-next-line:quotemark
const routes: Routes = [{ path: "footer", component: FooterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
