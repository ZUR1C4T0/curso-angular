import { Component, type OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { initFlowbite } from "flowbite";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
	title = "curso-angular";

	ngOnInit(): void {
		initFlowbite();
	}
}
