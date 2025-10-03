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
  {"from":"Collection", "to": "Mix Plastic Waste-00287", "value" : 7895},
  {"from":"Collection", "to": "Mix Plastic Waste-00291", "value" : 4525},
  
  {"from":"Mix Plastic Waste-00287", "to": "Segrgated HDPE  # 104608", "value" : 780},
  {"from":"Mix Plastic Waste-00287", "to": "Segrgated HDPE  # 104666", "value" : 845.8},
  {"from":"Mix Plastic Waste-00287", "to": "Segrgated HDPE  # 104678", "value" : 725.3},
  {"from":"Mix Plastic Waste-00291", "to": "Segrgated HDPE  # 104686", "value" : 480},
  {"from":"Mix Plastic Waste-00291", "to": "Segrgated HDPE  # 104696", "value" : 2348.8},
  
  {"from":"Segrgated HDPE  # 104608", "to": "Baled HDPE-0094", "value" : 480},
  {"from":"Segrgated HDPE  # 104608", "to": "Baled HDPE-0094", "value" : 290},
  {"from":"Segrgated HDPE  # 104666", "to": "Baled HDPE-0095", "value" : 410},
  {"from":"Segrgated HDPE  # 104666", "to": "Baled HDPE-0095", "value" : 430},
  {"from":"Segrgated HDPE  # 104678", "to": "Baled HDPE-0096", "value" : 425},
  {"from":"Segrgated HDPE  # 104678", "to": "Baled HDPE-0096", "value" : 290},
  {"from":"Segrgated HDPE  # 104686", "to": "Baled HDPE-0097", "value" : 120},
  {"from":"Segrgated HDPE  # 104686", "to": "Baled HDPE-0097", "value" : 348},
  {"from":"Segrgated HDPE  # 104696", "to": "Baled HDPE-0098", "value" : 1080},
  {"from":"Segrgated HDPE  # 104696", "to": "Baled HDPE-0098", "value" : 1250},
  
  {"from":"Baled HDPE-0094", "to": " HMAW-102", "value" : 750},
  {"from":"Baled HDPE-0095", "to": " HMAW-102", "value" : 825},
  {"from":"Baled HDPE-0096", "to": " HMAW-102", "value" : 700},
  {"from":"Baled HDPE-0097", "to": " HMAW-103", "value" : 450},
  {"from":"Baled HDPE-0098", "to": " HMAW-103", "value" : 2275},
  
  {"from":" HMAW-102", "to": "HMAW Recyled Granules", "value" : 2275},
  {"from":" HMAW-103", "to": "HMAW Recyled Granules", "value" : 2725},
  
  {"from":"HMAW Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












