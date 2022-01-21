import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

import { Flag } from 'react-bootstrap-icons';

resetIdCounter();

const AboutPage = () => (
    <React.Fragment>
            
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="tab faq-accordion-tab">
                        <Tabs>
                            <TabList>
                                <Tab><Flag /> <span>Getting Started</span></Tab>
                            </TabList>

                            <TabPanel>
                                <div className="faq-accordion">
                                    <Accordion allowZeroExpanded preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Is this so accurate
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yeah it is accurate so far.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Who is the data provider.
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Open Weather Map is the service provider.</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    How did you Earn by these?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>We the website will pay based on the uers count..</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Is this Legal?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Yeah it is legal</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Who is the manager of this firm?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>MSK - 2020peccs314 Kishore</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Who is the owner of this?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Krishnaraghavan</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="g">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Developer of this
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>Navin3d</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="h">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    whatever it takes
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>whatever it takes</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="i">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                whatever it takes
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                    <p>whatever it takes</p>
                                                    <p>whatever it takes</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </React.Fragment>
);

export default AboutPage;