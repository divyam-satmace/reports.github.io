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
  {"from":"Collection", "to": "Mix Plastic Waste-00498", "value" : 2040},
  {"from":"Collection", "to": "Mix Plastic Waste-00501", "value" : 5521},
  {"from":"Collection", "to": "Mix Plastic Waste-00508", "value" : 8898},
  
  {"from":"Mix Plastic Waste-00498", "to": "Segrgated LDPE  # 1124544", "value" : 230.6},
  {"from":"Mix Plastic Waste-00498", "to": "Segrgated LDPE  # 1124547", "value" : 35.8},
  {"from":"Mix Plastic Waste-00501", "to": "Segrgated LDPE  # 1124562", "value" : 1305},
  {"from":"Mix Plastic Waste-00501", "to": "Segrgated LDPE  # 1124588", "value" : 880.9},
  {"from":"Mix Plastic Waste-00508", "to": "Segrgated LDPE  # 1124592", "value" : 835.3},
  {"from":"Mix Plastic Waste-00508", "to": "Segrgated LDPE  # 1124598", "value" : 1889},
  
  {"from":"Segrgated LDPE  # 1124544", "to": "Baled LDPE-0222", "value" : 228},
  {"from":"Segrgated LDPE  # 1124547", "to": "Baled LDPE-0222", "value" : 34},
  {"from":"Segrgated LDPE  # 1124562", "to": "Baled LDPE-0223", "value" : 1282},
  {"from":"Segrgated LDPE  # 1124588", "to": "Baled LDPE-0223", "value" : 877},
  {"from":"Segrgated LDPE  # 1124592", "to": "Baled LDPE-0224", "value" : 826},
  {"from":"Segrgated LDPE  # 1124598", "to": "Baled LDPE-0224", "value" : 1887},
  
  {"from":"Baled LDPE-0222", "to": " Washed Baled LDPE", "value" : 225},
  {"from":"Baled LDPE-0223", "to": " Washed Baled LDPE", "value" : 2100},
  {"from":"Baled LDPE-0224", "to": " Washed Baled LDPE", "value" : 2675},
  
  {"from":" Washed Baled LDPE", "to": " LDG-346", "value" : 225},
  {"from":" Washed Baled LDPE", "to": " LDG-347", "value" : 2100},
  {"from":" Washed Baled LDPE", "to": " LDG-348", "value" : 2675},
  
  {"from":" LDG-346", "to": " LDG Recyled Granules", "value" : 225},
  {"from":" LDG-347", "to": " LDG Recyled Granules", "value" : 2100},
  {"from":" LDG-348", "to": " LDG Recyled Granules", "value" : 2675},
  
  {"from":" LDG Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












