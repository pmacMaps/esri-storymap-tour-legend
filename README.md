# Esri Story Map Tour with Map Legend

This repository shows how to add a Map Legend to the [Esri Story Map Tour](https://github.com/Esri/storymap-tour) application.  The following modifications have been made to the original template files:

- added **custom-style.css** in the *app* directory
- added **custom-script.js** in the *app* directory
- added elements near line 320 in **index.html**

The legend is constructed using the **`esri/dijit/Legend`** component from the Esri ArcGIS JavaScript API (3.x).  Please see the [documentation](https://developers.arcgis.com/javascript/3/jsapi/legend-amd.html) for more information on this component.

The CSS style rules are placed in **custom-style.css**.  The code to create and toggle the legend are placed in **custom-script.js**.

These two files are loaded into *index.html* by calling the respective **loadCSS** and **loadJS** functions, within the *index.html* file.

## HTML Legend Elements

The following `html` elements comprise the container for the map legend, as well as the button that is clicked to open or close the legend.

```html
<!-- Custom Map Legend -->
<div id="legendContainer">
   <!-- users click on button to open/close legend -->
	<button id="toggleLegend">Legend   <i id="legendBtnState" class='fa fa-arrow-down'></i></button>
	<!-- container for indiviual legend elements -->
	<div id="legendDiv"></div>
</div>
<!-- ./ Custom Map Legend -->
```