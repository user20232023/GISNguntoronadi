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
var lyr_IndeksKerapatanVegetasiHujan_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indeks Kerapatan Vegetasi (Hujan)<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_3_0.png" /> -0,4013<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_3_1.png" /> -0,0704<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_3_2.png" /> 0,2606<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_3_3.png" /> 0,5916<br />\
    <img src="styles/legend/IndeksKerapatanVegetasiHujan_3_4.png" /> 0,9226<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IndeksKerapatanVegetasiHujan_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12344190.000000, -887904.051335, 12359410.000000, -874860.492975]
        })
    });
var format_batas_wilayah_nguntoronadi_4 = new ol.format.GeoJSON();
var features_batas_wilayah_nguntoronadi_4 = format_batas_wilayah_nguntoronadi_4.readFeatures(json_batas_wilayah_nguntoronadi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_wilayah_nguntoronadi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_wilayah_nguntoronadi_4.addFeatures(features_batas_wilayah_nguntoronadi_4);
var lyr_batas_wilayah_nguntoronadi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batas_wilayah_nguntoronadi_4, 
                style: style_batas_wilayah_nguntoronadi_4,
                popuplayertitle: 'batas_wilayah_nguntoronadi',
                interactive: true,
                title: '<img src="styles/legend/batas_wilayah_nguntoronadi_4.png" /> batas_wilayah_nguntoronadi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_IndeksKerapatanVegetasikemarau_2.setVisible(true);lyr_IndeksKerapatanVegetasiHujan_3.setVisible(true);lyr_batas_wilayah_nguntoronadi_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_IndeksKerapatanVegetasikemarau_2,lyr_IndeksKerapatanVegetasiHujan_3,lyr_batas_wilayah_nguntoronadi_4];
lyr_batas_wilayah_nguntoronadi_4.set('fieldAliases', {'id': 'id', 'FCODE': 'FCODE', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUAS': 'LUAS', 'LUASWH': 'LUASWH', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'OBJECTID': 'OBJECTID', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'TIPADM': 'TIPADM', 'UUPP': 'UUPP', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKD': 'WIADKD', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', });
lyr_batas_wilayah_nguntoronadi_4.set('fieldImages', {'id': 'TextEdit', 'FCODE': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUAS': 'TextEdit', 'LUASWH': 'TextEdit', 'METADATA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'OBJECTID': 'Range', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPADM': 'Range', 'UUPP': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKD': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', });
lyr_batas_wilayah_nguntoronadi_4.set('fieldLabels', {'id': 'no label', 'FCODE': 'header label - visible with data', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'header label - visible with data', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUAS': 'no label', 'LUASWH': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'OBJECTID': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'TIPADM': 'no label', 'UUPP': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKD': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', });
lyr_batas_wilayah_nguntoronadi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});