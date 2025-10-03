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
{"from":"Collection", "to": "Mix Waste # 98754", "value" : 8866},
{"from":"Collection", "to": "Mix Waste # 98531", "value" : 16114},
{"from":"Collection", "to": "Mix Waste # 98677", "value" : 19595},
{"from":"Collection", "to": "Mix Waste # 98737", "value" : 12148},
{"from":"Mix Waste # 98754", "to": "Sorted LDPE", "value" : 3458},
{"from":"Mix Waste # 98531", "to": "Sorted LDPE", "value" : 4189},
{"from":"Mix Waste # 98677", "to": "Sorted LDPE", "value" : 3723},
{"from":"Mix Waste # 98737", "to": "Sorted LDPE", "value" : 3766},
{"from":"Sorted LDPE", "to": "Washed LDPE", "value" : 13300},
{"from":"Washed LDPE", "to": "LDN01", "value" : 12242},
{"from":"Ex Dow", "to": "Virgin G1", "value" : 7142},
{"from":"Ex Dow", "to": "Virgin G2", "value" : 1018},
{"from":"LDN01", "to": "XUS 60941.01-G619N9L001", "value" : 6050},
{"from":"Virgin G1", "to": "XUS 60941.01-G619N9L001", "value" : 3500},
{"from":"Virgin G2", "to": "XUS 60941.01-G619N9L001", "value" : 450},
{"from":"LDN01", "to": "XUS 60941.01-G619N9L002", "value" : 6050},
{"from":"Virgin G1", "to": "XUS 60941.01-G619N9L002", "value" : 3500},
{"from":"Virgin G2", "to": "XUS 60941.01-G619N9L002", "value" : 450},
{"from":"XUS 60941.01-G619N9L001", "to": "Dow", "value" : 10000},
  {"from":"XUS 60941.01-G619N9L002", "to": "Dow", "value" : 10000}
]);
// Make stuff animate on load
series.appear(1000, 100);