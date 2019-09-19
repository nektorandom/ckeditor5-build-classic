import imageFullScreen from './icons/full_screen.svg';

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class FullScreenMode extends Plugin {
	init() {
		const editor = this.editor;
		let isOn = false;

		editor.ui.componentFactory.add( 'fullScreenMode', locale => {
			const view = new ButtonView( locale );

			view.set( {
				class: 'n-full-screen-mode-icon',
				label: 'Full Screen Mode',
				icon: imageFullScreen,
				tooltip: true,
			} );

			// Callback executed once the image is clicked.
			view.on( 'execute', () => {
				// eslint-disable-next-line no-undef
				const innerWidth = window.innerWidth;
				// eslint-disable-next-line no-undef
				const innerHeight = window.innerHeight;

				if ( isOn === false ) {
					// eslint-disable-next-line max-len
					editor.ui.view.element.setAttribute( 'style', `position: absolute; z-index: 9995; left: 0px; top: 0px; width: ${ innerWidth }px` );
					editor.ui.view.editable.element.style.height = `${ innerHeight }px`;
				} else {
					editor.ui.view.element.setAttribute( 'style', '' );
					editor.ui.view.editable.element.setAttribute( 'style', '' );
				}

				isOn = !isOn;
			} );

			return view;
		} );
	}
}
