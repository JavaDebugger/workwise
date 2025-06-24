# DevContainer Configuration

This directory contains the development container configuration for the WorkWise SA project.

## Recent Fix Applied

**Issue**: Container build was failing due to an inaccessible Firebase CLI feature from GitHub Container Registry.

**Error**: 
```
Could not resolve Feature manifest for 'ghcr.io/devcontainers/features/firebase-cli:1'
```

**Solution**: 
- Removed the problematic `ghcr.io/devcontainers/features/firebase-cli:1` feature from `devcontainer.json`
- Firebase CLI is now installed directly in the Dockerfile and via `postCreateCommand`
- This ensures a more reliable installation process

## Configuration Details

### Features Used
- `ghcr.io/devcontainers/features/docker-in-docker:2` - Docker support within the container
- `ghcr.io/devcontainers/features/git:1` - Git tools

### Ports Forwarded
- 5000, 5001 - Firebase hosting and functions
- 8080 - Development server
- 9099, 9199 - Firebase emulators

### Post-Creation Commands
- Installs latest Firebase CLI globally
- Installs dependencies in the functions directory

## Troubleshooting

### If container build fails:
1. Check Docker is running: `docker --version`
2. Clean up old containers: `docker system prune -a`
3. Rebuild container from VS Code Command Palette: "Dev Containers: Rebuild Container"

### If Firebase CLI is missing:
The Firebase CLI is installed via multiple methods for redundancy:
- In Dockerfile: `npm install -g firebase-tools`
- In postCreateCommand: `npm install -g firebase-tools@latest`

### Common Issues:
- **Network connectivity**: Ensure internet access for downloading base images and packages
- **Docker permissions**: Make sure your user has Docker permissions
- **Disk space**: Ensure sufficient disk space for container images (~2.3GB)

## Manual Container Build (if needed)

```bash
# Build the container manually
docker build -t workwise-sa-dev .devcontainer/

# Run the container
docker run -it --rm -v $(pwd):/workspaces/workwise-sa workwise-sa-dev
