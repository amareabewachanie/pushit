import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const appRoutes: Route[] = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
            path: "home",
            loadChildren: () => import("./modules/video/video.module").then((m) => m.VideoModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
