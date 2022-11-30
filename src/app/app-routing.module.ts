import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultPageComponent } from "./stock-tracker/components/default-page/default-page.component";
import { SentimentComponent } from "./stock-tracker/components/sentiment/sentiment.component";


const routes: Routes = [
    {path: '', component: DefaultPageComponent },
    {path: 'sentiment/:symbol', component: SentimentComponent},
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}