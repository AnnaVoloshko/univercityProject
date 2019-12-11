function BuildChartBar(data, chartTitle) {
    var ctx = document.getElementById("chartRadar").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
        }
    });
    return myChart;
}


// HTML To JSON Script 
var table = document.getElementById('tableID');
var json = []; // first row needs to be headers 
var headers = [];
for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}
// go through cells 
for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    for (var j = 0; j < tableRow.cells.length; j++) {
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }
    json.push(rowData);
}
console.log(json);
// Map json values back to label array
var labels = json.map(function (e) {
    return e.number;
});
console.log(labels);

// Map json values back to values array
var values1 = json.map(function (e) {
    return e.title1;
});

var values2 = json.map(function (e) {
    return e.title2;
});

var values3 = json.map(function (e) {
    return e.title3;
});

var values4 = json.map(function (e) {
    return e.title4;
});

var chart = BuildChartBar({
    labels,
    datasets: [{
        label: labels[0],
        data: values1,
        backgroundColor: [ // Specify custom colors
            'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [ // Add custom color borders
            'rgba(255,99,132,1)',
        ],
        borderWidth: 1
    },{
        label: labels[1],
        data: values2,
        backgroundColor: [ // Specify custom colors
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [ // Add custom color borders
            'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
    },{
        label: labels[2],
        data: values3,
        backgroundColor: [ // Specify custom colors
            'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [ // Add custom color borders
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    },{
        label: labels[3],
        data: values4,
        backgroundColor: [ // Specify custom colors
            'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [ // Add custom color borders
            'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1
    }]
}, "Items");