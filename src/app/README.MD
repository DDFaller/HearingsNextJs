# Hearings Management System

## Overview

This project is a Hearings Management System built with [Next.js](https://nextjs.org/) and [Mantine](https://mantine.dev/) for the front end. The back end is developed using ASP.NET Core with Entity Framework Core for database operations.

The system allows users to perform CRUD operations on hearings data, including adding new hearings, updating existing ones, and deleting hearings.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- View a list of hearings.
- Delete hearings.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/DDFaller/HearingsNextJs.git
cd HearingsNextJs
```

## API Endpoints
- GET /Hearings/Get: Retrieve a list of hearings from a JSON file.
- GET /Hearings/GetFromDB: Retrieve a list of hearings from the SQL Server database.
- GET /Hearings/{processNumber}: Retrieve a specific hearing by process number.
- POST /Hearings/AddToDB: Add a new hearing to the SQL Server database.
- PUT /Hearings/UpdateInDB/{processNumber}: Update an existing hearing in the SQL Server database.
- DELETE /Hearings/DeleteFromDB/{processNumber}: Delete a hearing from the SQL Server database.