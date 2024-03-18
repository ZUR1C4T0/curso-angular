import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	selector: "app-title",
	standalone: true,
	imports: [CommonModule],
	template: `<h1 class='mb-3 text-3xl font-bold text-gray-900 dark:text-white'>{{ title }}</h1>`,
})
export class TitleComponent {
	@Input({ required: true }) public title = "";
}
