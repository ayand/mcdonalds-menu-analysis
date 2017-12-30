import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnChanges {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  @Input() private xVar: string;
  @Input() private yVar: string;

  private chart: any;
  private width: any;
  private height: any;
  private yScale: any;
  private xScale: any;
  private colorMap: any;
  private xAxis: any;
  private yAxis: any;
  private element: any;
  private svg: any;
  private tooltip: any;

  constructor() { }

  ngOnInit() {
      this.createScatterPlot();
      if (this.data) {
          this.updateScatterPlot();
      }
  }

  ngOnChanges() {
      //this.updateScatterPlot();
      if (this.data) {
          this.updateScatterPlot();
      }
  }

  createScatterPlot() {
      //console.log(this.data);
      this.element = this.chartContainer.nativeElement;
      this.width = 450;
      this.height = 450;
      this.svg = d3.select(this.element)
          .append("svg")
          .attr("width", this.width)
          .attr("height", this.height);

      this.svg.append("rect")
          .attr("fill", "#DDDDDD")
          .attr("width", 450)
          .attr("height", 450);

      this.xScale = d3.scaleLinear().domain([0, 1000]).range([50, 400]);
      this.yScale = d3.scaleLinear().domain([0, 1000]).range([400, 50]);

      this.xAxis = d3.axisBottom(this.xScale);
      this.yAxis = d3.axisLeft(this.yScale);

      this.svg.append("g")
          .attr("class", "xAxis")
          .attr("transform", "translate(0,400)")
          .call(this.xAxis);

      this.svg.append("g")
          .attr("class", "yAxis")
          .attr("transform", "translate(50,0)")
          .call(this.yAxis);

      this.svg.append("text")
          .attr("class", "yVariable")
          .attr("transform", "translate(15, 30)")
          .text("Y variable");

      this.svg.append("text")
          .attr("class", "xVariable")
          .attr("transform", "translate(230, 440)")
          .text("X variable");

      this.colorMap = {
          "Breakfast": "#990000",
          "Beef & Pork": "#D7301F",
          "Chicken & Fish": "#EF6548",
          "Salads": "#FC8D59",
          "Snacks & Sides": "#FDBB84",
          "Desserts": "#FDD49E",
          "Beverages": "#2C7FB8",
          "Coffee & Tea": "#7FCDBB",
          "Smoothies & Shakes": "#EDF8B1"
      }

      this.tooltip = d3.select(this.element).append("div")
          .attr("class", "tooltip")
          .style("opacity", 0)
          .style("background-color", "black")
          .style("color", "white")
          .style("border-radius", "8px")
          .style("padding", "5px")
          .style("font-size", 8);
  }

  updateScatterPlot() {
      //console.log(this.data);
      this.xScale.domain(d3.extent(this.data, d => d[this.xVar]));
      this.yScale.domain(d3.extent(this.data, d => d[this.yVar]));

      this.xAxis.scale(this.xScale);
      this.yAxis.scale(this.yScale);

      if (this.svg) {
        this.svg.select(".xAxis")
            .transition()
            .duration(1000)
            .call(this.xAxis);

        this.svg.select(".yAxis")
            .transition()
            .duration(1000)
            .call(this.yAxis);

        this.svg.select(".yVariable")
            .text(this.yVar);

        this.svg.select(".xVariable")
            .text(this.xVar);

        const dots = this.svg.selectAll(".dot")
            .data(this.data, d => d["Item"]);

        const dotsEnter = dots.enter().append("circle")
            .attr("class", "dot")
            .attr("r", 5)
            .style("opacity", 0.7)
            .attr("fill", d => this.colorMap[d["Category"]])
            .on("mouseover", d => {
                this.tooltip.transition()
                    .duration(1000)
                    .style("opacity", 0.8);

                const htmlText = "<table style='font-size:8px'>\
                                    <tr>\
                                      <td>\
                                        <h6>" + d["Item"] + "\
                                      </td>\
                                    </tr>\
                                    <tr>\
                                    </tr>\
                                  </table>";

                this.tooltip.html(htmlText)
                    .style("left", (this.xScale(d[this.xVar])) + "px")
                    .style("top", (this.yScale(d[this.yVar]) + 100) + "px");
            })
            .on("mouseout", d => {
                this.tooltip.transition()
                    .duration(1000)
                    .style("opacity", 0);
            });

        dots.merge(dotsEnter)
            .transition()
            .duration(1000)
            .attr("cx", d => this.xScale(d[this.xVar]))
            .attr("cy", d => this.yScale(d[this.yVar]));

        dots.exit().remove();

      }
      //console.log(d3.extent(this.data, d => d[this.xVar]));
      //console.log(d3.extent(this.data, d => d[this.yVar]))
  }

}
