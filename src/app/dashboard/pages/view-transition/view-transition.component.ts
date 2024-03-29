import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-view-transition",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./view-transition.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewTransitionComponent {}
