/**
 * Wordpress dependencies
 */
const { PanelBody, PanelRow } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { Component } = wp.element;
const { __ } = wp.i18n;

/*
* Editor component
*/
class CustomInspector extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InspectorControls>
				<PanelBody
					title={__('My Block Settings', 'custom-blocks')}
					icon="welcome-widgets-menus"
					initialOpen={true}
				>
					<PanelRow>
						My Panel Inputs and Labels
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
};

export default CustomInspector;
