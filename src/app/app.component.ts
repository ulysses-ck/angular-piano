import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	applySound(soundNumber: number) {
		const audio = new Audio();
		audio.src = '../assets/sounds/note' + soundNumber + '.wav';
		audio.load();
		audio.play();
	}
}
