ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-185.203523, -104.981562, 97.842759, 90.137603]);
var wms_layers = [];


        var lyr_CartoDBPositron_0 = new ol.layer.Tile({
            'title': 'CartoDB Positron',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Multiringbufferconstantdistance_1 = new ol.format.GeoJSON();
var features_Multiringbufferconstantdistance_1 = format_Multiringbufferconstantdistance_1.readFeatures(json_Multiringbufferconstantdistance_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Multiringbufferconstantdistance_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multiringbufferconstantdistance_1.addFeatures(features_Multiringbufferconstantdistance_1);
var lyr_Multiringbufferconstantdistance_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multiringbufferconstantdistance_1, 
                style: style_Multiringbufferconstantdistance_1,
                popuplayertitle: "Multi-ring buffer (constant distance)",
                interactive: true,
                title: '<img src="styles/legend/Multiringbufferconstantdistance_1.png" /> Multi-ring buffer (constant distance)'
            });
var format_ReprojectedPerkinsEastman_2 = new ol.format.GeoJSON();
var features_ReprojectedPerkinsEastman_2 = format_ReprojectedPerkinsEastman_2.readFeatures(json_ReprojectedPerkinsEastman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ReprojectedPerkinsEastman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReprojectedPerkinsEastman_2.addFeatures(features_ReprojectedPerkinsEastman_2);
var lyr_ReprojectedPerkinsEastman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReprojectedPerkinsEastman_2, 
                style: style_ReprojectedPerkinsEastman_2,
                popuplayertitle: "Reprojected PerkinsEastman",
                interactive: true,
                title: '<img src="styles/legend/ReprojectedPerkinsEastman_2.png" /> Reprojected PerkinsEastman'
            });
var format_NYUGlobalSites_3 = new ol.format.GeoJSON();
var features_NYUGlobalSites_3 = format_NYUGlobalSites_3.readFeatures(json_NYUGlobalSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NYUGlobalSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NYUGlobalSites_3.addFeatures(features_NYUGlobalSites_3);
var lyr_NYUGlobalSites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NYUGlobalSites_3, 
                style: style_NYUGlobalSites_3,
                popuplayertitle: "NYU Global Sites",
                interactive: true,
                title: '<img src="styles/legend/NYUGlobalSites_3.png" /> NYU Global Sites'
            });

lyr_CartoDBPositron_0.setVisible(true);lyr_Multiringbufferconstantdistance_1.setVisible(true);lyr_ReprojectedPerkinsEastman_2.setVisible(true);lyr_NYUGlobalSites_3.setVisible(true);
var layersList = [lyr_CartoDBPositron_0,lyr_Multiringbufferconstantdistance_1,lyr_ReprojectedPerkinsEastman_2,lyr_NYUGlobalSites_3];
lyr_Multiringbufferconstantdistance_1.set('fieldAliases', {'Continent': 'Continent', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'ringId': 'ringId', 'distance': 'distance', });
lyr_ReprojectedPerkinsEastman_2.set('fieldAliases', {'Continent': 'Continent', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_NYUGlobalSites_3.set('fieldAliases', {'Continent': 'Continent', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Academic Approach': 'Academic Approach', 'Partnerships': 'Partnerships', '# of Students': '# of Students', 'Max Students': 'Max Students', 'Website': 'Website', 'Notes': 'Notes', 'Column1': 'Column1', 'Column2': 'Column2', 'Column3': 'Column3', 'Notes4': 'Notes4', });
lyr_Multiringbufferconstantdistance_1.set('fieldImages', {'Continent': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'ringId': 'Range', 'distance': 'TextEdit', });
lyr_ReprojectedPerkinsEastman_2.set('fieldImages', {'Continent': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_NYUGlobalSites_3.set('fieldImages', {'Continent': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Academic Approach': 'TextEdit', 'Partnerships': 'TextEdit', '# of Students': 'TextEdit', 'Max Students': 'Range', 'Website': 'TextEdit', 'Notes': 'TextEdit', 'Column1': 'TextEdit', 'Column2': 'TextEdit', 'Column3': 'TextEdit', 'Notes4': 'TextEdit', });
lyr_Multiringbufferconstantdistance_1.set('fieldLabels', {'Continent': 'no label', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'ringId': 'no label', 'distance': 'no label', });
lyr_ReprojectedPerkinsEastman_2.set('fieldLabels', {'Continent': 'no label', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_NYUGlobalSites_3.set('fieldLabels', {'Continent': 'no label', 'Location': 'no label', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Academic Approach': 'inline label - visible with data', 'Partnerships': 'no label', '# of Students': 'no label', 'Max Students': 'no label', 'Website': 'no label', 'Notes': 'no label', 'Column1': 'no label', 'Column2': 'no label', 'Column3': 'no label', 'Notes4': 'no label', });
lyr_NYUGlobalSites_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});