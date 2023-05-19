import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { ReactPropTypes } from "react";

const NavigationBar = () => {
    return (
            <div className="sticky top-0 bg-black flex justify-center items-center gap-16">
                {[
                    ["Home", "#home-section"],
                    ["About Me", "#about-me-section"],
                    ["Media Kit", "#media-kit-section"],
                    ["Contact Me", "#contact-me-section"],
                ].map(([title, url]) => (<NavbarButton label={title} link={url} />))}
            </div>
    );
};

export default NavigationBar;

interface NavbarButtonProps {
    link: string;
    label: string;
}

export const NavbarButton = (props: NavbarButtonProps) => {
    return <a href={props.link} className="text-white font-semibold font-play">{props.label}</a>;
};
