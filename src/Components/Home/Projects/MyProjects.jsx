import { useState } from "react";
import Project from "./Project";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProjects from "../../../hooks/useProjects";


const MyProjects = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [projects] = useProjects();

    return (
        <div id="project" className="w-2/3 mx-auto  mt-32 py-10">
            <h2 className="text-center text-5xl my-16 divider text-white">My Projects</h2>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className="mt-10 text-center">
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Html</Tab>
                    <Tab>CSs</Tab>
                    <Tab>React</Tab>
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
                    <p>Html</p>

                </TabPanel>
                <TabPanel>
                    <p>Css</p>

                </TabPanel>
                <TabPanel>
                    <p>react</p>

                </TabPanel>
                <TabPanel>
                    MongoDb

                </TabPanel>

            </Tabs>






        </div>
    );
};

export default MyProjects;