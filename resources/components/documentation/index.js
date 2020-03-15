/**
 * Documentation Component
 *
 * Shows a help section in the sidebar
 */

/*** USAGE: ***

    import Documentation from '../../components/documentation';

    <Documentation>
        <p>
            Add Help content here...
        </p>
    </Documentation>

 */

const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const {PanelBody } = wp.components;
const {
	InspectorControls,
} = wp.blockEditor;

class Documentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={ __( 'Help', 'custom-blocks' ) }>
                        {this.props.children}
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        )
    }
}

export default Documentation;
