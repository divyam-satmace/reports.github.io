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

{"from":"Collection #", "to": "Mix Plastic Waste # 4181", "value" : 10500},
{"from":"Collection #", "to": "Mix Plastic Waste # 4182", "value" : 12000},

{"from":"Mix Plastic Waste # 4181", "to": "Segrgated LDPE # 61221", "value" : 1250},
{"from":"Mix Plastic Waste # 4181", "to": "Segrgated LDPE # 61222", "value" : 1850},
{"from":"Mix Plastic Waste # 4181", "to": "Segrgated LDPE # 61223", "value" : 750},
{"from":"Mix Plastic Waste # 4181", "to": "Segrgated LDPE # 61224", "value" : 1400},
{"from":"Mix Plastic Waste # 4182", "to": "Segrgated LDPE # 71281", "value" : 2350},
{"from":"Mix Plastic Waste # 4182", "to": "Segrgated LDPE # 71282", "value" : 1050},
{"from":"Mix Plastic Waste # 4182", "to": "Segrgated LDPE # 71283", "value" : 700},
{"from":"Mix Plastic Waste # 4182", "to": "Segrgated LDPE # 71284", "value" : 1900},

{"from":"Segrgated LDPE # 61221", "to": "Baled LDPE-001", "value" : 250},
{"from":"Segrgated LDPE # 61221", "to": "Baled LDPE-001", "value" : 500},
{"from":"Segrgated LDPE # 61221", "to": "Baled LDPE-001", "value" : 475},
{"from":"Segrgated LDPE # 61222", "to": "Baled LDPE-001", "value" : 850},
{"from":"Segrgated LDPE # 61222", "to": "Baled LDPE-001", "value" : 900},
{"from":"Segrgated LDPE # 61223", "to": "Baled LDPE-001", "value" : 225},
{"from":"Segrgated LDPE # 61223", "to": "Baled LDPE-001", "value" : 375},
{"from":"Segrgated LDPE # 61223", "to": "Baled LDPE-001", "value" : 140},
{"from":"Segrgated LDPE # 61224", "to": "Baled LDPE-001", "value" : 600},
{"from":"Segrgated LDPE # 61224", "to": "Baled LDPE-001", "value" : 500},
{"from":"Segrgated LDPE # 61224", "to": "Baled LDPE-001", "value" : 225},
{"from":"Segrgated LDPE # 71281", "to": "Baled LDPE-002", "value" : 1350},
{"from":"Segrgated LDPE # 71281", "to": "Baled LDPE-002", "value" : 900},
{"from":"Segrgated LDPE # 71282", "to": "Baled LDPE-002", "value" : 375},
{"from":"Segrgated LDPE # 71282", "to": "Baled LDPE-002", "value" : 425},
{"from":"Segrgated LDPE # 71282", "to": "Baled LDPE-002", "value" : 225},
{"from":"Segrgated LDPE # 71283", "to": "Baled LDPE-002", "value" : 350},
{"from":"Segrgated LDPE # 71283", "to": "Baled LDPE-002", "value" : 175},
{"from":"Segrgated LDPE # 71283", "to": "Baled LDPE-002", "value" : 125},
{"from":"Segrgated LDPE # 71284", "to": "Baled LDPE-002", "value" : 1200},

{"from":"Baled LDPE-001", "to": "Washed Baled LDPE", "value" : 5040},
{"from":"Baled LDPE-002", "to": "Washed Baled LDPE", "value" : 5725},

{"from":"Washed Baled LDPE", "to": "LDC02", "value" : 4775},
{"from":"Washed Baled LDPE", "to": "LDC05", "value" : 5225},

{"from":"LDC02", "to": "Recyled Granules LDPE", "value" : 4775},
{"from":"LDC05", "to": "Recyled Granules LDPE", "value" : 5225},

{"from":"Recyled Granules LDPE", "to": " ", "value" : 10000},



]);
// Make stuff animate on load
series.appear(1000, 100);














