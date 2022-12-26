import { makeAutoObservable } from 'mobx';
import VueRouter from 'vue-router';

export class GlobalStore {
	router!: VueRouter;
	lightMode = true;
	constructor() {
		makeAutoObservable(this);
	}
}
