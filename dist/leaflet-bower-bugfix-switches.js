/****************************************************************************
	leaflet-bower-bugfix-switches.js,

	(c) 2022, FCOO

	https://github.com/FCOO/leaflet-bower-bugfix-switches
	https://github.com/FCOO

****************************************************************************/
(function (L /*, window, document, undefined*/) {
	"use strict";

    /*************************************************
    Adding onmoveend to adjust map.center.lng to range -180 -> +180
    *************************************************/
    function onMoveEnd(){
        var center      = this.getCenter(),
            wrapCenter  = this.wrapLatLng( center );

        if ((center.lng != wrapCenter.lng) || (center.lat != wrapCenter.lat))
            this.setView( wrapCenter, this.getZoom(), {animate: false, reset: true, disableViewprereset: true});
    }
    L.Map.addInitHook(function () {
        this.on('moveend', onMoveEnd);
    });



}(L, this, document));



