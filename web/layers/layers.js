var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_IndeksKerapatanVegetasikemarau_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indeks Kerapatan Vegetasi (kemarau)<br />\
    <img src="styles/legend/IndeksKerapatanVegetasikemarau_2_0.png" /> -0,1000<br />\
    <img src="styles/legend/IndeksKerapatanVegetasikemarau_2_1.png" /> 0,1250<br />\
    <img src="styles/legend/IndeksKerapatanVegetasikemarau_2_2.png" /> 0,3500<br />\
    <img src="styles/legend/IndeksKerapatanVegetasikemarau_2_3.png" /> 0,5750<br />\
    <img src="styles/legend/IndeksKerapatanVegetasikemarau_2_4.png" /> 0,8000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IndeksKerapatanVegetasikemarau_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12344190.000000, -887904.051335, 12359410.000000, -874860.492975]
        })
    });
var lyr_GenanganAir2025_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Genangan Air 2025<br />\
    <img src="styles/legend/GenanganAir2025_3_0.png" /> -0,8360<br />\
    <img src="styles/legend/GenanganAir2025_3_1.png" /> 0,0336<br />\
    <img src="styles/legend/GenanganAir2025_3_2.png" /> 0,2510<br />\
    <img src="styles/legend/GenanganAir2025_3_3.png" /> 0,4684<br />\
    <img src="styles/legend/GenanganAir2025_3_4.png" /> 0,6691<br />\
    <img src="styles/legend/GenanganAir2025_3_5.png" /> 0,8363<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GenanganAir2025_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12344190.000000, -887904.051335, 12359410.000000, -874860.492975]
        })
    });
var lyr_IndeksKerapatanVegetasiHujan_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indeks Kerapatan Vegetasi (Hujan)<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_4_0.png" /> -0,4013<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_4_1.png" /> -0,0704<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_4_2.png" /> 0,2606<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_4_3.png" /> 0,5916<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_4_4.png" /> 0,9226<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IndeksKerapatanVegetasiHujan_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12344190.000000, -887904.051335, 12359410.000000, -874860.492975]
        })
    });
var format_batas_wilayah_nguntoronadi_5 = new ol.format.GeoJSON();
var features_batas_wilayah_nguntoronadi_5 = format_batas_wilayah_nguntoronadi_5.readFeatures(json_batas_wilayah_nguntoronadi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_wilayah_nguntoronadi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_wilayah_nguntoronadi_5.addFeatures(features_batas_wilayah_nguntoronadi_5);
var lyr_batas_wilayah_nguntoronadi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_wilayah_nguntoronadi_5, 
                style: style_batas_wilayah_nguntoronadi_5,
                popuplayertitle: 'batas_wilayah_nguntoronadi',
                interactive: true,
                title: '<img src="styles/legend/batas_wilayah_nguntoronadi_5.png" /> batas_wilayah_nguntoronadi'
            });
var format_LahanSUmurBor_6 = new ol.format.GeoJSON();
var features_LahanSUmurBor_6 = format_LahanSUmurBor_6.readFeatures(json_LahanSUmurBor_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanSUmurBor_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanSUmurBor_6.addFeatures(features_LahanSUmurBor_6);
var lyr_LahanSUmurBor_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanSUmurBor_6, 
                style: style_LahanSUmurBor_6,
                popuplayertitle: 'LahanSUmurBor',
                interactive: true,
                title: '<img src="styles/legend/LahanSUmurBor_6.png" /> LahanSUmurBor'
            });
var format_Karhutla_7 = new ol.format.GeoJSON();
var features_Karhutla_7 = format_Karhutla_7.readFeatures(json_Karhutla_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karhutla_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karhutla_7.addFeatures(features_Karhutla_7);
var lyr_Karhutla_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karhutla_7, 
                style: style_Karhutla_7,
                popuplayertitle: 'Karhutla',
                interactive: true,
                title: '<img src="styles/legend/Karhutla_7.png" /> Karhutla'
            });
var format_LokasiSumurBor_8 = new ol.format.GeoJSON();
var features_LokasiSumurBor_8 = format_LokasiSumurBor_8.readFeatures(json_LokasiSumurBor_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiSumurBor_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiSumurBor_8.addFeatures(features_LokasiSumurBor_8);
var lyr_LokasiSumurBor_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiSumurBor_8, 
                style: style_LokasiSumurBor_8,
                popuplayertitle: 'LokasiSumurBor',
                interactive: true,
                title: '<img src="styles/legend/LokasiSumurBor_8.png" /> LokasiSumurBor'
            });
var format_2026Bencana_9 = new ol.format.GeoJSON();
var features_2026Bencana_9 = format_2026Bencana_9.readFeatures(json_2026Bencana_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2026Bencana_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2026Bencana_9.addFeatures(features_2026Bencana_9);
var lyr_2026Bencana_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2026Bencana_9, 
                style: style_2026Bencana_9,
                popuplayertitle: '2026Bencana',
                interactive: true,
                title: '<img src="styles/legend/2026Bencana_9.png" /> 2026Bencana'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_IndeksKerapatanVegetasikemarau_2.setVisible(true);lyr_GenanganAir2025_3.setVisible(true);lyr_IndeksKerapatanVegetasiHujan_4.setVisible(true);lyr_batas_wilayah_nguntoronadi_5.setVisible(true);lyr_LahanSUmurBor_6.setVisible(true);lyr_Karhutla_7.setVisible(true);lyr_LokasiSumurBor_8.setVisible(true);lyr_2026Bencana_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_IndeksKerapatanVegetasikemarau_2,lyr_GenanganAir2025_3,lyr_IndeksKerapatanVegetasiHujan_4,lyr_batas_wilayah_nguntoronadi_5,lyr_LahanSUmurBor_6,lyr_Karhutla_7,lyr_LokasiSumurBor_8,lyr_2026Bencana_9];
lyr_batas_wilayah_nguntoronadi_5.set('fieldAliases', {'id': 'id', 'FCODE': 'FCODE', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUAS': 'LUAS', 'LUASWH': 'LUASWH', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'TIPADM': 'TIPADM', 'UUPP': 'UUPP', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKD': 'WIADKD', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', });
lyr_LahanSUmurBor_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Karhutla_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LokasiSumurBor_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2026Bencana_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_batas_wilayah_nguntoronadi_5.set('fieldImages', {'id': 'TextEdit', 'FCODE': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUAS': 'TextEdit', 'LUASWH': 'TextEdit', 'METADATA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'OBJECTID': 'Range', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPADM': 'Range', 'UUPP': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKD': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', });
lyr_LahanSUmurBor_6.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Karhutla_7.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_LokasiSumurBor_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2026Bencana_9.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_batas_wilayah_nguntoronadi_5.set('fieldLabels', {'id': 'no label', 'FCODE': 'header label - visible with data', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'header label - visible with data', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUAS': 'no label', 'LUASWH': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'TIPADM': 'no label', 'UUPP': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKD': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', });
lyr_LahanSUmurBor_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Karhutla_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LokasiSumurBor_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2026Bencana_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2026Bencana_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});