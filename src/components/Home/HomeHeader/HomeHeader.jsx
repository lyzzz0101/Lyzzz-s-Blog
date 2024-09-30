import React, {Component} from "react"
import WatercolorCanvas from "components/_shared/WatercolorCanvas/WatercolorCanvas"

require('./HomeHeader.scss')

class HomeHeader extends Component {

  render() {
    return (
      <div className="HomeHeader">
        <WatercolorCanvas className="HomeHeader__watercolor-canvas" />
        <div className="HomeHeader__content">
          <div className="HomeHeader__content__text">
            <div className="HomeHeader__content__text__top">Hi, I’m</div>
            <h1 className="HomeHeader__content__text__title">Leah Lin</h1>

            <div className="HomeHeader__content__text__description">
              A Frontend Developer.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader
