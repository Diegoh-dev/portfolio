import { Posts } from "@/components/molecule";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function MenuTabs() {
  const { theme, setTheme } = useTheme();
  return (
    <Tabs position="relative" variant="soft-rounded" colorScheme="green">
      <TabList
        className="flex justify-between border-gray"
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
        bg={ theme === 'light' ? "var(--color-blue)" :"var(--color-purple)"}
        className="rounded"
      />
      <TabPanels mt={'.5rem'}>
        <TabPanel>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
        </TabPanel>
        <TabPanel>
          <p>Habilidades!</p>
        </TabPanel>
        <TabPanel>
          <p>Contatos!</p>
        </TabPanel>
      </TabPanels>

      <p>o tema atual é {theme}</p>
    </Tabs>
    
  );
}
