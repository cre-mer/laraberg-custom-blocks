/**
 * setCoreBlockCustomClassName sets default class names
 * prevents blocks from invalid rendering after gutenberg update
 * @param {string} className
 * @param {string} blockName
 */
function setCoreBlockCustomClassName( className, blockName ) {
    // If core block, set default class based on block name
    if (blockName.startsWith( 'core/' )) {
        newClass = "wp-block-" + blockName.replace('core/', '');
        return newClass;
    }

    // Leave custom blocks untouched
    return className;
}

// Adding the filter
wp.hooks.addFilter(
    'blocks.getBlockDefaultClassName',
    'custom-blocks/set-core-block-custom-class-name',
    setCoreBlockCustomClassName
);
