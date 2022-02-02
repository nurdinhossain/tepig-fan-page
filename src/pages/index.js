import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import Layout from "../components/layout"
import TimelineBox from "../components/timelineBox";
import '../styles/main.scss';

// markup
const IndexPage = () => {

    return (
        <div className="main">
            <Layout>
                <div className="main-content">
                    <StaticImage 
                        src="../images/tepig.png"
                        width={700}
                    />
                    <p>
                        Behold, the all-mighty Tepig! With a heart of kindess and burning ferocity, Tepig are <u>scientifically</u>, <u>mathemematically</u>, <u>geologically</u>, and <u>geometrically</u> proven to be the GREATEST pokemon.
                    </p>
            </div>
            </Layout>
            <React.Fragment>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <TimelineBox type="right" header="Tepig">
                                <p>
                                    "Tepig is a quadrupedal, pig-like Pokémon that is primarily orange. It has oval eyes, a red nose, and a thick yellow stripe on its snout... Tepig is a nimble Pokémon capable of blowing fire from its snout. It will cloak itself in these flames in order to use its former signature move, Heat Crash. However, it will spout thick, black smoke when ill. Tepig will roast berries before eating them, but occasionally gets overexcited and burns them." - <a href="https://bulbapedia.bulbagarden.net/wiki/Tepig_(Pok%C3%A9mon)">Tepig Wiki</a>
                                </p>
                            </TimelineBox>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <StaticImage 
                                src="../images/tepig.png"
                                width={400}
                            />  
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                            <TimelineBox type="left" header="Pignite">
                                <p>
                                    "Pignite is a bipedal, pig-like Pokémon. Its chubby body is orange with brown bands around its shoulders, sides, belly, hands, and from the back of its head down its snout... Pignite has a fire in its stomach, which it fuels with food. The intensity of this flame increases as fuel is added or when Pignite is angered. As the flame grows stronger, Pignite's speed increases. If in danger, it will blow out large smoke clouds in order to escape. In the past, Heat Crash was Pignite's signature move." - <a href="https://bulbapedia.bulbagarden.net/wiki/Pignite_(Pok%C3%A9mon)">Pignite Wiki</a>
                                </p>
                            </TimelineBox>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <StaticImage
                                src="../images/pignite.png"
                                width={400}
                            />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <TimelineBox type="right" header="Emboar">
                                <p>
                                    "Emboar is a bulky, bipedal Pokémon with pig-like features. It has a red nose, large bushy black eyebrows, and two tusks protruding from its lower jaw... Using the wreath of flames on its neck and shoulders, Emboar will set its hands on fire. It uses its power and speed to master fighting moves. Though very tough and relentless when fighting, it shows deep affection for those it considers friends. It can also unleash powerful blasts of fire using only its nose and cloak its body in a fire to use Heat Crash." - <a href="https://bulbapedia.bulbagarden.net/wiki/Emboar_(Pok%C3%A9mon)">Emboar Wiki</a> 
                                </p>
                            </TimelineBox>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <StaticImage
                                src="../images/emboar.png"
                                width={400}
                            />
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </React.Fragment>
        </div>
    )
}

export default IndexPage
