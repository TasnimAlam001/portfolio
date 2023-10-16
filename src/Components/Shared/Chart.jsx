import {
    CircularProgressbar,
    
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const Chart = () => {
    return (
        <div>
            <p>React</p>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={70}
                duration={2}
                easingFunction={easeQuadInOut}
                repeat={true}
            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: "none" })}
                        />
                    );
                }}
            </AnimatedProgressProvider>

        </div>
    );
};

export default Chart;