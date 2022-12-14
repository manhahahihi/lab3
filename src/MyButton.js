import * as React from "react";

//Ex 0.3
/*class MyButton extends React.Component {
    render() {
        return <button>{this.props.children}</button>;
    }
} */

//Ex 1.2

/*class MyButton extends React.Component {
    render() {
        const { disable, text }  = this.props;
        return <button disable={disable}>{text}</button>;
    }
} */

//Ex 1.3

const Mybutton = ({ disable, text}) => (
    <button disable={disable}>{text}</button>
);

Mybutton.defaultProps = {
    text: "My Button",
    disabled: false,
};
export default Mybutton;