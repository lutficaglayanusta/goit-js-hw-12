# goit-js-hw-12

A simple image search application using the Pixabay API. Users can search for images, view results in a responsive gallery, and load more results with pagination. Built with vanilla JavaScript, Vite, and modern UI libraries.

## Features

- Search for images by keyword using the Pixabay API
- Responsive image gallery with lightbox preview
- Pagination with "Load more" button
- Loading spinner and user-friendly notifications (using iziToast)
- Error handling for empty queries and API errors

## Project Structure

```
.
├── .editorconfig
├── .gitignore
├── .prettierrc.json
├── package.json
├── vite.config.js
├── README.md
├── assets/
│   └── [project screenshots & diagrams]
├── src/
│   ├── index.html
│   ├── main.js
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── pixabay-api.js
│       └── render-functions.js
└── .github/
    └── workflows/
        └── deploy.yml
```

- **src/index.html**: Main HTML file.
- **src/main.js**: App entry point, handles search logic and UI events.
- **src/js/pixabay-api.js**: Handles API requests to Pixabay.
- **src/js/render-functions.js**: Renders images, manages loader and button visibility.
- **src/css/style.css**: Styles for the app.
- **assets/**: Images and diagrams for documentation.
- **.github/workflows/deploy.yml**: GitHub Actions workflow for deployment.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/goit-js-hw-12.git
   cd goit-js-hw-12
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server with hot reload:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build the project for production:
```sh
npm run build
```
The output will be in the `dist/` directory.

### Deployment

This project uses GitHub Actions to deploy to GitHub Pages. On every push to the `main` branch, the workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will build and deploy the site.

## Usage

1. Enter a search term in the input field and click "Search".
2. Browse the image results in the gallery.
3. Click "Load more" to fetch additional images.
4. Click on an image to view it in a lightbox.

## Dependencies

- [axios](https://github.com/axios/axios)
- [simplelightbox](https://simplelightbox.com/)
- [izitoast](https://izitoast.marcelodolza.com/)
- [vite](https://vitejs.dev/)

