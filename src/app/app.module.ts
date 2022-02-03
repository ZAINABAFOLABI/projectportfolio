import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import{AngularFireModule} from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HireComponent } from './components/hire/hire.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContractComponent } from './components/contract/contract.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AngularBlogComponent } from './components/angular-blog/angular-blog.component';
import { GithubBlogComponent } from './components/github-blog/github-blog.component';
import { FirebaseBlogComponent } from './components/firebase-blog/firebase-blog.component';
import { DashboardBlogComponent } from './components/dashboard-blog/dashboard-blog.component';
import { CssBlogComponent } from './components/css-blog/css-blog.component';
import { ApicallsBlogComponent } from './components/apicalls-blog/apicalls-blog.component';

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
    BlogComponent,
    BlogDetailsComponent,
    AngularBlogComponent,
    GithubBlogComponent,
    FirebaseBlogComponent,
    DashboardBlogComponent,
    CssBlogComponent,
    ApicallsBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
