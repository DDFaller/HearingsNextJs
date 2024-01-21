"use client";
import '@mantine/core/styles.css';
import HearingsTable from "@/components/HearingTable";
import { Hearing } from "@/interfaces/Hearing";
import { MantineProvider, createTheme } from "@mantine/core";
import { useEffect, useState } from "react";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Home() {
  const [hearings, setHearings] = useState<Hearing[]>([]);

  useEffect(() => {
    // Fetch your API data here and update the state
    // Example: Fetching hearings data from your API
    fetch("https://localhost:7195/hearings")
      .then((response) => response.json())
      .then((data: Hearing[]) => setHearings(data));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MantineProvider theme={theme}>
        <h1>Hearings</h1>
        <HearingsTable hearings={hearings} />
      </MantineProvider>
    </main>
  );
}
