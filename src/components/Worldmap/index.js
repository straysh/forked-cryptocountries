import React from 'react';

import s from './worldmap.css';
import withStyles from "isomorphic-style-loader/lib/withStyles";

class Worldmap extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    let map = new Datamap({
      element: document.getElementById('worldmap_container'),
      setProjection: function(e) {
        let t = e.offsetWidth
          , n = .95 * t
          , a = d3.geo.mercator().translate([t / 2, n / 2]).scale(t / 2 / Math.PI).rotate([-11, 0]);
        return {
          path: d3.geo.path().projection(a),
          projection: a
        }
      },
      fills: {
        defaultFill: "#B9B9B9"
      },
      geographyConfig: {
        popupTemplate: function(t, n) {
          return e.popup(t, n)
        },
        highlightFillColor: "#1A1B1C",
        highlightBorderColor: "#1A1B1C",
        highlightBorderWidth: 1,
        borderWidth: 0
      },
      done: function(t) {
        t.svg.selectAll(".datamaps-subunit").on("click", function(t) {
          e.click(t)
        })
      }
    });

    const data = [];
    map.updateChoropleth(data, {
      reset: !0
    })
  }

  render() {
    return (
      <div className={s.worldmap_map}>
        <div className={s.worldmap_map_container} id="worldmap_container" style={{height: "554px"}}>世界地图</div>
      </div>
    );
  }
}

export default withStyles(s)(Worldmap);
