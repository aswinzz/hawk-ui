# Hawk UI

Welcome to the documentation and component library for Hawk UI. 
This repository contains the Storybook project, which showcases your UI components, design system, and provides documentation for their usage.

Design Implemented from https://www.figma.com/file/QPYqQMfmJQHSInCzTBH4Ra/Hawk---Design-System-(Community)?node-id=408%3A1008&mode=dev

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Deployment](#deployment)
  - [Deploying to Vercel](#deploying-to-vercel)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Installation

To get started with the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/aswinzz/hawk-ui/
   ```

2. Navigate to the project directory:

    ```bash
    cd hawk-ui
    ```

3. Install the project dependencies:

    ```bash
    npm install
    ```

4. Usage
    
    To run the UI, use the following command:
    ```bash
    npm start
    ```


    To run the Storybook locally and view your components, use the following command:

    ```bash
    npm run storybook
    ```

5. This will start the development server, 

    you can access the UI in your browser at http://localhost:3000

    you can access the Storybook in your browser at http://localhost:6006




### Adding a Component
To add new component do the following:

1. Create a new component file in the components directory with folder name as the component name.
2. There should be 3 files, `ComponentName.tsx`, `ComponentName.module.scss` & `index.tsx`
3. Create a corresponding story file (e.g., ComponentName.stories.tsx) in the `stories` directory.
4. Verify your component properties & behavior using story book




### Deployment
Deploying to Vercel
- UI Code is automatically deployed to Vercel on every merge to `main` branch. Live at https://hawk-ui.vercel.app
- Your Storybook can be easily deployed to Vercel. Live at https://hawk-storybook.vercel.app/

#### Follow these steps:

1. Build the Storybook for production:

    ```bash
    npm run build-storybook
    ```

2. Install the Vercel CLI and log in to your Vercel account if you haven't already (see Vercel CLI Installation).

    Deploy the Storybook to Vercel:

    ```bash
    vercel
    ```

3. Follow the deployment prompts and confirm the deployment.

4. Access your deployed Storybook at the provided URL.


### Contributing
Contributions are welcome! Please follow our Contributing Guidelines to get started.

### License
This project is licensed under the MIT License.
