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
  {"from":"Collection", "to": "Mix Plastic Waste-00516", "value" : 8040},
  {"from":"Collection", "to": "Mix Plastic Waste-00517", "value" : 10826},
  
  {"from":"Mix Plastic Waste-00516", "to": "Segrgated LDPE  # 1125652", "value" : 1095},
  {"from":"Mix Plastic Waste-00516", "to": "Segrgated LDPE  # 1125668", "value" : 824},
  {"from":"Mix Plastic Waste-00516", "to": "Segrgated LDPE  # 1125679", "value" : 625},
  {"from":"Mix Plastic Waste-00517", "to": "Segrgated LDPE  # 1125681", "value" : 140},
  {"from":"Mix Plastic Waste-00517", "to": "Segrgated LDPE  # 1125687", "value" : 1718},
  {"from":"Mix Plastic Waste-00517", "to": "Segrgated LDPE  # 1125698", "value" : 733},
  {"from":"Mix Plastic Waste-00517", "to": "Segrgated LDPE  # 1125699", "value" : 80},
  
  {"from":"Segrgated LDPE  # 1125652", "to": "Baled LDPE-0311", "value" : 1089.2},
  {"from":"Segrgated LDPE  # 1125668", "to": "Baled LDPE-0311", "value" : 820},
  {"from":"Segrgated LDPE  # 1125679", "to": "Baled LDPE-0311", "value" : 618.9},
  {"from":"Segrgated LDPE  # 1125681", "to": "Baled LDPE-0312", "value" : 135.8},
  {"from":"Segrgated LDPE  # 1125687", "to": "Baled LDPE-0312", "value" : 1705},
  {"from":"Segrgated LDPE  # 1125698", "to": "Baled LDPE-0312", "value" : 725.6},
  {"from":"Segrgated LDPE  # 1125699", "to": "Baled LDPE-0312", "value" : 78.2},
  
  {"from":"Baled LDPE-0311", "to": " Washed Baled LDPE", "value" : 2900},
  {"from":"Baled LDPE-0312", "to": " Washed Baled LDPE", "value" : 2100},
  
  {"from":" Washed Baled LDPE", "to": " LDG-444", "value" : 2900},
  {"from":" Washed Baled LDPE", "to": " LDG-445", "value" : 2100},
  
  {"from":" LDG-444", "to": " SBT Recyled Granules", "value" : 2900},
  {"from":" LDG-445", "to": " SBT Recyled Granules", "value" : 2100},
  
  {"from":" SBT Recyled Granules", "to": " ", "value" : 5000},
]);
// Make stuff animate on load
series.appear(1000, 100);












