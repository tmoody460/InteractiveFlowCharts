import * as React from 'react';
import { ApplicationState } from 'ClientApp/store';
import { RouteComponentProps } from 'react-router';
import { Motion, spring } from "react-motion";

export default class FlowChart extends React.Component<RouteComponentProps<{}>, { show: boolean }>{
    constructor(props: any) {
        super(props);
        this.state = {
            show: true,
        };
    }

    toggle = (): void => {
        this.setState({
            show: !this.state.show
        });
    }

    public render() {
        return (

            <div>
                <h1>Flow Chart???</h1>

                <div style={{border: "1px solid gray", width: "500px", height: "500px", textAlign: "center", overflow: "hidden"}}>
                    <Motion defaultStyle={{ y: 0, opacity: 0 }}
                        style={{
                            y: spring(this.state.show ? 0 : -200),
                            opacity: spring(this.state.show ? 1 : 0)
                        }}>
                        {style => (
                            <Box translateY={style.y} opacity={style.opacity}>
                                Box
                        </Box>
                        )}
                    </Motion>
                </div>

                <button onClick={() => { this.toggle() }}>Increment</button>
            </div >
        );
    }
}


class Box extends React.Component<{ translateY: number, opacity: number }, {}> {
    render() {
        let style = {
            background: "green",
            width: "50px",
            height: "50px",
            transform: `translate(${this.props.translateY}px, ${this.props.translateY}px)`,
            opacity: this.props.opacity,
            display: "inline-block"
        };

        return <div style={style}>
            {this.props.children}
        </div>;
    }
}
