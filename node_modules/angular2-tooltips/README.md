[![npm version](https://badge.fury.io/js/angular2-tooltips.svg)](https://www.npmjs.com/package/angular2-tooltips)

# Angular2 Tooltips

Adapted from bharataj88's [angular2-tooltip](https://github.com/bharatraj88/angular2-tooltip) repo.  Allows for custom placement in parents and manually enable / disable.

## Usage

```
npm install angular2-tooltips --save
```

then in your app module import the module and add it to the imports in the @NgModule decorator:

```ts
import { TooltipModule } from 'angular2-tooltips';
@NgModule({
  ...
  imports: [
    TooltipModule
  ]
  ...
})
```

Add the tooltip attribute with a string to display a tooltip over an element on hover.

```html
  <p>
     One word in this sentence will have a
     <span tooltip="hello">tooltip</span>.
  </p>
```

### Manually Activating
If you don't want to display the tooltip on hover, you can control when it is displayed using the `active` attribute.  The expression passed to the active attribute should be a boolean value.  If it is undefined, the default behaviour for the tooltip will occur (show on hover).

```html
  <p>
     One word in this sentence will have a
     <span tooltip="hello" [active]="expression">tooltip</span>.
  </p>
```

### Tooltip Class
To change the styling you can add a custom class to the tooltip by passing a class name with the `tooltipClass` attribute.

```html
  <p>
     One word in this sentence will have a
     <span tooltip="hello" tooltipClass="custom-tooltip">tooltip</span>.
  </p>
```

### DOM Placement
By default the tooltip is appended to the body element.  To append it to a different element, pass a selector using the `parentSelector` attribute.

```html
  <p>
     Only one word in this sentence will have a
     <span tooltip="hello" parentSelector=".page">tooltip</span>.
  </p>
```
