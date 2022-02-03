import { NgModule } from '@angular/core';
import {Routes,Router,RouterModule} from'@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContractComponent } from './components/contract/contract.component';
import { HireComponent } from './components/hire/hire.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AngularBlogComponent } from './components/angular-blog/angular-blog.component';
import { GithubBlogComponent } from './components/github-blog/github-blog.component';
import { FirebaseBlogComponent } from './components/firebase-blog/firebase-blog.component';
import { DashboardBlogComponent } from './components/dashboard-blog/dashboard-blog.component';
import { CssBlogComponent } from './components/css-blog/css-blog.component';
import { ApicallsBlogComponent } from './components/apicalls-blog/apicalls-blog.component';
import { NotfoundComponent } from './components/notfound/notfound.component';





const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'contract',component:ContractComponent},
  {path:'hire',component:HireComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blog',component:BlogComponent},
  {path:'blogDetails',component:BlogDetailsComponent},
  {path:'angular-blog',component:AngularBlogComponent},
  {path:'github-blog',component:GithubBlogComponent},
  {path:'firebase-blog',component:FirebaseBlogComponent},
  {path:'dashboard-blog',component:DashboardBlogComponent},
  {path:'css-blog',component:CssBlogComponent},
  {path:'apicalls-blog',component:ApicallsBlogComponent},
  {path:'**',component:NotfoundComponent}

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
