"use client";
import { IconUser } from "@/components/atoms/iconComponents/iconUser";
import Image from "next/image";
import logoPrincipal from "../../../public/assets/LOGO PRINCIPAL.png";
import "../globals.css";
import * as Tabs from "@radix-ui/react-tabs";
import { Box, Text } from "@radix-ui/themes";

export default function Dashboard() {
  return (
    <main className="p-3">
      <header className="flex items-center">
        <div>
          <IconUser color="var(--color-purple)" />
        </div>
        {/* 77px */}
        <div className="flex justify-center w-[calc(100%-82px)]">
          <Image src={logoPrincipal} alt="logo principal" loading="lazy" />
        </div>
      </header>

      <div className="flex gap-2">
        <Tabs.Root defaultValue="account">
          <Tabs.List style={{ fontSize: "10",display:'flex',gap:'15px' }}>
            <Tabs.Trigger value="account">Account</Tabs.Trigger>
            <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Box px="2" pt="2" pb="2">
            <Tabs.Content value="account">
              <Text size="2">Make changes to your account.</Text>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
    </main>
  );
}
