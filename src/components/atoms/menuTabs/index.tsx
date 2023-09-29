import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import './styles.css';
/*

 => TabsRoot
 display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 2px 10px var(--black-a4);

*/
export function MenuTabs() {
  return (
    <Tabs variant='line'>
    <TabList>
      <Tab>One</Tab>
      <Tab>Two</Tab>
      <Tab>Three</Tab>
    </TabList>
  
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
  )
}
