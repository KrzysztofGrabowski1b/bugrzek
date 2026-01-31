var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            popuplayertitle: 'Raster',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_WIG1940_1 = new ol.format.GeoJSON();
var features_WIG1940_1 = format_WIG1940_1.readFeatures(json_WIG1940_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIG1940_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIG1940_1.addFeatures(features_WIG1940_1);
var lyr_WIG1940_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WIG1940_1, 
                style: style_WIG1940_1,
                popuplayertitle: 'WIG 1940',
                interactive: false,
                title: '<img src="styles/legend/WIG1940_1.png" /> WIG 1940'
            });
var format_VMAP2005_2 = new ol.format.GeoJSON();
var features_VMAP2005_2 = format_VMAP2005_2.readFeatures(json_VMAP2005_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP2005_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP2005_2.addFeatures(features_VMAP2005_2);
var lyr_VMAP2005_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP2005_2, 
                style: style_VMAP2005_2,
                popuplayertitle: ' VMAP 2005',
                interactive: false,
                title: '<img src="styles/legend/VMAP2005_2.png" />  VMAP 2005'
            });
var format_sentinel2022_3 = new ol.format.GeoJSON();
var features_sentinel2022_3 = format_sentinel2022_3.readFeatures(json_sentinel2022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel2022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel2022_3.addFeatures(features_sentinel2022_3);
var lyr_sentinel2022_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel2022_3, 
                style: style_sentinel2022_3,
                popuplayertitle: 'sentinel 2022',
                interactive: false,
                title: '<img src="styles/legend/sentinel2022_3.png" /> sentinel 2022'
            });

lyr_Raster_0.setVisible(true);lyr_WIG1940_1.setVisible(true);lyr_VMAP2005_2.setVisible(true);lyr_sentinel2022_3.setVisible(true);
var layersList = [lyr_Raster_0,lyr_WIG1940_1,lyr_VMAP2005_2,lyr_sentinel2022_3];
lyr_WIG1940_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_archiwalny_vmap': 'FID_archiwalny_vmap', 'FID_HYDRO_WODY_POWIERZCHNI_Merge1': 'FID_HYDRO_WODY_POWIERZCHNI_Merge1', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'perm': 'perm', 'wskaznik': 'wskaznik', 'FID_Narew_Bug_Merge': 'FID_Narew_Bug_Merge', 'Id_1': 'Id', 'permieter': 'permieter', 'wskaznik_1': 'wskaznik', 'FID_sentinelmerged': 'FID_sentinelmerged', 'Id_12': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'perm_1': 'perm', 'wskaznik_12': 'wskaznik', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_VMAP2005_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'perm': 'perm', 'wskaznik': 'wskaznik', });
lyr_sentinel2022_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'perm': 'perm', 'wskaznik': 'wskaznik', });
lyr_WIG1940_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_archiwalny_vmap': 'Range', 'FID_HYDRO_WODY_POWIERZCHNI_Merge1': 'Range', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'Range', 'perm': 'TextEdit', 'wskaznik': 'Range', 'FID_Narew_Bug_Merge': 'Range', 'Id_1': 'Range', 'permieter': 'TextEdit', 'wskaznik_1': 'Range', 'FID_sentinelmerged': 'Range', 'Id_12': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'perm_1': 'TextEdit', 'wskaznik_12': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMAP2005_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'perm': 'TextEdit', 'wskaznik': 'TextEdit', });
lyr_sentinel2022_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'Range', 'gridcode': 'Range', 'InPoly_FID': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'perm': 'TextEdit', 'wskaznik': 'TextEdit', });
lyr_WIG1940_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_archiwalny_vmap': 'no label', 'FID_HYDRO_WODY_POWIERZCHNI_Merge1': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'perm': 'no label', 'wskaznik': 'no label', 'FID_Narew_Bug_Merge': 'no label', 'Id_1': 'no label', 'permieter': 'no label', 'wskaznik_1': 'no label', 'FID_sentinelmerged': 'no label', 'Id_12': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'perm_1': 'no label', 'wskaznik_12': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_VMAP2005_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'perm': 'no label', 'wskaznik': 'no label', });
lyr_sentinel2022_3.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'perm': 'no label', 'wskaznik': 'no label', });
lyr_sentinel2022_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});