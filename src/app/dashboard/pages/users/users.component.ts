import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TitleComponent } from "~/app/shared/title/title.component";
import { UsersService } from "~/services/users.service";

@Component({
	standalone: true,
	imports: [CommonModule, TitleComponent, RouterModule],
	templateUrl: "./users.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
	public usersService = inject(UsersService);
}
