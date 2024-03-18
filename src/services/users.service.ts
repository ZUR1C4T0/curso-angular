import { HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import type { User, UsersResponse } from "~/interfaces/req-res";

interface State {
	users: User[];
	loading: boolean;
}

@Injectable({
	providedIn: "root",
})
export class UsersService {
	private http = inject(HttpClient);

	#state = signal<State>({
		users: [],
		loading: false,
	});

	public users = computed(() => this.#state().users);
	public loading = computed(() => this.#state().loading);

	constructor() {
		this.#state.update((state) => ({ ...state, loading: true }));

		this.http
			.get<UsersResponse>("https://reqres.in/api/users?per_page=12")
			.subscribe((res) => {
				this.#state.set({
					loading: false,
					users: res.data,
				});
			});
	}
}
