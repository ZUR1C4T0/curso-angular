import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "app-defer-options",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./defer-options.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferOptionsComponent {}
