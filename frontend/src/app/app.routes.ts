import { Routes } from '@angular/router';
import { ListFeedsComponent } from "./components/list-feeds/list-feeds.component";
import { AddFeedComponent } from "./components/add-feed/add-feed.component";
import { InvalidDataComponent } from "./components/invalid-data/invalid-data.component";

export const routes: Routes = [
    {path:'feeds', component: ListFeedsComponent},
    {path:'add-feed', component: AddFeedComponent},
    {path:'invalid-data', component: InvalidDataComponent},
    {path:'', redirectTo: '/feeds', pathMatch: 'full'},
];
