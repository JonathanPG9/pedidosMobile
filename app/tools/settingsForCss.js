import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    //  colors
    primary: "#FC6D3F", 
    secondary: "#CDCDD2", 
    black: "#1E1F20",
    white: "#FFFFFF", 
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,

    // app dimensions
    width,
    height
};


const css = { COLORS, SIZES };

export default css;