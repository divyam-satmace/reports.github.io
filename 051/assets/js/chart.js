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
  
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1127779", "value" : 600},
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1127782", "value" : 650},
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1127795", "value" : 625},
  {"from":"Mix Plastic Waste-00743", "to": "Segrgated PP  # 1127799", "value" : 585},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1127800", "value" : 689},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1127804", "value" : 689},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1127808", "value" : 698},
  {"from":"Mix Plastic Waste-00749", "to": "Segrgated PP  # 1127810", "value" : 660},
  
  {"from":"Segrgated PP  # 1127779", "to": "Baled PP-0608", "value" : 747},
  {"from":"Segrgated PP  # 1127782", "to": "Baled PP-0608", "value" : 596.4},
  {"from":"Segrgated PP  # 1127795", "to": "Baled PP-0608", "value" : 586.9},
  {"from":"Segrgated PP  # 1127799", "to": "Baled PP-0608", "value" : 574},
  {"from":"Segrgated PP  # 1127800", "to": "Baled PP-0609", "value" : 676.7},
  {"from":"Segrgated PP  # 1127804", "to": "Baled PP-0609", "value" : 663.2},
  {"from":"Segrgated PP  # 1127808", "to": "Baled PP-0609", "value" : 695},
  {"from":"Segrgated PP  # 1127810", "to": "Baled PP-0609", "value" : 655},
  
  {"from":"Baled PP-0608", "to": " Washed Baled PP", "value" : 2365},
  {"from":"Baled PP-0609", "to": " Washed Baled PP", "value" : 2672},
  
  {"from":" Washed Baled PP", "to": "PPC10-712", "value" : 2360},
  {"from":" Washed Baled PP", "to": "PPC10-713", "value" : 2667},
  
  {"from":"PPC10-712", "to": "PPC10 Recyled Granules", "value" : 2350},
  {"from":"PPC10-713", "to": "PPC10 Recyled Granules", "value" : 2650},
  
  {"from":"PPC10 Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












