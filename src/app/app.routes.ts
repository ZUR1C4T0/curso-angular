import type { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChangeDetectionComponent } from "./dashboard/pages/change-detection/change-detection.component";
import { ControlFlowComponent } from "./dashboard/pages/control-flow/control-flow.component";
import { DeferOptionsComponent } from "./dashboard/pages/defer-options/defer-options.component";
import { DeferViewsComponent } from "./dashboard/pages/defer-views/defer-views.component";
import { UserComponent } from "./dashboard/pages/user/user.component";
import { UsersComponent } from "./dashboard/pages/users/users.component";
import { ViewTransitionComponent } from "./dashboard/pages/view-transition/view-transition.component";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "dashboard",
		pathMatch: "full",
	},
	{
		path: "dashboard",
		loadComponent: () => DashboardComponent,
		children: [
			{
				path: "",
				redirectTo: "control-flow",
				pathMatch: "full",
			},
			{
				path: "change-detection",
				title: "Change Detection",
				loadComponent: () => ChangeDetectionComponent,
			},
			{
				path: "control-flow",
				title: "Control Flow",
				loadComponent: () => ControlFlowComponent,
			},
			{
				path: "defer-options",
				title: "Defer Options",
				loadComponent: () => DeferOptionsComponent,
			},
			{
				path: "defer-views",
				title: "Defer Views",
				loadComponent: () => DeferViewsComponent,
			},
			{
				path: "user/:id",
				title: "User",
				loadComponent: () => UserComponent,
			},
			{
				path: "user-list",
				title: "User List",
				loadComponent: () => UsersComponent,
			},
			{
				path: "view-transition",
				title: "View Transition",
				loadComponent: () => ViewTransitionComponent,
			},
		],
	},
];
