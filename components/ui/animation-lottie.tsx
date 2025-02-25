import dynamic from "next/dynamic";
import React from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationLottieProps {
    animation: object;
    width?: string;
    margin?: string;
    height?: string;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({
    animation,
    width = "95%",
    margin = "auto",
    height = "auto",
}) => {
    return (
        <Lottie
            animationData={animation}
            loop
            autoplay
            style={{ width, height, margin }}
        />
    );
};

export default AnimationLottie;
