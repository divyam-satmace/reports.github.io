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

// --- Recycled Input ---
// --- Recycled Input ---
{"from":"Mix Waste # GSK-01", "to":"Sorting LDPE 1001", "value": 344.74},
{"from":"Mix Waste # GSK-01", "to":"Sorting LDPE 1002", "value": 344.75},

// --- Sorting (2% loss) ---
{"from":"Sorting LDPE 1001", "to":"Washed LDPE 2001", "value": 337.85},
{"from":"Sorting LDPE 1002", "to":"Washed LDPE 2002", "value": 337.86},

// --- Washing (3% loss) ---
{"from":"Washed LDPE 2001", "to":"rLDPE Granules Batch-3001", "value": 327.71},
{"from":"Washed LDPE 2002", "to":"rLDPE Granules Batch-3002", "value": 327.72},

// --- Granulation (2% loss) ---
{"from":"rLDPE Granules Batch-3001", "to":"Recycling Granules-5001", "value": 321.16},
{"from":"rLDPE Granules Batch-3002", "to":"Recycling Granules-5001", "value": 321.17},

// --- Virgin Input ---
{"from":"Virgin LDPE 6001", "to":"Material Mix 2548", "value": 741.38},

// --- Recycled into Mix ---
{"from":"Recycling Granules-5001", "to":"Material Mix 2548", "value": 642.33},

// --- Production (2% loss) ---
{"from":"Material Mix 2548", "to":"Extrusion (Shrink Film)", "value": 1354.76},
{"from":"Extrusion (Shrink Film)", "to":"GSK-62000000217893", "value": 1327.67},

// --- Dispatch ---
{
  "from":"GSK-62000000217893",
  "to":"Invoice TGJ260101",
  "value": 1297.30
},
{
  "from":"Invoice TGJ260101",
  "to":".",
  "value": 1297.30
}
]);
// Make stuff animate on load
series.appear(1000, 100);