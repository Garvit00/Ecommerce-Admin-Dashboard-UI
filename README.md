# Admin Dashboard for Product Management

This is an Admin Dashboard application. The app provides analytics on the products, such as total products, average price, and average rating. It is designed to be used by an admin user to manage the product catalog.

## Features Implemented

- **Admin Authentication:**
  - Admin users are authenticated via context. If the user is not an admin, they will be redirected to the login page.

- **Product Analytics:**
  - Displays statistics such as:
    - Total number of products
    - Average price of products
    - Average rating of products
    - Price range (minimum and maximum prices)

- **Responsive Design:**
  - The dashboard is designed to be mobile-responsive, with a user-friendly interface on both desktop and mobile devices.

## Setup Instructions

### Prerequisites:
- Node.js (version >= 14.x)
- npm

### Steps to Run the Application Locally:

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install dependencies:**  
    ```bash
    npm install

3. **Run the development server:**
    If you're using npm:
    ```bash
    npm run dev

4. **Open the browser:**  
   Navigate to `http://localhost:3000` to access the app.

5. **Credentials:**
   - email: admin@gmail.com
   - password: 12345

## Technologies Used
- Frontend Framework: Next.js (for server-side rendering and routing capabilities)

- State Management: React Context (for authentication state management)

- Styling: Tailwind CSS (for utility-first styling)

## Technical Decisions Made
- Frontend Framework: Next.js was chosen for its SSR and routing features, which allow for faster rendering and easier scaling.

- State Management: React Context was used to handle authentication state and product data.

- Component Library: Tailwind CSS was used for a flexible and responsive design, allowing for fast styling.

- Routing: Next.js’s routing system is used for easy navigation between different views.

## Challenges Faced and Solutions

### Managing Admin Authentication:

- Challenge: Ensuring that only an admin can access the dashboard and product management features without backend authentication.

- Solution: React Context was used to manage the authentication state, and an admin check was added to ensure the user is authorized to view the dashboard.

## Responsive Layout:

- Challenge: Making the product dashboard and forms responsive across devices.

- Solution: Tailwind CSS's grid system and utility classes were used to create a responsive layout that adapts to different screen sizes.

## UI/UX for Adding/Editing Products:

- Challenge: Designing an interface for managing products that is simple and user-friendly.

- Solution: Modal dialogs were used to add and edit products, keeping the interface clean and preventing clutter on the main dashboard.

