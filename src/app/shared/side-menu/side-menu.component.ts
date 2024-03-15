import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "~/app/app.routes";

@Component({
	selector: "app-side-menu",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./side-menu.component.html",
})
export class SideMenuComponent {
	public readonly menuItems = routes
		.flatMap((r) => r.children ?? [])
		.filter((r) => r.path)
		.filter((r) => !r.path?.includes(":"));
}
