import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    GridModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const elm = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('product-list', elm);
  }
}
