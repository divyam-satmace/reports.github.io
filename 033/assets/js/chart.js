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
  {"from":"Mix Plastic # 12581", "to": "LDPE Sorted # 25895", "value" : 8745},
  {"from":"Mix Plastic # 12748", "to": "LDPE Sorted # 35415", "value" : 5355},
  {"from":"Mix Plastic # 13540", "to": "LDPE Sorted # 45613", "value" : 7779},
  
  {"from":"LDPE Sorted # 25895", "to": "Wash LDPE  # 46511", "value" : 815},
  {"from":"LDPE Sorted # 35415", "to": "Wash LDPE  # 46518", "value" : 390},
  {"from":"LDPE Sorted # 45613", "to": "Wash LDPE  # 46519", "value" : 464},
  
  {"from":"Wash LDPE  # 46511", "to": "Recycled Granules # 70100", "value" : 800},
  {"from":"Wash LDPE  # 46518", "to": "Recycled Granules # 70100", "value" : 375},
  {"from":"Wash LDPE  # 46519", "to": "Recycled Granules # 70100", "value" : 450},
  
  {"from":"Recycled Granules # 70100", "to": " Extrusion # 23348", "value" : 1625},
  {"from":"Virgin #19908", "to": " Extrusion # 23348", "value" : 2175},
  {"from":"Virgin #19909", "to": " Extrusion # 23348", "value" : 1575},
  
  {"from":" Extrusion # 23348", "to": "30% PCR bundling samples", "value" : 5375},
  
  {"from":"30% PCR bundling samples", "to": "30% PCR bundling samples-1", "value" : 5342}
]);
// Make stuff animate on load
series.appear(1000, 100);