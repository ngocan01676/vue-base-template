import { makeAutoObservable } from 'mobx';

export class LoginViewModel {
	email: string;
	password: string;
	constructor() {
		makeAutoObservable(this);
	}
}
