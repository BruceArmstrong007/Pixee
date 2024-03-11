# Pixee - a lightweight UI library for modern web apps.

## Description

+ Pixee is a small css library that can be imported using in vanilla js or your favourite framework (css/sass).
+ It has colors, themes, uttities, components, flex and flex based grid layouts (minimal),
+ Yes! Theme and other css variables are entirely customizable

----------

## Setup - Installation

### Node 
```
npm i pixee
```
***And***


```
In style.scss

@import 'pixee/dist/index';

OR

In style.css

@import 'pixee/dist/index.css';
```

### CDN CSS Import
```
    <style>
      @import url("https://cdn.jsdelivr.net/gh/BruceArmstrong007/Pixee/dist/index.css");

      // other css stuff

    </style>
```
***OR***
```
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/BruceArmstrong007/Pixee/dist/index.css">

  // other stuff

</head>
```

-----------------------


## Setting up theme

  + in your body tag or root tag of your web app add a class called dark-theme or light-theme, 
  +  Yes, switching between light and dark classes in that class tag will switch between light and dark themes

  ```
        <body class="dark-theme">
          // something
        </body>
  ```
  ***OR***
```
        <your-root-component class="dark-theme">
          // something
        </your-root-component>
```


-----------------------
## Changing Themes, Color Palletes and Root CSS variables

### Root variables available for change in your sass or css file

```
       :root {
        // Color palletes
        --primary: #326dee;
        --secondary: #1ac888;
        --error: #d32752;
        --info: #f6c31c;
        --blue: #1919e6;
        --red: #e61919;
        --yellow: #e6e619;
        --green: #19e635;
        --orange: #ffa600;
        --purple: #9900ff;
        --gray: #808080;
        --black: black;
        --white: white;

        // Base variables
        --base-padding: 1rem;
        --base-margin: 1rem;
        --base-border-radius: 60px;
        --base-border-thickness: 5px;
        --base-box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        --base-font-size: 5rem;
      }
```

### Themes that can be changed in your root sass or css file

```
@import 'pixee/dist/index';


// In your root sass file after importing  pixee css 

.dark-theme {
  @extend .text-primary-light-9;
  @extend .bg-primary-dark-9;
}

.light-theme {
  @extend .text-primary-dark-9;
  @extend .bg-primary-light-9;
}

```

***OR***

```

@import 'pixee/dist/index.css';
 ***or*** 
@import url("https://cdn.jsdelivr.net/gh/BruceArmstrong007/Pixee/dist/index.css");

// In your root sass file after importing  pixee css 


.dark-theme {
  color white;
  background-color black;
}

.light-theme {
  background-color white;
  color black;
}

```
-----------------------


## [Docs Link Click Here](https://brucearmstrong007.github.io/Pixee)

### Demo - run index.html in your local machine - ideally via live server in vscode

![Pixee (11 03 2024 12_54)](https://github.com/BruceArmstrong007/Pixee/assets/48177059/0129244e-c98d-4006-9630-4f1e326b4721)
