const { __ } = wp.i18n;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { TextControl, SelectControl, PanelBody, IconButton, FormTokenField } = wp.components;

const withInspectorControls = createHigherOrderComponent((BlockEdit) => {
    return (props) => {

        const animation = props.attributes.animation;
        const delay = props.attributes.delay;

        var labels = [
            { label: __('None', 'custom-blocks'), value: '' },
            { label: __('Fade up', 'custom-blocks'), value: 'fade-up' },
            { label: __('Fade down', 'custom-blocks'), value: 'fade-down' },
            { label: __('Fade right', 'custom-blocks'), value: 'fade-right' },
            { label: __('Fade left', 'custom-blocks'), value: 'fade-left' },
            { label: __('Fade up right', 'custom-blocks'), value: 'fade-up-right' },
            { label: __('Fade up left', 'custom-blocks'), value: 'fade-up-left' },
            { label: __('Fade down right', 'custom-blocks'), value: 'fade-down-right' },
            { label: __('Fade down left', 'custom-blocks'), value: 'fade-down-left' },
            { label: __('Flip left', 'custom-blocks'), value: 'flip-left' },
            { label: __('Flip right', 'custom-blocks'), value: 'flip-right' },
            { label: __('Flip up', 'custom-blocks'), value: 'flip-up' },
            { label: __('Flip down', 'custom-blocks'), value: 'flip-down' },
            { label: __('Zoom in', 'custom-blocks'), value: 'zoom-in' },
            { label: __('Zoom in up', 'custom-blocks'), value: 'zoom-in-up' },
            { label: __('Zoom in down', 'custom-blocks'), value: 'zoom-in-down' },
            { label: __('Zoom in right', 'custom-blocks'), value: 'zoom-in-right' },
            { label: __('Zoom in left', 'custom-blocks'), value: 'zoom-in-left' },
            { label: __('Zoom out', 'custom-blocks'), value: 'zoom-out' },
            { label: __('Zoom out up', 'custom-blocks'), value: 'zoom-out-up' },
            { label: __('Zoom out down', 'custom-blocks'), value: 'zoom-out-down' },
            { label: __('Zoom out right', 'custom-blocks'), value: 'zoom-out-right' },
            { label: __('Zoom out left', 'custom-blocks'), value: 'zoom-out-left' },
        ]

        return (

            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls key="inspector">
                    <PanelBody title={__('Animation', 'custom-blocks')} initialOpen={true}>
                        <SelectControl
                            value={animation}
                            onChange={animation => props.setAttributes({ animation })}
                            options={labels}
                        />
                        <TextControl
                            label={__("Delay:", "custom-blocks")}
                            value={delay}
                            type="number"
                            onChange={delay => props.setAttributes({ delay })}
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withInspectorControl');

wp.hooks.addFilter('editor.BlockEdit', 'block-effects/animate-on-scroll/inspector', withInspectorControls);
