# FBO_Laraberg-Blocks
A custom nova component that helps adding custom blocks to van-ons laraberg

## Dependencies
This packages uses the awesome [**Laraberg** package by **VanOns**](https://github.com/VanOns/laraberg)

## Installation
1. In your project root:
```sh
> git clone https://github.com/FBOgmbh/FBO_Laraberg-Blocks nova-components/LarabergCustomBlocks
```

2. Add this to your composer.json
```js
    "repositories": [
        {
            "type": "path",
            "url": "./nova-components/LarabergCustomBlocks"
        }
    ],
```
then
```js
    "require": {
        "fbo/laraberg-custom-blocks": "*"
    },
```

3. Execute following command
```sh
> composer update
> cd nova-components/LarabergCustomBlocks
> composer install && npm i
> npm run dev/watch
```

You're one step apart from Laraberg!
4. Add the following to your resource file
```php
use Fbo\LarabergCustomBlocks\LarabergCustomBlocks;
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

Happy editing 👩🏼‍💻👨🏼‍💻

# Versioning
0.0.1
