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
  {"from":"Mix Plastic # 58732", "to": "LDPE Sorted # 458971", "value" : 982},
  {"from":"Mix Plastic # 59987", "to": "LDPE Sorted # 474752", "value" : 1538},
  
  {"from":"LDPE Sorted # 458971", "to": "Wash LDPE  # 65123", "value" : 204},
  {"from":"LDPE Sorted # 474752", "to": "Wash LDPE  # 67268", "value" : 428},
  
  {"from":"Wash LDPE  # 65123", "to": "Recycled Granules # 90438", "value" : 200},
  {"from":"Wash LDPE  # 67268", "to": "Recycled Granules # 90438", "value" : 425},
  
  {"from":"Recycled Granules # 90438", "to": " Extrusion # 27786", "value" : 625},
  {"from":"Virgin #47821", "to": " Extrusion # 27786", "value" : 775},
  {"from":"Virgin #47830", "to": " Extrusion # 27786", "value" : 650},
  
  {"from":" Extrusion # 27786", "to": "White stretch", "value" : 2038},
  
  {"from":"White stretch", "to": "White stretch-1", "value" : 2000},
]);
// Make stuff animate on load
series.appear(1000, 100);