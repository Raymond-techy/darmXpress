import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

import "./tab.css";

const regular = {
  livingRoom: [
    { id: 1, text: "Cover Sensitive Areas" },
    { id: 2, text: "All surfaces Dusted and Wiped" },
    { id: 3, text: "DoorKnobs and Doorframes Polished" },
    { id: 4, text: "Cobwebs Taken Out" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "Clean Mirrors" },
  ],
  Kitchen: [
    { id: 1, text: "Clean kitchen counters and Table Tops" },
    {
      id: 2,
      text: "Clean inside/outside of appliances (Fridge, Stovetop, Microwave and Oven).",
    },
    { id: 3, text: "Clean inside, around and under the sink." },
    { id: 4, text: "Wash dishes" },
    { id: 5, text: "Hard Surfaces Swept and Scrubed" },
    { id: 6, text: "Empty and wash trash can" },
  ],
  RestRoom: [
    { id: 1, text: "Cover Sensitive Areas" },
    { id: 2, text: "All surfaces Dusted and Wiped" },
    { id: 3, text: "DoorKnobs and Doorframes Polished" },
    { id: 4, text: "Cobwebs Taken Out" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "Clean Mirrors" },
  ],
  Bedroom: [
    { id: 1, text: "Cover Sensitive Areas" },
    { id: 2, text: "All surfaces Dusted and Wiped" },
    { id: 3, text: "DoorKnobs and Doorframes Polished" },
    { id: 4, text: "Cobwebs Taken Out" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "Clean Mirrors" },
  ],
  commonAreas: [
    { id: 1, text: "Passage and walkways swept and cleaned" },
    { id: 2, text: "Windows and window sills dusted" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "General Straightening" },
  ],
  price: "35,000",
  time: "4 HOURS",
};
const spring = {
  livingRoom: [
    { id: 1, text: "Hard Surfaces Swept, scrubed and Cleaned" },
    { id: 2, text: "All surfaces Dusted and Wiped" },
    { id: 3, text: "DoorKnobs and Doorframes Polished" },
    { id: 4, text: "Cobwebs Taken Out" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "Clean Mirrors" },
    { id: 7, text: "Inside window sills brushed out" },
    { id: 8, text: "Windows, glasses shined and tracks cleaned.." },
  ],
  Kitchen: [
    { id: 1, text: "Clean kitchen counters and Table Tops" },
    {
      id: 2,
      text: "Clean inside/outside of appliances (Fridge, Stovetop, Microwave and Oven).",
    },
    { id: 3, text: "Clean inside, around and under the sink." },
    { id: 4, text: "Wash dishes" },
    { id: 5, text: "Hard Surfaces Swept and Scrubed" },
    { id: 6, text: "Empty and wash trash can" },
    { id: 7, text: "Clean in and out of cupboards and cabinets" },
  ],
  RestRoom: [
    { id: 1, text: "Cover Sensitive Areas" },
    { id: 2, text: "All surfaces Dusted and Wiped" },
    { id: 3, text: "DoorKnobs and Doorframes Polished" },
    { id: 4, text: "Cobwebs Taken Out" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "Clean Mirrors" },
  ],
  Bedroom: [
    { id: 1, text: "Cover Sensitive Areas" },
    { id: 2, text: "All surfaces Dusted and Wiped" },
    { id: 3, text: "DoorKnobs and Doorframes Polished" },
    { id: 4, text: "Cobwebs Taken Out" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "Clean Mirrors" },
  ],
  commonAreas: [
    { id: 1, text: "Passage and walkways swept and cleaned" },
    { id: 2, text: "Windows and window sills dusted" },
    { id: 5, text: "Light Switches cleaned" },
    { id: 6, text: "General Straightening" },
  ],
  price: "50,000",
  time: "4 HOURS",
};
const funmigation = {
  livingRoom: [
    { id: 1, text: "cover sensitive areas" },
    { id: 2, text: "cover sensitive areas" },
    { id: 3, text: "cover sensitive areas" },
    { id: 4, text: "cover sensitive areas" },
    { id: 5, text: "cover sensitive areas" },
    { id: 6, text: "cover sensitive areas" },
    { id: 7, text: "cover all items" },
  ],
  Kitchen: [
    { id: 1, text: "cover sensitive areas" },
    { id: 2, text: "cover sensitive areas" },
    { id: 3, text: "cover sensitive areas" },
    { id: 4, text: "cover sensitive areas" },
    { id: 5, text: "cover sensitive areas" },
    { id: 6, text: "cover sensitive areas" },
    { id: 7, text: "cover all items" },
    ,
  ],
  RestRoom: [
    { id: 1, text: "cover sensitive areas" },
    { id: 2, text: "cover sensitive areas" },
    { id: 3, text: "cover sensitive areas" },
    { id: 4, text: "cover sensitive areas" },
    { id: 5, text: "cover sensitive areas" },
    { id: 6, text: "cover sensitive areas" },
    { id: 7, text: "cover all items" },
  ],
  Bedroom: [
    { id: 1, text: "cover sensitive areas" },
    { id: 2, text: "cover sensitive areas" },
    { id: 3, text: "cover sensitive areas" },
    { id: 4, text: "cover sensitive areas" },
    { id: 5, text: "cover sensitive areas" },
    { id: 6, text: "cover sensitive areas" },
    { id: 7, text: "cover all items" },
  ],
  commonAreas: [
    { id: 1, text: "cover sensitive areas" },
    { id: 2, text: "cover sensitive areas" },
    { id: 3, text: "cover sensitive areas" },
    { id: 4, text: "cover sensitive areas" },
    { id: 5, text: "cover sensitive areas" },
    { id: 6, text: "cover sensitive areas" },
    { id: 7, text: "cover all items" },
  ],
  price: "30,000",
  time: "1 HOUR",
};

export const Regular = () => {
  return (
    <div>
      <div className="price">
        <div>
          <p style={{ color: "gray", fontWeight: "lighter", fontSize: 18 }}>
            Price :
          </p>
          <h1> {regular.price}</h1>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "lighter", fontSize: 18 }}>
            Time :
          </p>
          <h1> {regular.time}</h1>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <p style={{ textAlign: "left" }}>Living Room</p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              KITCHEN
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              Bedrooms
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              RestRooms & BATHROOMS
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              Common Areas
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {regular.livingRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {regular.Kitchen.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {regular.RestRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {regular.RestRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {regular.commonAreas.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export const Spring = () => {
  return (
    <div>
      <div className="price">
        <div>
          <p style={{ color: "gray", fontWeight: "lighter", fontSize: 18 }}>
            Price :
          </p>
          <h1> {spring.price}</h1>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "lighter", fontSize: 18 }}>
            Time :
          </p>
          <h1> {spring.time}</h1>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <p style={{ textAlign: "left" }}>Living Room</p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              KITCHEN
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              Bedrooms
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              RestRooms & BATHROOMS
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              Common Areas
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {spring.livingRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {spring.Kitchen.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {spring.RestRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {spring.RestRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {spring.commonAreas.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export const Funmigation = () => {
  return (
    <div>
      <div className="price">
        <div>
          <p style={{ color: "gray", fontWeight: "lighter", fontSize: 18 }}>
            Price :
          </p>
          <h1> {funmigation.price}</h1>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "lighter", fontSize: 18 }}>
            Time :
          </p>
          <h1> {funmigation.time}</h1>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <p style={{ textAlign: "left" }}>Living Room</p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              KITCHEN
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              Bedrooms
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              RestRooms & BATHROOMS
            </p>
          </Tab>
          <Tab>
            <p style={{ textTransform: "uppercase", textAlign: "left" }}>
              Common Areas
            </p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {funmigation.livingRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {funmigation.Kitchen.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {funmigation.RestRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {funmigation.RestRoom.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <ul className="mb-8 space-y-4 align-middle mt-4">
              {funmigation.commonAreas.map((list) => (
                <li className="flex items-center" key={list.id}>
                  <div className="mr-1">
                    <svg
                      className="w-4 h-4 text-teal-accent-400"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeWidth="2">
                      <polyline
                        fill="none"
                        stroke="currentColor"
                        points="6,12 10,16 18,8"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="11"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-300">{list.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
