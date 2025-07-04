//Variables
    const width = 960;
    const height = 600;

//SVG   
    const svg = d3.select("body")
                    .append("svg")
                    .attr("viewBox", `0  0 ${width} ${height}`)
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .style("height", "100%")
                    .style("width", "100%")
                    .style("background-color", "grey");
//Data fetch
    Promise.all([
        d3.json("https://unpkg.com/es-atlas/es/municipalities.json"),
        d3.json("https://servicios.ine.es/wstempus/jsstat/ES/DATASET/29867?nult=1&formato=json")
    ]).then(([spainMap, data]) => {
        console.log(spainMap);
        console.log(data);
    });