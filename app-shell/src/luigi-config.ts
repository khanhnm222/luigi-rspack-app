export const luigiConfig = {
  navigation: {
    nodes: [
      {
        pathSegment: 'products',
        label: 'Product Management',
        viewUrl: 'http://localhost:3001',
        icon: 'cart'
      }
    ]
  },

  routing: {
    useHashRouting: true
  },

  settings: {
    securityPolicy: {
      defaultSrc: ["'self'"],
      connectSrc: [
        "'self'",
        "http://localhost:3000",
        "http://localhost:3001",
        "ws://localhost:3000",
        "ws://localhost:3001"
      ],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
      fontSrc: ["'self'", "data:"]
    }
  }
};
