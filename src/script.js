// Create root element
var root = am5.Root.new("chartdiv");

// Create custom theme...
var myTheme = am5.Theme.new(root);

// ... thick stroke and full opacity on first level
myTheme.rule("Polygon", ["hierarchy", "node", "shape", "depth0"]).setAll({
  strokeWidth: 0,
  fillOpacity: 0,
  stroke: am5.color(0x000000)
});

myTheme.rule("Polygon", ["hierarchy", "node", "shape", "depth1"]).setAll({
  strokeWidth: 3,
  fillOpacity: 1,
  stroke: am5.color(0x000000)
});

// ... no fill and thin stroke on second level
myTheme.rule("Polygon", ["hierarchy", "node", "shape", "depth2"]).setAll({
  fillOpacity: 0,
  strokeWidth: 1,
  stroke: am5.color(0x000000)
});

// ... thick stroke and full opacity on third level
myTheme.rule("Polygon", ["hierarchy", "node", "shape", "depth3"]).setAll({
  strokeWidth: 3,
  fillOpacity: 1,
  stroke: am5.color(0x000000)
});

// ... thick stroke and full opacity on 4 level
myTheme.rule("Polygon", ["hierarchy", "node", "shape", "depth4"]).setAll({
  strokeWidth: 1,
  fillOpacity: 0,
  stroke: am5.color(0x000000)
});

// ... by default last level is not clickable, but we change it here, so, add pointer on the last level
myTheme.rule("HierarchyNode", ["last"]).setAll({
  cursorOverStyle: "pointer"
});

// ... set global settings for all labels
myTheme.rule("Label", ["node"]).setAll({
  fontSize: 9,
  minScale: 0.5
});

// ... hide label of zero level
myTheme.rule("Label", ["node", "depth0"]).setAll({
  forceHidden: false
});

// ... hide label of first level
myTheme.rule("Label", ["node", "depth1"]).setAll({
  forceHidden: true
});

// ... hide label of second level
myTheme.rule("Label", ["node", "depth3"]).setAll({
  forceHidden: true
});



// Set themes
root.setThemes([
  am5themes_Animated.new(root),
  myTheme
]);

// Prepare data with three levels
var data = {
  "children": [
    {
      "name": "Creativity",
      "population": 40,
      "children": [
        {
          "id": "Have",
          "name": "Creativity",
          "population": 34,
          "children": [
            { 
              "name": "Voted 3", 
              "population": 4,
              "children": [
                { "name": "Bahojb", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Taranto", "population": 1 },
                { "name": "Tenerelli", "population": 1 },
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 11,
              "children": [
                { "name": "Arteaga", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Pasquino", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Petroni", "population": 1 },
                { "name": "Pontrelli", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Vela", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 19,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Capilungo", "population": 1 },
                { "name": "De_Cosmo", "population": 1 },
                { "name": "De_Silvia", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Kalantari", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Mele", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Milillo", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Pizzutilo", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Trizio", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't have",
          "name": "Don't have",
          "population": 6,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 1,
              "children": [
                { "name": "Amadio", "population": 1 },
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 1,
              "children": [
                { "name": "Crastolla", "population": 1 },
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 4,
              "children": [
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Critical Thinking",
      "population": 15,
      "children": [
        {
          "id": "Have",
          "name": "Critical Thinking",
          "population": 27,
          "children": [
            { 
              "name": "Voted 3", 
              "population": 5,
              "children": [
                { "name": "Capilungo", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Pontrelli", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Taranto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 19,
              "children": [
                { "name": "Amadio", "population": 1 },
                { "name": "Arteaga", "population": 1 },
                { "name": "De_Silvia", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Pizzutilo", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
                { "name": "Trizio", "population": 1 },
                { "name": "Vela", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 5,
              "children": [
                { "name": "Kalantari", "population": 1 },
                { "name": "Mele", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Milillo", "population": 1 },
                { "name": "Tenerelli", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't Have",
          "name": "Don't have",
          "population": 13,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 1,
              "children": [
                { "name": "Petroni", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 5,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Bahojb", "population": 1 },
                { "name": "Crastolla", "population": 1 },
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Pasquino", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 4,
              "children": [
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Attention detail",
      "population": 12,
      "children": [
        {
          "id": "Have",
          "name": "Attention to detail",
          "population": 25,
          "children": [
            { 
              "name": "Voted 1", 
              "population": 1,
              "children": [
                { "name": "Pasquino", "population": 1 }
              ]
            },
            { 
              "name": "Voted 2", 
              "population": 6,
              "children": [
                { "name": "De_Silvia", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Trizio", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 14,
              "children": [
                { "name": "Capilungo", "population": 1 },
                { "name": "Crastolla", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Kalantari", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Petroni", "population": 1 },
                { "name": "Pizzutillo", "population": 1 },
                { "name": "Pontrelli", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
                { "name": "Vela", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 3,
              "children": [
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Taranto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 2,
              "children": [
                { "name": "Tenerelli", "population": 1 },
                { "name": "Vitto", "population": 1 },
              ]
            }
          ]
        },
        {
          "id": "Don't have",
          "name": "Don't have",
          "population": 15,
          "children": [
            { 
              "name": "Voted 1", 
              "population": 2,
              "children": [
                { "name": "Arteaga", "population": 1 },
                { "name": "Izzi", "population": 1 }
              ]
            },
            { 
              "name": "Voted 2", 
              "population": 3,
              "children": [
                { "name": "Amadio", "population": 1 },
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Locaputo", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 6,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Bahojb", "population": 2 },
                { "name": "Galasso", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Mele", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 2,
              "children": [
                { "name": "Gjini", "population": 1 },
                { "name": "Milillo", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 1,
              "children": [
                { "name": "Micunco", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Technical Proficency",
      "population": 10,
      "children": [
        {
          "id": "Have",
          "name": "Technical",
          "population": 23,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 1,
              "children": [
                { "name": "Milillo", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 9,
              "children": [
                { "name": "Kalantari", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Mele", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Petroni", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Taranto", "population": 1 },
                { "name": "Tenerelli", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 11,
              "children": [
                { "name": "Amadio", "population": 1 },
                { "name": "Arteaga", "population": 1 },
                { "name": "Bahojb", "population": 1 },
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Pizzutillo", "population": 1 },
                { "name": "Pontrelli", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Vela", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 3,
              "children": [
                { "name": "Marzullo", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
                { "name": "Trizio", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't have",
          "name": "Don't have",
          "population": 17,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 3,
              "children": [
                { "name": "Fanizzi", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Pasquino", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 2,
              "children": [
                { "name": "Capilungo", "population": 1 },
                { "name": "De_Silvia", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 10,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Crastolla", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 1,
              "children": [
                { "name": "Mizzi", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Understanding of design principles",
      "population": 5,
      "children": [
        {
          "id": "Have",
          "name": "Design Principles",
          "population": 17,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 1,
              "children": [
                { "name": "Vela", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 2,
              "children": [
                { "name": "Capilungo", "population": 1 },
                { "name": "Taranto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 15,
              "children": [
                { "name": "De_Silvia", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Kalantari", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Pizzutillo", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Trizio", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 4,
              "children": [
                { "name": "Mele", "population": 1 },
                { "name": "Pasquino", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
                { "name": "Tenerelli", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't have",
          "name": "Don't have",
          "population": 23,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 1,
              "children": [
                { "name": "Amadio", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 4,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Petroni", "population": 1 },
                { "name": "Pontrelli", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 9,
              "children": [
                { "name": "Arteaga", "population": 1 },
                { "name": "Bahojb", "population": 1 },
                { "name": "Crastolla", "population": 1 },
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Milillo", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 4,
              "children": [
                { "name": "Galasso", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Schiralli", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Communication Skills",
      "population": 4,
      "children": [
        {
          "id": "Have",
          "name": "Communication",
          "population": 15,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 6,
              "children": [
                { "name": "Arteaga", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Mele", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Tenerelli", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 2,
              "children": [
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Petroni", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 13,
              "children": [
                { "name": "ALbano", "population": 1 },
                { "name": "Amadio", "population": 1 },
                { "name": "Crastolla", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
                { "name": "Vela", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't have",
          "name": "Don't have",
          "population": 25,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 4,
              "children": [
                { "name": "Capilungo", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Pasquino", "population": 1 },
                { "name": "Trizio", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 6,
              "children": [
                { "name": "Di_Carne", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Pontrelli", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Taranto", "population": 1 },
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 9,
              "children": [
                { "name": "Bahojb", "population": 1 },
                { "name": "De_Silvia", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Kalantari", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Millillo", "population": 1 },
                { "name": "Pizzutillo", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Time Management",
      "population": 4,
      "children": [
        {
          "id": "Have",
          "name": "Time Management",
          "population": 14,
          "children": [
            { 
              "name": "Voted 1", 
              "population": 1,
              "children": [
                { "name": "Pasquino", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 4,
              "children": [
                { "name": "Forsennato", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Taranto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 5,
              "children": [
                { "name": "Hernandez", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Petroni", "population": 1 },
                { "name": "Pontrelli", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 8,
              "children": [
                { "name": "Amadio", "population": 2 },
                { "name": "Milillo", "population": 2 },
                { "name": "Peragine", "population": 2 },
                { "name": "Pizzutillo", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Tenerelli", "population": 2 },
                { "name": "Trizio", "population": 2 },
                { "name": "Vela", "population": 2 }
              ]
            }
          ]
        },
        {
          "id": "Don't have",
          "name": "Don't have",
          "population": 26,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 5,
              "children": [
                { "name": "Crastolla", "population": 1 },
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Tedeschi", "population": 1 }
              ]
            },
            { 
              "name": "Voted 3", 
              "population": 4,
              "children": [
                { "name": "Bahojb", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Locaputo", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 10,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Arteaga", "population": 1 },
                { "name": "Capilungo", "population": 1 },
                { "name": "De_Cosmo", "population": 1 },
                { "name": "De_Silvia", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 3,
              "children": [
                { "name": "Kalantari", "population": 1 },
                { "name": "Mele", "population": 1 },
                { "name": "Schiralli", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Adaptability",
      "population": 5,
      "children": [
        {
          "id": "Have",
          "name": "Adaptability",
          "population": 17,
          "children": [
            { 
              "name": "Voted 3", 
              "population": 4,
              "children": [
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Milillo", "population": 1 },
                { "name": "Taranto", "population": 1 },
                { "name": "Tenerelli", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 9,
              "children": [
                { "name": "Gjini", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Kalantari", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Pizzutilo", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Trizio", "population": 1 },
                { "name": "Vela", "population": 1 },
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 4,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Capilungo", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Mele", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't Have",
          "name": "Don't have",
          "population": 23,
          "children": [
            { 
              "name": "Voted 3", 
              "population": 2,
              "children": [
                { "name": "Petroni", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 18,
              "children": [
                { "name": "Amadio", "population": 1 },
                { "name": "Bahojb", "population": 1 },
                { "name": "Crastolla", "population": 1 },
                { "name": "De_Silvia", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Pasquino", "population": 1 },
                { "name": "Scarangella", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Tedeschi", "population": 1 }
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 3,
              "children": [
                { "name": "Arteaga", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Pontrelli", "population": 1 }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Research Skills",
      "population": 5,
      "children": [
        {
          "id": "Have",
          "name": "Research Skills",
          "population": 17,
          "children": [
            { 
              "name": "Voted 3", 
              "population": 3,
              "children": [
                { "name": "Crastolla", "population": 1 },
                { "name": "Milillo", "population": 1 },
                { "name": "Taranto", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 13,
              "children": [
                { "name": "Arteaga", "population": 1 },
                { "name": "De_Cosmo", "population": 1 },
                { "name": "Fanizzi", "population": 1 },
                { "name": "Galasso", "population": 1 },
                { "name": "Gjini", "population": 1 },
                { "name": "Hernandez", "population": 1 },
                { "name": "Kalantari", "population": 1 },
                { "name": "Locaputo", "population": 1 },
                { "name": "Merra", "population": 1 },
                { "name": "Pasquino", "population": 1 },
                { "name": "Peragine", "population": 1 },
                { "name": "Pizzutilo", "population": 1 },
                { "name": "Trizio", "population": 1 },
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 11,
              "children": [
                { "name": "Albano", "population": 1 },
                { "name": "Amadio", "population": 1 },
                { "name": "Capilungo", "population": 1 },
                { "name": "De_Silvia", "population": 1 },
                { "name": "Izzi", "population": 1 },
                { "name": "Mele", "population": 1 },
                { "name": "Micunco", "population": 1 },
                { "name": "Mizzi", "population": 1 },
                { "name": "Tedeschi", "population": 1 },
                { "name": "Tenerelli", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            }
          ]
        },
        {
          "id": "Don't Have",
          "name": "Don't have",
          "population": 23,
          "children": [
            { 
              "name": "Voted 2", 
              "population": 1,
              "children": [
                { "name": "Scarangella", "population": 1 }
              ]
            },
            { 
              "name": "Voted 4", 
              "population": 8,
              "children": [
                { "name": "Bahojb", "population": 1 },
                { "name": "Di_Carne", "population": 1 },
                { "name": "Forsennato", "population": 1 },
                { "name": "Macchia", "population": 1 },
                { "name": "Marzullo", "population": 1 },
                { "name": "Pellegrinaggio", "population": 1 },
                { "name": "Petroni", "population": 1 },
                { "name": "Pontrelli", "population": 1 },
              ]
            },
            { 
              "name": "Voted 5", 
              "population": 4,
              "children": [
                { "name": "Guastamacchia", "population": 1 },
                { "name": "Schiralli", "population": 1 },
                { "name": "Spada", "population": 1 },
                { "name": "Vitto", "population": 1 }
              ]
            }
          ]
        }
      ]
    }
  ]
}

// Create series
var series = root.container.children.push(am5hierarchy.VoronoiTreemap.new(root, {
  paddingLeft: 9,
  paddingRight: 9,
  paddingTop: 9,
  paddingBottom: 9,
  singleBranchOnly: true,
  downDepth: 2,
  upDepth: 1,
  initialDepth: 1,
  valueField: "population",
  categoryField: "name",
  childDataField: "children",
  idField: "name",
  type: "polygon",
  cornerCount: 120
}));

// Show full name if polygon is big and only the id if its small
series.labels.template.adapters.add("x", function (x, target) {
  var dataItem = target.dataItem;
  if (dataItem) {
    var polygon = dataItem.get("polygon");
    if (polygon) {
      var minX = polygon.getPrivate("minX", 0);
      var maxX = polygon.getPrivate("maxX", 0);
      var dataContext = dataItem.dataContext;

      if (dataContext) {
        if (maxX - minX < 50) {
          target.set("text", dataContext.id);
        } else {
          target.set("text", dataContext.name);
        }
      }
    }
  }
  return x;
});

// Handle click events
series.nodes.template.events.on("click", function (e) {
  var dataItem = e.target.dataItem;
  if (dataItem) {
    if (!dataItem.get("children")) {
      series.selectDataItem(dataItem.get("parent"));
    } else {
      series.set("selectedDataItem", dataItem);
    }
  }
});

// Create a home button
var button = root.tooltipContainer.children.push(am5.Button.new(root, {
  x: am5.p100,
  centerX: am5.p100,
  y: am5.p100,
  centerY: am5.p100,
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 5,
  paddingBottom: 5,
  background: am5.RoundedRectangle.new(root, {
    fill: am5.color(0xffffff),
    cornerRadius: 2,
    stroke: am5.color(0xcccccc),
    strokeWidth: 2
  }),
  icon: am5.Graphics.new(root, {
    svgPath: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z",
    fill: am5.color(0xcccccc),
    scale: 1.8
  })
}));

button.events.on("pointerover", function () {
  button.get("background").setAll({
    fill: am5.color(0xcccccc)
  });
  button.get("icon").setAll({
    fill: am5.color(0xffffff)
  });
});

button.events.on("pointerout", function () {
  button.get("background").setAll({
    fill: am5.color(0xffffff)
  });
  button.get("icon").setAll({
    fill: am5.color(0xcccccc)
  });
});

button.events.on("click", function () {
  series.set("selectedDataItem", series.dataItems[0]);
});

// Set data
series.data.setAll([data]);

// Select root node
series.set("selectedDataItem", series.dataItems[0]);

// Make stuff animate on load
series.appear(1000, 100);