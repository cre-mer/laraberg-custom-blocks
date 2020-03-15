/**
 * Wordpress dependencies
 */
const { Component } = wp.element;

/*
 * Internal dependencies
 */
import CustomInspector from './inspector.js'

/*
 * Editor component
 */
class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        // Destruct important props
        const { attributes, setAttributes, isSelected, clientId, className } = this.props;
        const { } = attributes;

        return (

            <div className={className}>

                <CustomInspector />

                <span>Example Block</span>

            </div>
        )
    }
}

export default Editor;
