/*
* Internal dependencies
*/
import attributes from './attributes.js';
import icon from './icon.js';
import Editor from './js/editor.js';
import Renderer from './js/renderer.js';

/*
* Import Wordpress dependencies
*/
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/*
* Define settings
*/
let blockSettings = {
  title: __( 'Example Block' ),

  icon: icon,

  category: 'layout',

  // helper: Uncomment to support ID and alignment
  // supports: {
  //     anchor: true,
  //     align: true
  // },

  keywords: [
      __( 'Boilerplate' ),
      __( 'Test' ),
      __( 'Example' ),
  ],

  attributes: attributes,

  edit: Editor,

  save: Renderer,

}


/**
 * Register block
 */
registerBlockType('custom-blocks/example-block', blockSettings)
