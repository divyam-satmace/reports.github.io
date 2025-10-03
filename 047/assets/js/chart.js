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
  {"from":"Mix Plastic # 44626", "to": "LDPE Sorted # 34153", "value" : 1589},
  {"from":"Mix Plastic # 54782", "to": "LDPE Sorted # 35245", "value" : 2527},
  
  {"from":"LDPE Sorted # 34153", "to": "Wash LDPE  # 22517", "value" : 188},
  {"from":"LDPE Sorted # 35245", "to": "Wash LDPE  # 22728", "value" : 404},
  
  {"from":"Wash LDPE  # 22517", "to": "Recycled Granules # 80527", "value" : 185},
  {"from":"Wash LDPE  # 22728", "to": "Recycled Granules # 80527", "value" : 398},
  
  {"from":"Recycled Granules # 80527", "to": " Extrusion # 25378", "value" : 575},
  {"from":"Virgin #272856", "to": " Extrusion # 25378", "value" : 175},
  {"from":"Virgin #272857", "to": " Extrusion # 25378", "value" : 50},
  
  {"from":" Extrusion # 25378", "to": "Raffia samples", "value" : 800},
  
  {"from":"Raffia samples", "to": "Raffia samples-1", "value" : 784},
]);
// Make stuff animate on load
series.appear(1000, 100);