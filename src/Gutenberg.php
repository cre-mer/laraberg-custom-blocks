<?php

namespace Fbo\LarabergCustomBlocks;

use Laravel\Nova\Fields\Field;

class Gutenberg extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-gutenberg';
}
