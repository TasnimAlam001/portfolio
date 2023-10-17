import { useState } from "react";
import Project from "./Project";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProjects from "../../../hooks/useProjects";



const MyProjects = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [projects] = useProjects();

    const html = projects.filter(project => project.usedTec.includes("HTML"))
    const react = projects.filter(project => project.usedTec.includes("React"))
    const express = projects.filter(project => project.usedTec.includes("ExpressJs"))
    const mongoDB = projects.filter(project => project.usedTec.includes("MongoDB"))
    console.log("........react projects", react)
    console.log("........mongo projects", mongoDB)



    return (
        <div id="project" className="w-2/3 mx-auto  mt-20 py-10">
            <h2 className="text-center text-5xl my-16 divider text-white">My Projects</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-10 text-center">
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Html</Tab>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                    <Tab>MongoDb</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-16 ">
                        {
                            projects.map(p => <Project
                                key={p._id}
                                project={p}

                            ></Project>)
                        }

                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-16 ">
                        {
                            html.map((p, index) => <Project
                                key={index}
                                project={p}

                            ></Project>)
                        }

                    </div>


                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-16 ">
                        {
                            react.map((p, index) => <Project
                                key={index}
                                project={p}

                            ></Project>)
                        }

                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-16 ">
                        {
                            express.map((p, index) => <Project
                                key={index}
                                project={p}

                            ></Project>)
                        }

                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-16 ">
                        {
                            mongoDB.map((p, index) => <Project
                                key={index}
                                project={p}

                            ></Project>)
                        }

                    </div>

                </TabPanel>

            </Tabs>






        </div>
    );
};

export default MyProjects;