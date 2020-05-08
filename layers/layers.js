ol.proj.get("").setExtent([294514.226000, 9833779.506000, 312947.173000, 9843133.135000]);
var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Amas_0 = new ol.format.GeoJSON();
var features_Amas_0 = format_Amas_0.readFeatures(json_Amas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Amas_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Amas_0.addFeatures(features_Amas_0);var lyr_Amas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amas_0, 
                style: style_Amas_0,
                title: '<img src="styles/legend/Amas_0.png" /> Amas'
            });var format_Bornesderfrence_1 = new ol.format.GeoJSON();
var features_Bornesderfrence_1 = format_Bornesderfrence_1.readFeatures(json_Bornesderfrence_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Bornesderfrence_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Bornesderfrence_1.addFeatures(features_Bornesderfrence_1);var lyr_Bornesderfrence_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bornesderfrence_1, 
                style: style_Bornesderfrence_1,
                title: '<img src="styles/legend/Bornesderfrence_1.png" /> Bornes de référence'
            });var format_Courbesdeniveaux10m_2 = new ol.format.GeoJSON();
var features_Courbesdeniveaux10m_2 = format_Courbesdeniveaux10m_2.readFeatures(json_Courbesdeniveaux10m_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Courbesdeniveaux10m_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Courbesdeniveaux10m_2.addFeatures(features_Courbesdeniveaux10m_2);var lyr_Courbesdeniveaux10m_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Courbesdeniveaux10m_2, 
                style: style_Courbesdeniveaux10m_2,
                title: '<img src="styles/legend/Courbesdeniveaux10m_2.png" /> Courbes de niveaux (10m)'
            });var format_Limiteenvironnementale_3 = new ol.format.GeoJSON();
var features_Limiteenvironnementale_3 = format_Limiteenvironnementale_3.readFeatures(json_Limiteenvironnementale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Limiteenvironnementale_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Limiteenvironnementale_3.addFeatures(features_Limiteenvironnementale_3);var lyr_Limiteenvironnementale_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limiteenvironnementale_3, 
                style: style_Limiteenvironnementale_3,
                title: '<img src="styles/legend/Limiteenvironnementale_3.png" /> Limite environnementale'
            });

lyr_Amas_0.setVisible(true);lyr_Bornesderfrence_1.setVisible(false);lyr_Courbesdeniveaux10m_2.setVisible(false);lyr_Limiteenvironnementale_3.setVisible(true);
var layersList = [baseLayer,lyr_Amas_0,lyr_Bornesderfrence_1,lyr_Courbesdeniveaux10m_2,lyr_Limiteenvironnementale_3];
lyr_Amas_0.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Bornesderfrence_1.set('fieldAliases', {'Points': 'Points', 'X (m)': 'X (m)', 'Y (m)': 'Y (m)', 'Z (m)': 'Z (m)', });
lyr_Courbesdeniveaux10m_2.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Limiteenvironnementale_3.set('fieldAliases', {'Layer': 'Layer', 'SubClasses': 'SubClasses', 'ExtendedEn': 'ExtendedEn', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Amas_0.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Bornesderfrence_1.set('fieldImages', {'Points': 'TextEdit', 'X (m)': 'TextEdit', 'Y (m)': 'TextEdit', 'Z (m)': 'TextEdit', });
lyr_Courbesdeniveaux10m_2.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Limiteenvironnementale_3.set('fieldImages', {'Layer': 'TextEdit', 'SubClasses': 'TextEdit', 'ExtendedEn': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Amas_0.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Bornesderfrence_1.set('fieldLabels', {'Points': 'no label', 'X (m)': 'no label', 'Y (m)': 'no label', 'Z (m)': 'no label', });
lyr_Courbesdeniveaux10m_2.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Limiteenvironnementale_3.set('fieldLabels', {'Layer': 'no label', 'SubClasses': 'no label', 'ExtendedEn': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Limiteenvironnementale_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});