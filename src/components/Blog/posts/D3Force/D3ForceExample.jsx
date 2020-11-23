import React, { memo, useEffect, useMemo, useRef, useState } from "react"
import { forceSimulation, forceCollide } from "d3-force"

import Button from "components/_ui/Button/Button"
import Icon from "components/_ui/Icon/Icon"
import { useInterval } from "utils/utils"
import { useChartDimensions } from "components/_ui/Chart/utils/utils"

import "./D3ForceExample.scss"

const D3ForceExample = ({ forces=[], numberOfNodes = 100, isRunning, tickIteration = 0 }) => {
  const canvasElement = useRef()
  const [wrapperElement, dms] = useChartDimensions({
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
  })

  const r = 6
  const nodes = useRef([])


  useEffect(() => {
    nodes.current = new Array(numberOfNodes).fill(0).map(d => ({
      x: 100,
      y: 100,
    }))
  }, [numberOfNodes])

  const simulation = useForce(nodes.current, forces)

  const updateCanvas = () => {
    if (!canvasElement.current) return
    const context = canvasElement.current.getContext("2d")

    context.clearRect(0, 0, dms.width, dms.height)
    // context.fillStyle = "#9980FA"
    context.fillStyle = "#DB5C6E"

    nodes.current.forEach(({x, y, movement}) => {
      context.beginPath()
      context.arc(
        x + dms.width / 2, y + dms.height / 2, r,
        0, 2 * Math.PI, false
      )
      context.fill()
    })

    if (isRunning) {
      simulation.alpha(1).restart()
    }
  }
  useInterval(updateCanvas, 100)

  // useEffect(() => {
    //   if (!simulation.on) return
    //   simulation.on("tick", updateCanvas)

    // }, [simulation])
  useEffect(() => {
    if (isRunning) {
      simulation.alpha(1).restart()
    } else {
      simulation.stop()
    }
  }, [isRunning])

  useEffect(() => {
    if (simulation) simulation.tick()
  }, [tickIteration])


  return (
    <div className="D3ForceExample" ref={wrapperElement}>
      <canvas width={dms.width} height={dms.height} ref={canvasElement} />
    </div>
  )
}

export default D3ForceExample

export const useForce = (nodes=[], forces=[]) => {
  const simulation = useRef(forceSimulation())
  const currentForceNames = useRef([])

  useEffect(() => {
    simulation.current.nodes(nodes)
  }, [nodes])

  useEffect(() => {
    currentForceNames.current.forEach((id) => {
      simulation.current.force(id, null)
    })
    currentForceNames.current = forces.map(([name, force, id]) => id)
    forces.forEach(([name, force, id]) => {
      simulation.current.force(id, force)
    })
  //   simulation.current.alpha(1).restart()
  // console.log(forces);
  }, [forces])

  // useInterval(() => {
  //   if (!forces.length) return
  //   if (!simulation.current) return
  //   simulation.current.tick()
  // }, 100)

  return simulation.current
}