import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../shared/header/header.component";
import { SideMenuComponent } from "../shared/side-menu/side-menu.component";

@Component({
	standalone: true,
	imports: [RouterModule, HeaderComponent, SideMenuComponent],
	templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {}
