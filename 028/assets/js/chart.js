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
  {"from":"Collection", "to": "Mix Plastic Waste-00151", "value" : 27440},
  {"from":"Collection", "to": "Mix Plastic Waste-00166", "value" : 12480},
  {"from":"Collection", "to": "Mix Plastic Waste-00179", "value" : 8240},
  
  {"from":"Mix Plastic Waste-00151", "to": "Segrgated HDPE  # 104520", "value" : 1452},
  {"from":"Mix Plastic Waste-00151", "to": "Segrgated HDPE  # 104552", "value" : 180.4},
  {"from":"Mix Plastic Waste-00151", "to": "Segrgated HDPE  # 104668", "value" : 120.5},
  {"from":"Mix Plastic Waste-00166", "to": "Segrgated HDPE  # 11440", "value" : 740},
  {"from":"Mix Plastic Waste-00166", "to": "Segrgated HDPE  # 11528", "value" : 650},
  {"from":"Mix Plastic Waste-00179", "to": "Segrgated HDPE  # 12412", "value" : 1948.8},
  {"from":"Mix Plastic Waste-00179", "to": "Segrgated HDPE  # 12439", "value" : 180},
  {"from":"Mix Plastic Waste-00179", "to": "Segrgated HDPE  # 12489", "value" : 190.2},
  
  {"from":"Segrgated HDPE  # 104520", "to": "Baled HDPE-0028", "value" : 1340},
  {"from":"Segrgated HDPE  # 104552", "to": "Baled HDPE-0028", "value" : 120},
  {"from":"Segrgated HDPE  # 104668", "to": "Baled HDPE-0028", "value" : 80},
  {"from":"Segrgated HDPE  # 11440", "to": "Baled HDPE-0028", "value" : 180},
  {"from":"Segrgated HDPE  # 11528", "to": "Baled HDPE-0028", "value" : 1200},
  {"from":"Segrgated HDPE  # 12412", "to": "Baled HDPE-0233", "value" : 1810},
  {"from":"Segrgated HDPE  # 12439", "to": "Baled HDPE-0233", "value" : 210},
  {"from":"Segrgated HDPE  # 12489", "to": "Baled HDPE-0233", "value" : 460},
  
  {"from":"Baled HDPE-0028", "to": " HDM02-102", "value" : 2525},
  {"from":"Baled HDPE-0233", "to": " HDM02-103", "value" : 2475},
  
  {"from":" HDM02-102", "to": "HDM02 Recyled Granules", "value" : 1525},
  {"from":" HDM02-102", "to": "HDM02 Recyled Granules", "value" : 1000},
  {"from":" HDM02-103", "to": "HDM02 Recyled Granules", "value" : 2475},
  
  {"from":"HDM02 Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












