import React from "react";
import WelcomeSection from "./WelcomeSection";
import AboutSection from "./AboutSection";

export default function Home() {
    return (
        <section>
            <WelcomeSection devName={"Peagah Vieira"} />
            <AboutSection
                githubLink={"https://github.com/Peagah-Vieira"}
                linkedinLink={"https://www.linkedin.com/in/pedro-henrique-vieira-073b62236/"}
                instagramLink={"https://www.instagram.com/pea_gah/"}
            />
        </section>
    )
}