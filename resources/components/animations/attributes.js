wp.hooks.addFilter('blocks.registerBlockType', 'custom-blocks/animations/attributes', function (settings, name) {
    settings = window.lodash.assign({}, settings, {
        attributes: window.lodash.assign({}, settings.attributes, {
            animation: {
                type: 'string',
                default: "",
            },
            delay: {
                type: 'string',
                default: "0",
            }
        })
    });
    return settings;
});

wp.hooks.addFilter('blocks.getSaveContent.extraProps','custom-blocks/animations/data-aos',function(props, name, atts){
    if (atts['animation'] != "") {
        Object.assign(props, { 'data-aos': atts['animation'] });
        Object.assign(props, { 'data-aos-delay': atts['delay'] });
    }
    return props;
});
