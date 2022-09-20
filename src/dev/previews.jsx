import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import BarLinesList from "../components/BarLinesList";
import ProgressBar from "../components/ProgressBar";
import InfoCard from "../components/InfoCard";
import App from "../App";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/BarLinesList">
                <BarLinesList/>
            </ComponentPreview>
            <ComponentPreview path="/ProgressBar">
                <ProgressBar/>
            </ComponentPreview>
            <ComponentPreview path="/InfoCard">
                <InfoCard/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;