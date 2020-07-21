// Add custom JavaScript code in here
require(["dojo/topic"], function(topic) {
    // legend toggle button element
    const legendToggleBtn = document.getElementById('toggleLegend');
    // legend toggle arrow icon element
    const legendToggleIcon = document.getElementById('legendBtnState');

    // The application is ready
    // see https://github.com/Esri/storymap-tour#developer-guide
    topic.subscribe("maptour-ready", function(){
        // load Esri JS API modules
        require(["esri/dijit/Legend"], function(Legend) {

            // web map object
            const webmap = app.map;

            // legend object
            // see https://developers.arcgis.com/javascript/3/jsapi/legend-amd.html
            const mapLegend = new Legend({
                map: webmap
            }, "legendDiv");

            // Finalizes the creation of the legend . Call startup() after creating the widget when you are ready for user interaction.
            mapLegend.startup();

            // toggle dispay for map legend when user clicks on <button id="toggleLegend"> element
            function toggleMapLegend() {
                // container for map legend
                const mapLegend = document.getElementById('legendDiv');

                // toggle visiblity
                if (mapLegend.style.display === 'none' || mapLegend.style.display === "" || mapLegend.style.display === " ") {
                    // show legend
                    mapLegend.style.display = 'block';

                    // change legend toggle icon
                    if (legendToggleIcon.classList.contains('fa-arrow-down')) {
                        // remove down/open arrow
                        legendToggleIcon.classList.remove('fa-arrow-down');
                    }
                    if (!legendToggleIcon.classList.contains('fa-arrow-up')) {
                        // add close/up arrow
                        legendToggleIcon.classList.add('fa-arrow-up');
                    }
                } else {
                    // hide legend
                    mapLegend.style.display = 'none';

                    // change legend toggle icon
                    if (legendToggleIcon.classList.contains('fa-arrow-up')) {
                        // remove down/open arrow
                        legendToggleIcon.classList.remove('fa-arrow-up');
                    }
                    if (!legendToggleIcon.classList.contains('fa-arrow-down')) {
                        // add close/up arrow
                        legendToggleIcon.classList.add('fa-arrow-down');
                    }
                }
            }

            // add event listener for "click" event
            legendToggleBtn.addEventListener('click', toggleMapLegend);
        });

        // show legend toggle button on "desktop" view after app loads
        if (!document.body.classList.contains('mobile-view')) {
            legendToggleBtn.style.display = 'inline-block';
        }

    }); // end maptour-ready
});