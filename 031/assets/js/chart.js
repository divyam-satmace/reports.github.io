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
  {"from":"Collection", "to": "Mix Plastic Waste-00743", "value" : 12840},
  {"from":"Collection", "to": "Mix Plastic Waste-00749", "value" : 7520},
  
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1126789", "value" : 600},
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1126792", "value" : 650},
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1126798", "value" : 625},
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1126804", "value" : 585},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1126818", "value" : 689},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1126820", "value" : 689},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1126824", "value" : 698},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1126825", "value" : 660},
  
  {"from":"Segrgated PP  # 1126789", "to": "Baled PP-0427", "value" : 592.4},
  {"from":"Segrgated PP  # 1126792", "to": "Baled PP-0427", "value" : 598.6},
  {"from":"Segrgated PP  # 1126798", "to": "Baled PP-0427", "value" : 589.2},
  {"from":"Segrgated PP  # 1126804", "to": "Baled PP-0427", "value" : 576},
  {"from":"Segrgated PP  # 1126818", "to": "Baled PP-0428", "value" : 678.8},
  {"from":"Segrgated PP  # 1126820", "to": "Baled PP-0428", "value" : 666},
  {"from":"Segrgated PP  # 1126824", "to": "Baled PP-0428", "value" : 659.2},
  {"from":"Segrgated PP  # 1126825", "to": "Baled PP-0428", "value" : 650},
  
  {"from":"Baled PP-0427", "to": " Washed Baled PP", "value" : 2354},
  {"from":"Baled PP-0428", "to": " Washed Baled PP", "value" : 2660},
  
  {"from":" Washed Baled PP", "to": " BPP01-444", "value" : 2352},
  {"from":" Washed Baled PP", "to": " BPP01-445", "value" : 2654},
  
  {"from":" BPP01-444", "to": " BPP01 Recyled Granules", "value" : 2350},
  {"from":" BPP01-445", "to": " BPP01 Recyled Granules", "value" : 2650},
  
  {"from":" BPP01 Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












