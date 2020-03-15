# FBO_Laraberg-Blocks
A custom nova component that helps adding custom blocks to van-ons laraberg

## Dependencies
This packages uses the awesome [**Laraberg** package by **VanOns**](https://github.com/VanOns/laraberg)

## Installation
1. Execute following command in your laravel project root
```sh
> composer require "fbo/laraberg-custom-blocks":"dev-master"
```

2. Add the following to your resource file
```php
use Fbo\LarabergCustomBlocks\Gutenberg;
.
.
.
    public function fields(Request $request)
    {
        return [
            ID::make()->sortable(),

            Gutenberg::make("Content")
        ];
    }

```

## Optional
Star all required packages
```sh
> composer thanks
```


Happy editing 👩🏼‍💻👨🏼‍💻

## Versioning
0.0.1
