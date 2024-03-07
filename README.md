This UI library exposes index.css and index.scss files

npm i pixee - to install this UI library

.scss

```


// changable variables (theme colors, padding, margin etc)

$primary: indigo;
$secondary:
$error:<value>;
$info:<value>;
// Spacing
$base-padding:<value>;
$base-margin:<value>;

// Borders
$base-border-radius:<value>;
$base-border-thickness:<value>;

// Box Shadow
$base-box-shadow:<value>;

// Font Size
$base-font-size:<value>;
$font-size-sm:<value>;
$font-size-lg:<value>;
$font-size-xl:<value>;
$font-size-xxl:<value>;


// import pixee from your local node_modules

@import "pixee-ui";

// changeable theme Examples

.dark-theme {
  color: white;
  background-color: black;
}

.light-theme {
  background-color: white;
  color: black;
}

.dark-theme {
  @extend .text-primary-light-8;
  @extend .bg-primary-dark-8;
}

.light-theme {
  @extend .text-primary-dark-4;
  @extend .bg-primary-light-4;
}


```
