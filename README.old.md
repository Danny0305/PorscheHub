porsche-rating-site/
├── public/
│   ├── index.html        # Root HTML file
│   └── assets/           # Static assets like images, fonts, icons
├── src/
│   ├── api/              # API calls (fetch or axios for handling data)
│   │   └── carData.js    # Porsche car data fetching functions
│   ├── components/       # Reusable components for the site
│   │   ├── header.js     # Header component
│   │   ├── footer.js     # Footer component
│   │   ├── carCard.js    # Component for individual car display
│   │   └── ratingForm.js # Component for user rating submission
│   ├── pages/            # Full page components (i.e., each route)
│   │   ├── homePage.js   # Home page for listing cars and ratings
│   │   ├── carDetails.js # Detailed page for a specific car
│   │   └── notFound.js   # 404 error page
│   ├── context/          # Context API (optional, for global state)
│   ├── hooks/            # Custom hooks (optional, for reusable logic)
│   ├── utils/            # Utility functions like formatting or validation
│   ├── App.js            # Main app component that routes between pages
│   ├── index.js          # Entry point for the React app
│   └── styles/           # CSS or SCSS for styling components
│       ├── variables.css # Global CSS variables (colors, fonts)
│       ├── global.css    # Global styles
│       └── components/   # Component-specific styles (optional)
├── .gitignore            # Git ignore file
├── package.json          # npm dependencies and scripts
├── README.md             # Project documentation
└── webpack.config.js     # Webpack configuration (if you're customizing)
