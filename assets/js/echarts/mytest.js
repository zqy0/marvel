/*------------------------------------------------------
    Author : www.qqcontact.cn
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

var myChart = echarts.init(document.getElementById('main'));
// 显示标题，图例和空的坐标轴
myChart.setOption({
    title: {
        text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
        data: ['用电量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '用电量',
        type: 'line',
        data: []
    }]
});

// 异步加载数据
// $.get('../data_2017_2.json').done(function (data) {
$.get('data/data_2017_cleaned.json').done(function (data) {
    // console.log(data);
    console.log(data[0]);
    console.log(data[0][5]);

    var used_power = [];
    var datetimes = [];
    // 注意i=0后面是逗号  for(i=0,len=data.length;i<len; i++) {
    for (i = 0, len = data.length; i < len; i++) {
        // console.log(data[i][3]);
        if (data[i][3] === 4301) {
            console.log(data[i]);

            used_power.push(data[i][6]);
            datetimes.push(data[i][4]);
        }
    }
    console.log(datetimes);
    console.log(used_power);


    // 填入数据
    myChart.setOption({
        xAxis: {
            data: datetimes
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '用电量',
            data: used_power
        }]
    });

});

