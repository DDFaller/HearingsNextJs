"use client";
import '@mantine/core/styles.css';
import HearingsTable from "@/components/HearingTable";
import { Button, MantineProvider, createTheme } from "@mantine/core";
import { Modal, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import UpdateHearing from "@/components/UpdateHearing";
import DeleteHearing from "@/components/DeleteHearing";
import HearingTable from "@/components/HearingTable";
import { Hearing } from "@/interfaces/Hearing";


const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function Home() {
  const [hearings, setHearings] = useState<Hearing[]>([]);
  const [selectedHearing, setSelectedHearing] = useState<any>(null);


  const handleGetHearings = () =>
  {
    const headers = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
    };
  
    fetch("https://hearings.azurewebsites.net/Hearings/GetFromDB",  headers )
      .then((response) => response.json())
      .then((data: Hearing[]) => setHearings(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    // Fetch your API data here and update the state
    // Example: Fetching hearings data from your API  
    handleGetHearings();
  }, []);



  const handleUpdateHearing = (processNumber: string, updatedHearing: any) => {
    // Implement the logic to update the hearing in the API
    // Update the state or fetch the updated data from the API
  };

  const handleDeleteHearing = (processNumber: string) => {
    // Implement the logic to delete the hearing from the API
    // Update the state or fetch the updated data from the API
    const handleDelete = async () => {
      try {
        const response = await fetch(`https://hearings.azurewebsites.net/Hearings/${processNumber}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            // Add any other headers if needed
          },
        });
  
        if (response.ok) {
          //onDelete(); // Trigger callback to update state or perform any other actions
        } else {
          // Handle error (e.g., show an error message)
          console.error("Failed to delete hearing");
        }
      } catch (error) {
        // Handle network error
        console.error("Network error:", error);
      }
    };
    handleDelete();
  };

  const handleSelectHearing = (hearing: any) => {
    setSelectedHearing(hearing);
  };
  

  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <MantineProvider theme={theme}>
        <h1>Hearings</h1>

        {/* Update Hearing Component */}
        {selectedHearing && (
          <UpdateHearing hearing={selectedHearing} onUpdate={handleUpdateHearing} />
        )}

        {/* Delete Hearing Component */}
        {selectedHearing && (
          <DeleteHearing processNumber={selectedHearing.processNumber} onDelete={handleDeleteHearing} />
        )}

        {/* Hearings Table */}
        <HearingsTable
          hearings={hearings}
          onSelect={handleSelectHearing}
        />
      </MantineProvider>
    </main>
  );
}
