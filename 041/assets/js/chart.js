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
  {"from":"Industrial Center #5036", "to": "Industrial Center #5044", "value" : 3000},
  {"from":"Associate Center #5035", "to": "Associate Center #5042", "value" : 5000},
  {"from":"Garage1 #5034", "to": "Garage1 #5040", "value" : 2000},
  {"from":"Service Center #5033", "to": "Service Center #5037", "value" : 4000},
  {"from":"Industrial Center #5044", "to": "Used Oil #5045", "value" : 3000},
  {"from":"Associate Center #5042", "to": "Used Oil #5043", "value" : 5000},
  {"from":"Garage1 #5040", "to": "Used Oil #5041", "value" : 2000},
  {"from":"Service Center #5037", "to": "Used Oil #5038", "value" : 4000},
  {"from":"Used Oil #5045", "to": "Used Oil (Automotive) #5055", "value" : 3000},
  {"from":"Used Oil #5043", "to": "Used Oil (Automotive) #5055", "value" : 5000},
  {"from":"Used Oil #5041", "to": "Used Oil (Automotive) #5055", "value" : 2000},
  {"from":"Used Oil #5038", "to": "Used Oil (Automotive) #5055", "value" : 4000},
  {"from":"Used Oil (Automotive) #5055", "to": "Re-refined Base Oil #5086", "value" : 8480}
]);
// Make stuff animate on load
series.appear(1000, 100);