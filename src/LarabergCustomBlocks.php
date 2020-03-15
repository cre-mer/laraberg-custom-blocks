<?php

namespace Fbo\LarabergCustomBlocks;

use Laravel\Nova\ResourceTool;

class LarabergCustomBlocks extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Laraberg Custom Blocks';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'laraberg-custom-blocks';
    }
}
