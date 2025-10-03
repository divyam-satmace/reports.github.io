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
  {"from":"Collection", "to": "Mix Plastic Waste-00887", "value" : 4040},
  {"from":"Collection", "to": "Mix Plastic Waste-00589", "value" : 8521},
  {"from":"Collection", "to": "Mix Plastic Waste-00594", "value" : 7898},
  
  {"from":"Mix Plastic Waste-00887", "to": "Segrgated PP  # 1126888", "value" : 230.6},
  {"from":"Mix Plastic Waste-00887", "to": "Segrgated PP  # 1126891", "value" : 35.8},
  {"from":"Mix Plastic Waste-00589", "to": "Segrgated PP  # 1126898", "value" : 1305},
  {"from":"Mix Plastic Waste-00589", "to": "Segrgated PP  # 1126902", "value" : 880.9},
  {"from":"Mix Plastic Waste-00594", "to": "Segrgated PP  # 1126915", "value" : 835.3},
  {"from":"Mix Plastic Waste-00594", "to": "Segrgated PP  # 1126918", "value" : 1889},
  
  {"from":"Segrgated PP  # 1126888", "to": "Baled PP-0439", "value" : 228},
  {"from":"Segrgated PP  # 1126891", "to": "Baled PP-0440", "value" : 34},
  {"from":"Segrgated PP  # 1126898", "to": "Baled PP-0441", "value" : 1282},
  {"from":"Segrgated PP  # 1126902", "to": "Baled PP-0442", "value" : 877},
  {"from":"Segrgated PP  # 1126915", "to": "Baled PP-0443", "value" : 826},
  {"from":"Segrgated PP  # 1126918", "to": "Baled PP-0444", "value" : 1887},
  
  {"from":"Baled PP-0439", "to": " Washed Baled PP", "value" : 228},
  {"from":"Baled PP-0440", "to": " Washed Baled PP", "value" : 34},
  {"from":"Baled PP-0441", "to": " Washed Baled PP", "value" : 1282},
  {"from":"Baled PP-0442", "to": " Washed Baled PP", "value" : 877},
  {"from":"Baled PP-0443", "to": " Washed Baled PP", "value" : 826},
  {"from":"Baled PP-0444", "to": " Washed Baled PP", "value" : 1887},
  
  {"from":" Washed Baled PP", "to": " PPCPBK-598", "value" : 1227},
  {"from":" Washed Baled PP", "to": " PPCPBK-599", "value" : 1778},
  {"from":" Washed Baled PP", "to": " PPCPBK-600", "value" : 2004},
  
  {"from":" PPCPBK-598", "to": " PPCPBK Recyled Granules", "value" : 1225},
  {"from":" PPCPBK-599", "to": " PPCPBK Recyled Granules", "value" : 1775},
  {"from":" PPCPBK-600", "to": " PPCPBK Recyled Granules", "value" : 2000},
  
  {"from":" PPCPBK Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












