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

{"from":"Mix Waste  # 82645", "to":"Sorting LDPE 8807", "value": 288.08},
{"from":"Mix Waste  # 82645", "to":"Sorting LDPE 8902", "value": 288.08},
{"from":"Mix Waste  # 82645", "to":"Sorting LDPE 9103", "value": 288.08},
{"from":"Mix Waste  # 82645", "to":"Sorting LDPE 9952", "value": 286.94},

{"from":"Sorting LDPE 8807", "to":"Washed LDPE 7989", "value": 155.39},
{"from":"Sorting LDPE 8902", "to":"Washed LDPE 8086", "value": 155.39},
{"from":"Sorting LDPE 9103", "to":"Washed LDPE 8205", "value": 155.39},
{"from":"Sorting LDPE 9952", "to":"Washed LDPE 8595", "value": 154.62},

{"from":"Washed LDPE 7989", "to":"rLDPE Granules Batch-1108", "value": 144.04},
{"from":"Washed LDPE 8086", "to":"rLDPE Granules Batch-1813", "value": 144.04},
{"from":"Washed LDPE 8205", "to":"rLDPE Granules Batch-2148", "value": 144.04},
{"from":"Washed LDPE 8595", "to":"rLDPE Granules Batch-2223", "value": 143.27},

{"from":"Virgin Grade 1", "to":"Material Mix", "value": 566.10},
{"from":"Virgin Grade 2", "to":"Material Mix", "value": 9.29},

{"from":"rLDPE Granules Batch-1108", "to":"Recyling Granules-012", "value": 144.04},
{"from":"rLDPE Granules Batch-1813", "to":"Recyling Granules-012", "value": 144.04},
{"from":"rLDPE Granules Batch-2148", "to":"Recyling Granules-012", "value": 144.04},
{"from":"rLDPE Granules Batch-2223", "to":"Recyling Granules-012", "value": 143.27},

{"from":"Recyling Granules-012", "to":"Material Mix", "value": 575.39},

{"from":"Material Mix", "to":"Tubing", "value": 1150.78},
{"from":"Tubing", "to":"Cutting", "value": 1093.24},

{"from":"Cutting", "to":"Cargill 50% PCR Poly Bags", "value": 1038.58},
{"from":"Cargill 50% PCR Poly Bags", "to":"TGJ230516", "value": 1038.58},
{"from":"TGJ230516", "to":".", "value": 1038.58}



]);
// Make stuff animate on load
series.appear(1000, 100);