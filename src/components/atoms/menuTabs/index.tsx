import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

export function MenuTabs() {
  return (
    <Tabs position="relative" variant="soft-rounded" colorScheme="green">
      <TabList
        className="flex justify-between"
        aria-orientation="horizontal"
        borderBottomWidth={"1px"}
      >
        <Tab className="font-petrov text-lg tracking-[0.1rem] p-1">Projetos</Tab>
        <Tab className="font-petrov text-lg tracking-[0.1rem] p-1">Habilidades</Tab>
        <Tab className="font-petrov text-lg tracking-[0.1rem] p-1">Contatos</Tab>
      </TabList>
      <TabIndicator
        mt="-5.8"
        height="4px"
        bg="var(--color-purple)"
        className="rounded"
      />
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
  );
}
