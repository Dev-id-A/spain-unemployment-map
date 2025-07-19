//Variables
    const width = 960;
    const height = 600;

//SVG   
    const svg = d3.select("body")
                    .append("svg")
                    .attr("viewBox", `0 0 ${width} ${height}`)
                    .attr("preserveAspectRatio", "xMidYMid meet")
                    .style("height", "100%")
                    .style("width", "100%");
//Data fetch

    d3.json("https://unpkg.com/es-atlas/es/provinces.json")
        .then(spainMap => {
//Map display 
            const projection = d3.geoConicConformalSpain();
            
            const path = d3.geoPath().projection(projection)

            const provinces = topojson.feature(spainMap, spainMap.objects.provinces).features;

            svg.selectAll("path")
                .data(provinces)
                .join("path")
                .attr("d", path)
                .attr("fill", "blue")
                .attr("stroke", "white")
                .attr("stroke-width", 0.1);

        });