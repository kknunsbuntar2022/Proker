var wms_layers = [];

var format_BUNTAR_0 = new ol.format.GeoJSON();
var features_BUNTAR_0 = format_BUNTAR_0.readFeatures(json_BUNTAR_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUNTAR_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUNTAR_0.addFeatures(features_BUNTAR_0);
var lyr_BUNTAR_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUNTAR_0, 
                style: style_BUNTAR_0,
                interactive: false,
                title: '<img src="styles/legend/BUNTAR_0.png" /> BUNTAR'
            });
var format_BANGUNAN_1 = new ol.format.GeoJSON();
var features_BANGUNAN_1 = format_BANGUNAN_1.readFeatures(json_BANGUNAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_1.addFeatures(features_BANGUNAN_1);
var lyr_BANGUNAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_1, 
                style: style_BANGUNAN_1,
                interactive: false,
                title: '<img src="styles/legend/BANGUNAN_1.png" /> BANGUNAN'
            });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                interactive: false,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });
var format_BALAIDESA_3 = new ol.format.GeoJSON();
var features_BALAIDESA_3 = format_BALAIDESA_3.readFeatures(json_BALAIDESA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BALAIDESA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BALAIDESA_3.addFeatures(features_BALAIDESA_3);
var lyr_BALAIDESA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BALAIDESA_3, 
                style: style_BALAIDESA_3,
                interactive: true,
                title: '<img src="styles/legend/BALAIDESA_3.png" /> BALAI DESA'
            });

lyr_BUNTAR_0.setVisible(true);lyr_BANGUNAN_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_BALAIDESA_3.setVisible(true);
var layersList = [lyr_BUNTAR_0,lyr_BANGUNAN_1,lyr_JALAN_2,lyr_BALAIDESA_3];
lyr_BUNTAR_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BANGUNAN_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', });
lyr_JALAN_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'maxspeed': 'maxspeed', });
lyr_BALAIDESA_3.set('fieldAliases', {'Nama': 'Nama', 'Gambar': 'Gambar', });
lyr_BUNTAR_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BANGUNAN_1.set('fieldImages', {'osm_id': '', 'name': '', 'type': '', });
lyr_JALAN_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'type': 'TextEdit', 'oneway': 'Range', 'bridge': 'Range', 'maxspeed': 'Range', });
lyr_BALAIDESA_3.set('fieldImages', {'Nama': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_BUNTAR_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BANGUNAN_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'header label', 'type': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', });
lyr_BALAIDESA_3.set('fieldLabels', {'Nama': 'inline label', 'Gambar': 'inline label', });
lyr_BALAIDESA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});