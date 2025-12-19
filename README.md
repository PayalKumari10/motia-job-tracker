# Job Application Tracker – Backend Reloaded Hackathon

A backend-driven Job Application Tracker built using Motia during the Backend Reloaded Hackathon.  
This project demonstrates how event-driven workflows can automate job application tracking and follow-up scheduling.

## Problem Statement

Managing multiple job applications manually is inefficient.  
Tracking application status, remembering follow-up dates, and maintaining consistency quickly becomes error-prone.

This project solves that by using an automated backend workflow that:

- Creates job applications via an API
- Emits events on creation
- Automatically schedules follow-up workflows

## Solution Overview

Using Motia as the unified backend runtime, this project models the entire system using **Steps**:

- API Steps for creating applications
- Event Steps for triggering workflows
- Background logic for follow-up scheduling

All workflows are observable and debuggable via the Motia Workbench.

## Tech Stack

- Motia (Unified backend framework)
- TypeScript
- Node.js

## Core Workflow

1. A POST API receives job application details.
2. The API emits an `application.created` event.
3. The event triggers a follow-up workflow automatically.
4. Workflow execution is visible in Motia logs and the Workbench.

## How Motia is Used

Motia is used as the core backend engine.  
The project leverages:

- API Steps for HTTP endpoints
- Event-driven workflows
- Unified runtime for backend logic
- Built-in observability via the Workbench

This avoids fragmented services and keeps all backend logic in a single workflow system.

## AI Tool Usage

AI tools such as ChatGPT were used to assist with:

- Workflow planning
- Step handler logic
- Code structure guidance

AI usage is fully declared as per hackathon rules.

## Running the Project Locally

```bash
npm install
npm run dev
```

This starts the Motia runtime and opens the Workbench at:
http://localhost:3000

## Demo

The project is demonstrated via a short video walkthrough showing:

Project structure in VS Code

API execution using Postman or curl

Event emission and workflow logs in Motia

## Hackathon Context

This project was built from scratch during the hackathon and is not a repackaged or modified existing project.
All workflows, logic, and design were created during the event.

## Author

Payal Kumari
