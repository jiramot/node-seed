# Seed project for nodejs with mongo and redis for cache

# How to start
```
npm install
npm start
```

# How to test
```
npm test
```

# File structure
```
├── Dockerfile                # Dockerfile
├── README.md
├── app
│   ├── controllers
│   │   └── test.js           # Test controllers
│   ├── models                # Test models
│   │   └── test.js
│   └── views
├── app.js
├── config
│   ├── config.js
│   ├── env
│   │   ├── development.js    # Environment for dev
│   │   ├── docker.js         # Environment for dev in docker
│   │   ├── env.json          # Environment for common
│   │   ├── production.js     # Environment for production
│   │   ├── staging.js        # Environment for staging
│   │   └── test.js           # Environment for test
│   ├── express.js
│   ├── logger.js
│   ├── middlewares
│   └── routes.js             # Edit routing file for map url with controller
├── package.json
├── test                      # Test
│   ├── integration
│   │   └── controllers   
│   ├── unit
│   └── utils
└── test-results
```
