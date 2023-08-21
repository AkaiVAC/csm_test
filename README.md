# CSM Frontend Coding Assignment

This web app has been developed, keeping in mind, the guidelines set down in the document provided along with the data.

The primary objectives of this application is to create a user-friendly interface where users can place points on an input image and utilize an API to obtain the segmentation mask of the image. The design is based on the provided Figma wireframe.

The current solution tries to achieve the above goal in the best possible way within the available timeframe.

## Installation

To install this app locally, extract the project files to a directory of your choice and run the following commands to install all dependencies and start the app. The project uses [PNPM](https://pnpm.io/) for package management:

```bash
cd installation_directory
pnpm install
pnpm dev
```

Open your web browser and go to http://localhost:5173 to view the project.

## Deployment

The project has been deployed to Netlify by pushing the project to GitHub and following the instructions on Netlify's docs. The deployed project can be found at [https://csm-starter.netlify.app/](https://csm-starter.netlify.app/).

## Tech Stack and File Structure

### Dependencies

The app uses the following dependencies:

-   React
-   Vite
-   Typescript
-   Axios
-   React Tooltip
-   React Zoom Pan Pinch
-   Styled Components

### Project Structure

The project structure is organized as follows:

-   `public/`: Contains icon SVGs and provided images.
-   `src/`: Main source code directory.
    -   `components/`: Reusable components and their styles.
    -   `layouts/`: Layout components and related styles.
    -   `services/`: External API communication and context.
    -   `stores/`: Application-level contexts, providers, and hooks.
    -   `themes/`: Global styles and theme defaults.
    -   `types/`: TypeScript type definitions and enums.

## Fulfilled Requirements

The project fulfills the following requirements:

### Webpage Requirements

-   Implementation of the Figma wireframe for image segmentation.
-   Different buttons with distinct functionalities as described in the Figma wireframe.
-   Use of static images for the input image and mask (using provided images).
-   Responsive design across various devices.

### Bonus Requirements

The project includes the following bonus features:

-   Attention to design details and thoughtful design choices.
-   Submission of feedback linked to a Google Form (found [here](https://forms.gle/XhCeamGgyiF888w1A)).
-   Responsive design for various devices, resolutions, etc.

### Submission Requirements

-   Live website hosted at [https://csm-starter.netlify.app/](https://csm-starter.netlify.app/).
-   Zipped code files with clear instructions.
-   High-quality code with proper documentation.
-   List of packages used.
-   Deployment instructions.
-   Explanation of design choices.

## Design Choices

The following design enhancements were made during development:

-   Various tools employ distinct cursors to enhance user interaction.
-   The options for selecting Object or Background are dynamically hidden based on the currently selected tool.
-   The canvas employs a background color distinct from the overall design to ensure a clear visual distinction.

## Scope Reduction and Further Development

### Scope Reduction

The following features were excluded due to their scope and time constraints:

1. Absence of an upload/download process. The image has been directly embedded within the template. Despite implementing a basic API service, it remains unused.
2. Lack of testing coverage.
3. Occasional occurrence of a bug where the image loads incorrectly towards the bottom-right.
4. The session and status texts remain fixed/static without dynamic updates.

### Further development

1. A complete end-to-end testing setup with proper tooling.
2. A design system to organise assets and styling guides.
3. Proper User case study with user flows, user personas, wireframes, mockups and prototypes.
4. Further optimize the usage of external dependencies in the app.
