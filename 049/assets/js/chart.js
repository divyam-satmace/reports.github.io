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
  {"from":"Mix Plastic # 34421", "to": "LDPE Sorted # 27518", "value" : 484},
  {"from":"Mix Plastic # 3572", "to": "LDPE Sorted # 28445", "value" : 1287},
  {"from":"Mix Plastic # 34436", "to": "LDPE Sorted # 28775", "value" : 889},
  
  {"from":"LDPE Sorted # 27518", "to": "Wash LDPE  # 58001", "value" : 80},
  {"from":"LDPE Sorted # 28445", "to": "Wash LDPE  # 58243", "value" : 282},
  {"from":"LDPE Sorted # 28775", "to": "Wash LDPE  # 59078", "value" : 127},
  
  {"from":"Wash LDPE  # 58001", "to": "Recycled Granules # 78567", "value" : 75},
  {"from":"Wash LDPE  # 58243", "to": "Recycled Granules # 78567", "value" : 275},
  {"from":"Wash LDPE  # 59078", "to": "Recycled Granules # 78567", "value" : 125},
  
  {"from":"Recycled Granules # 78567", "to": " Extrusion # 25441", "value" : 475},
  {"from":"Virgin #20914", "to": " Extrusion # 25441", "value" : 150},
  {"from":"Virgin #20918", "to": " Extrusion # 25441", "value" : 875},
  
  {"from":" Extrusion # 25441", "to": "Clear stretch ", "value" : 1500},
  
  {"from":"Clear stretch ", "to": "Clear stretch-1", "value" : 1487.8},
]);
// Make stuff animate on load
series.appear(1000, 100);