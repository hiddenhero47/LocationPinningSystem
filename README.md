# Project Setup Guide

This guide will help you get started with the project based on your operating system.

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Git

## Installation Steps

### Windows

1. Clone the repository
```
git clone git@github.com:hiddenhero47/LocationPinningSystem.git
```

2. Install dependencies for backend
```
cd backend
npm install
```

3. Start the development server for backend
```
cd backend
npm run serve
```

4. Install dependencies for frontend
```
cd frontend
npm install
```

5. Start the development server for frontend
```
cd frontend
npm run dev
```

### macOS/Linux

1. Clone the repository
```
git clone git@github.com:hiddenhero47/LocationPinningSystem.git
```

2. Install dependencies for backend
```
cd backend
npm install
```

3. Start the development server for backend
```
cd backend
npm run serve
```

4. Install dependencies for frontend
```
cd frontend
npm install
```

5. Start the development server for frontend
```
cd frontend
npm run dev
```

### Using Docker

If you prefer using Docker, follow these steps:

1. Build the Docker image
```
docker build -t yourproject .
```

2. Run the container
```
docker run -p 3000:3000 yourproject
```

## Environment Setup

1. Copy the example environment file
```
cp .env.example .env
```

2. Update the `.env` file with your configuration

## Troubleshooting

### Windows
- If you encounter EACCES errors, run PowerShell as Administrator
- Make sure you have Windows Build Tools installed:

```bash
npm install --global windows-build-tools
```

### macOS
- If you encounter permission issues:
```bash
sudo chown -R $USER /usr/local/lib/node_modules
```

### Linux
- If you encounter permission issues:
```bash
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
```

## Additional Resources

- [Documentation](link-to-docs)
- [Contributing Guidelines](link-to-contributing)
- [Issue Tracker](link-to-issues)

## Support

If you encounter any issues, please:
1. Check the troubleshooting section above
2. Search existing issues in the issue tracker
3. Create a new issue if your problem isn't already reported

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
