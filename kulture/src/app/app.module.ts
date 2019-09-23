// tslint:disable-next-line:quotemark
import { BrowserModule } from "@angular/platform-browser";
// tslint:disable-next-line:quotemark
import { NgModule } from "@angular/core";

// tslint:disable-next-line:quotemark
import { AppRoutingModule } from "./app-routing.module";
// tslint:disable-next-line:quotemark
import { AppComponent } from "./app.component";
// tslint:disable-next-line:quotemark
import { FooterComponent } from "./Components/footer/footer.component";

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
