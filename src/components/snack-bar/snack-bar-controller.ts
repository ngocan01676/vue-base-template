import { action, makeAutoObservable, observable } from 'mobx';

export interface SnackBarConfig {
	icon?: string;
	iconColor?: string;
	message?: string;
	color?: string;
	textColor?: string;
	timeout?: number;
}

export class SnackBarController {
	constructor() {
		makeAutoObservable(this);
	}
	config: SnackBarConfig = {
		timeout: 5000,
	};
	show = false;

	success(message: string) {
		this.config = {
			icon: 'check_circle',
			message,
			iconColor: 'success',
			color: 'white',
			timeout: 5000,
			textColor: 'black',
		};
		this.show = true;
	}

	error(message: string) {
		this.config = {
			icon: 'mdi-alert',
			iconColor: 'error',
			message,
			color: 'white',
			textColor: 'black',
			timeout: 5000,
		};
		this.show = true;
	}

	warning(message: string) {
		this.config = {
			icon: 'mdi-alert',
			message,
			color: 'warning',
			timeout: 5000,
		};
		this.show = true;
	}

	close() {
		this.show = false;
	}
}

export const snackController = new SnackBarController();
