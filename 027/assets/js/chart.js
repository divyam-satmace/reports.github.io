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
  {"from":"Collection", "to": "Mix Plastic Waste-00018", "value" : 9800},
  {"from":"Collection", "to": "Mix Plastic Waste-00024", "value" : 2100},
  {"from":"Collection", "to": "Mix Plastic Waste-00038", "value" : 7500},
  
  {"from":"Mix Plastic Waste-00018", "to": "Segrgated HDPE  # 10413", "value" : 1340},
  {"from":"Mix Plastic Waste-00018", "to": "Segrgated HDPE  # 10443", "value" : 120.8},
  {"from":"Mix Plastic Waste-00018", "to": "Segrgated HDPE  # 10415", "value" : 80.4},
  {"from":"Mix Plastic Waste-00024", "to": "Segrgated HDPE  # 11225", "value" : 18.8},
  {"from":"Mix Plastic Waste-00024", "to": "Segrgated HDPE  # 11228", "value" : 1200.8},
  {"from":"Mix Plastic Waste-00038", "to": "Segrgated HDPE  # 12318", "value" : 1809.4},
  {"from":"Mix Plastic Waste-00038", "to": "Segrgated HDPE  # 12329", "value" : 209.3},
  {"from":"Mix Plastic Waste-00038", "to": "Segrgated HDPE  # 12336", "value" : 458.5},
  
  {"from":"Segrgated HDPE  # 10413", "to": "Baled HDPE-0011", "value" : 1340},
  {"from":"Segrgated HDPE  # 10443", "to": "Baled HDPE-0011", "value" : 120.8},
  {"from":"Segrgated HDPE  # 10415", "to": "Baled HDPE-0011", "value" : 80.4},
  {"from":"Segrgated HDPE  # 11225", "to": "Baled HDPE-0121", "value" : 180.8},
  {"from":"Segrgated HDPE  # 11228", "to": "Baled HDPE-0121", "value" : 1200.8},
  {"from":"Segrgated HDPE  # 12318", "to": "Baled HDPE-0222", "value" : 1809.4},
  {"from":"Segrgated HDPE  # 12329", "to": "Baled HDPE-0222", "value" : 209.3},
  {"from":"Segrgated HDPE  # 12336", "to": "Baled HDPE-0222", "value" : 458.5},
  
  {"from":"Baled HDPE-0011", "to": " HDGY03-081", "value" : 1600},
  {"from":"Baled HDPE-0121", "to": " HDGY03-082", "value" : 1300},
  {"from":"Baled HDPE-0222", "to": " HDGY03-083", "value" : 2300},
  
  {"from":" HDGY03-081", "to": "HDGY03 Recyled Granules", "value" : 1575},
  {"from":" HDGY03-082", "to": "HDGY03 Recyled Granules", "value" : 1225},
  {"from":" HDGY03-083", "to": "HDGY03 Recyled Granules", "value" : 2200},
  
  {"from":"HDGY03 Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












