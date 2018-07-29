import React from 'react';
import {connect} from "react-redux";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from './worldmap.css';
import worldData from 'data/all_countries.json';
// import {UserItems} from "actions";
import {SetCountiesColor} from "actions";
import web3 from 'utils/web3';
import allCountries from "../../data/all_countries.json";

class Worldmap extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidUpdate() {
    let domId = document.getElementById('worldmap_container');
    while(domId.hasChildNodes()) {
      domId.removeChild(domId.firstChild);
    }
    const self = this;
    let map = new Datamap({
      element: document.getElementById('worldmap_container'),
      setProjection: function(e) {
        let t = e.offsetWidth
          , n = .95 * t
          , a = d3.geo.mercator().translate([t / 2, n / 2]).scale(t / 2 / Math.PI).rotate([-11, 0]);
        return {
          path: d3.geo.path().projection(a),
          projection: a,
        }
      },
      fills: {
        defaultFill: "#CCCCCC"
      },
      geographyConfig: {
        popupTemplate: (t, n)=>{
          return self.popup(t, n);
        },
        highlightFillColor: "#1A1B1C",
        highlightBorderColor: "#1A1B1C",
        highlightBorderWidth: 1,
        borderWidth: 0,
      },
      done: function(t) {
        // t.svg.selectAll(".datamaps-subunit").on("click", function(t) {
        //   e.click(t)
        // })
      },
    });

    const data = {};
    let currentCountry = [];
    const UserItems = this.props.setcountriescolor.data;
    for(let d of UserItems.values()) {
      if(worldData[d.itemId]){
        currentCountry.push(worldData[d.itemId]);
        worldData[d.itemId] = {...worldData[d.itemId], ...d};
      }
    }
    for(let k in worldData) {
      if(!worldData.hasOwnProperty(k)) continue;
      let d = worldData[k];
      currentCountry.map(item => {
        if(item.code3 === d.code3){
          data[d.code3] = "#" + (!d.owner ? "" : d.owner.slice(d.owner.length-6));
        }
      });
    }
    map.updateChoropleth(data, {
      reset: !0,
    });
  }

  popup(e) {
    const {items,  price} = this.props;
    // let t = this.props, n = t.items, a = t.price, r = worldData.find(function (t) {
    //   let n = t.code3;
    //   return e.properties.iso === n
    // });
    let r;
    for(let k in worldData) {
      if(!worldData.hasOwnProperty(k)) continue;
      let d = worldData[k];
      if(d.code3 === e.properties.iso) {
        r = d;break;
      }
    }
    if (!r) return '\n        <div class="datamap-hover">\n          <p class="datamap-name">\n            ' + e.properties.name + '\n          </p>\n        </div>\n      ';
    // let o = "#" + Object(u.a)(r.owner), i = "color: " + o;
    // if (price) {
    //   let s = parseInt(Object(l.a)(r.price), 10) * price;
    //   return '\n        <div class="datamap-hover">\n          <p class="datamap-name">\n            ' + r.name + '\n          </p>\n          <p>\n            <span style="' + i + '" class="datamap-nick">\n              ' + Object(p.a)(r.nick) + "\n            </span> " + g(s) + "\n          </p>\n        </div>\n      "
    // }
    const pop = '<div class="datamap-hover"><p class="datamap-name">' + r.name + '</p><p><span style="color:#000" class="datamap-nick">' + r.nick + '</span> ' + web3.parsePrice(r.price, 2) + ' ETH</p></div>';
    // console.log(pop);
    return pop;
  }

  render() {
    return (
      <div className={s.worldmap_map}>
        <div className={s.worldmap_map_container} id="worldmap_container" style={{position:"relative", height: "554px"}}>世界地图</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  setcountriescolor: state.setcountriescolor,
});

const mapDispatchToProps = dispatch => {
  return {
    loadSetCountiesColor: (...args)=>{dispatch(SetCountiesColor.loadSetCountiesColor(...args));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(s)(Worldmap) );

// export default  withStyles(s)(Worldmap);
