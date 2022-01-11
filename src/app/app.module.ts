import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HireComponent } from './components/hire/hire.component';

import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContractComponent } from './components/contract/contract.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HireComponent,
    PortfolioComponent,
    ContractComponent,
    ContactComponent,
    NotfoundComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
