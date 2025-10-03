/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create series
// https://www.amcharts.com/docs/v5/charts/flow-charts/
var series = root.container.children.push(am5flow.Sankey.new(root, {
  sourceIdField: "from",
  targetIdField: "to",
  valueField: "value",
  paddingRight: 50
}));

series.nodes.get("colors").set("step", 2);

series.bullets.push(function () {
  return am5.Bullet.new(root, {
    locationX: 0.5,
    sprite: am5.Label.new(root, {
      templateField: "labelSettings",
      textAlign: "center",
      centerY: am5.p50,
      paddingTop: 0,
      paddingBottom: 0
    })
  });
});

series.bullets.push(function () {
  return am5.Bullet.new(root, {
    locationX: 1,
    sprite: am5.Label.new(root, {
      templateField: "labelSettings2",
      centerY: am5.p50,
      paddingTop: 0,
      paddingBottom: 0
    })
  });
});

series.bullets.push(function (root, series, dataItem) {
  var label = am5.Label.new(root, {
    text: "{value} Kgs",
    populateText: true,
    centerX: am5.p50,
    fill: am5.color(0x232425),
    opacity: 0.2,
    fontSize: 16
  });
  var bullet = am5.Bullet.new(root, {
    locationX: 0,
    sprite: label,
    autoRotate: true
  });

  label.adapters.add("opacity", function (opacity) {
    return 0.5 - Math.abs(0.5 - bullet.get("locationX"));
  });

  bullet.animate({
    key: "locationX",
    from: 0,
    to: 1,
    duration: Math.random() * 10000 + 2000,
    loops: Infinity
  });
  bullet.on("locationX", function () {
    label.set("opacity", label.get("opacity"));
  });

  return bullet;
});

// Set data
// https://www.amcharts.com/docs/v5/charts/flow-charts/#Setting_data
series.data.setAll([
  {"from":"Collection", "to": "Mix Plastic Waste-00352", "value" : 8898},
  {"from":"Collection", "to": "Mix Plastic Waste-00390", "value" : 2521},
  {"from":"Collection", "to": "Mix Plastic Waste-00412", "value" : 5058},
  
  {"from":"Mix Plastic Waste-00352", "to": "Segrgated HDPE  # 105091", "value" : 1225.8},
  {"from":"Mix Plastic Waste-00352", "to": "Segrgated HDPE  # 105119", "value" : 240.8},
  {"from":"Mix Plastic Waste-00390", "to": "Segrgated HDPE  # 105121", "value" : 1201},
  {"from":"Mix Plastic Waste-00390", "to": "Segrgated HDPE  # 105138", "value" : 240.8},
  {"from":"Mix Plastic Waste-00412", "to": "Segrgated HDPE  # 105167", "value" : 1205},
  {"from":"Mix Plastic Waste-00412", "to": "Segrgated HDPE  # 105168", "value" : 1086.6},
  
  {"from":"Segrgated HDPE  # 105091", "to": "Baled HDPE-0106", "value" : 1200},
  {"from":"Segrgated HDPE  # 105119", "to": "Baled HDPE-0106", "value" : 225},
  {"from":"Segrgated HDPE  # 105121", "to": "Baled HDPE-0107", "value" : 1175},
  {"from":"Segrgated HDPE  # 105138", "to": "Baled HDPE-0107", "value" : 225},
  {"from":"Segrgated HDPE  # 105167", "to": "Baled HDPE-0108", "value" : 1200},
  {"from":"Segrgated HDPE  # 105168", "to": "Baled HDPE-0108", "value" : 1075},
  
  {"from":"Baled HDPE-0106", "to": " HDBK-224", "value" : 725},
  {"from":"Baled HDPE-0106", "to": " HDBK-225", "value" : 600},
  {"from":"Baled HDPE-0107", "to": " HDBK-226", "value" : 1400},
  {"from":"Baled HDPE-0108", "to": " HDBK-227", "value" : 2275},
  
  {"from":" HDBK-224", "to": "HDBK Recyled Granules", "value" : 725},
  {"from":" HDBK-225", "to": "HDBK Recyled Granules", "value" : 600},
  {"from":" HDBK-226", "to": "HDBK Recyled Granules", "value" : 1400},
  {"from":" HDBK-227", "to": "HDBK Recyled Granules", "value" : 2275},
  
  {"from":"HDBK Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












