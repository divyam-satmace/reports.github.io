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

{"from":"Collection #", "to": "Mix Plastic Waste # 5562", "value" : 10500},
{"from":"Collection #", "to": "Mix Plastic Waste # 5564", "value" : 12000},

{"from":"Mix Plastic Waste # 5562", "to": "Segrgated HDPE # 15413", "value" : 1250},
{"from":"Mix Plastic Waste # 5562", "to": "Segrgated HDPE # 15414", "value" : 1850},
{"from":"Mix Plastic Waste # 5562", "to": "Segrgated HDPE # 15415", "value" : 750},
{"from":"Mix Plastic Waste # 5562", "to": "Segrgated HDPE # 15416", "value" : 1400},
{"from":"Mix Plastic Waste # 5564", "to": "Segrgated HDPE # 15541", "value" : 2350},
{"from":"Mix Plastic Waste # 5564", "to": "Segrgated HDPE # 15542", "value" : 1050},
{"from":"Mix Plastic Waste # 5564", "to": "Segrgated HDPE # 15543", "value" : 700},
{"from":"Mix Plastic Waste # 5564", "to": "Segrgated HDPE # 15544", "value" : 1900},

{"from":"Segrgated HDPE # 15413", "to": "Baled HDPE-001", "value" : 250},
{"from":"Segrgated HDPE # 15413", "to": "Baled HDPE-001", "value" : 500},
{"from":"Segrgated HDPE # 15413", "to": "Baled HDPE-001", "value" : 475},
{"from":"Segrgated HDPE # 15414", "to": "Baled HDPE-001", "value" : 850},
{"from":"Segrgated HDPE # 15414", "to": "Baled HDPE-001", "value" : 900},
{"from":"Segrgated HDPE # 15415", "to": "Baled HDPE-001", "value" : 225},
{"from":"Segrgated HDPE # 15415", "to": "Baled HDPE-001", "value" : 375},
{"from":"Segrgated HDPE # 15415", "to": "Baled HDPE-001", "value" : 140},
{"from":"Segrgated HDPE # 15416", "to": "Baled HDPE-001", "value" : 600},
{"from":"Segrgated HDPE # 15416", "to": "Baled HDPE-001", "value" : 500},
{"from":"Segrgated HDPE # 15416", "to": "Baled HDPE-001", "value" : 225},
{"from":"Segrgated HDPE # 15541", "to": "Baled HDPE-002", "value" : 1350},
{"from":"Segrgated HDPE # 15541", "to": "Baled HDPE-002", "value" : 900},
{"from":"Segrgated HDPE # 15542", "to": "Baled HDPE-002", "value" : 375},
{"from":"Segrgated HDPE # 15542", "to": "Baled HDPE-002", "value" : 425},
{"from":"Segrgated HDPE # 15542", "to": "Baled HDPE-002", "value" : 225},
{"from":"Segrgated HDPE # 15543", "to": "Baled HDPE-002", "value" : 350},
{"from":"Segrgated HDPE # 15543", "to": "Baled HDPE-002", "value" : 175},
{"from":"Segrgated HDPE # 15543", "to": "Baled HDPE-002", "value" : 125},
{"from":"Segrgated HDPE # 15544", "to": "Baled HDPE-002", "value" : 1200},

{"from":"Baled HDPE-001", "to": "HDBLGY01", "value" : 5040},
{"from":"Baled HDPE-002", "to": "HDBLGY04", "value" : 5725},

{"from":"HDBLGY01", "to": "Recyled Granules HDPE", "value" : 4775},
{"from":"HDBLGY04", "to": "Recyled Granules HDPE", "value" : 5225},

{"from":"Recyled Granules HDPE", "to": " ", "value" : 10000},



]);
// Make stuff animate on load
series.appear(1000, 100);












