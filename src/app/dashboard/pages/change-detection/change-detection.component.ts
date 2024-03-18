import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { TitleComponent } from "~/app/shared/title/title.component";

@Component({
	selector: "app-change-detection",
	standalone: true,
	imports: [CommonModule, TitleComponent],
	templateUrl: "./change-detection.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent {
	public frameworkAsSignal = signal({
		name: "Angular",
		releaseYear: 2023,
	});

	public frameworkAsProperty = {
		name: "React",
		releaseYear: 2022,
	};

	constructor() {
		setTimeout(() => {
			this.changeFrameworkAsSignal();
			this.changeFrameworkAsProperty();
			console.log("Change detection component updated");
		}, 3000);
	}

	public changeFrameworkAsSignal() {
		this.frameworkAsSignal.set({
			name: "Vue",
			releaseYear: 2021,
		});
	}

	public changeFrameworkAsProperty() {
		this.frameworkAsProperty.name = "Svelte";
	}
}
