import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
	selector: "app-control-flow",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./control-flow.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlFlowComponent {
	public showContent = signal(false);
	public readonly grades = ["A", "B", "C", "D", "E"] as const;
	public grade = signal<(typeof this.grades)[number]>("E");

	public toggleContent() {
		this.showContent.update((value) => !value);
	}

	public changeGrade(grade: (typeof this.grades)[number]) {
		this.grade.set(grade);
	}
}
