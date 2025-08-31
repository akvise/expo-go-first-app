.PHONY: tunnel stop clean install status help

# Default target
help:
	@echo "Available commands:"
	@echo "  make tunnel  - Start Expo development server with tunnel"
	@echo "  make stop    - Stop all running Expo processes"
	@echo "  make clean   - Stop processes and clean cache"
	@echo "  make install - Install npm dependencies"
	@echo "  make status  - Show running Expo processes"
	@echo "  make help    - Show this help message"

# Start Expo tunnel for iPhone development
tunnel:
	@echo "Starting Expo tunnel for iPhone development..."
	@echo "QR code will appear below - scan with iPhone camera or Expo Go app"
	@echo "Press Ctrl+C to stop the server"
	@npx expo install @expo/ngrok 2>/dev/null || true
	@npx expo start --tunnel

# Stop all Expo processes
stop:
	@echo "Stopping Expo development servers..."
	@pkill -f "expo start" || echo "No Expo processes found"
	@pkill -f "ngrok" || echo "No ngrok processes found"
	@echo "All Expo processes stopped"

# Clean cache and restart
clean: stop
	@echo "Cleaning Expo cache..."
	@npx expo start --clear || true
	@echo "Cache cleared"

# Install dependencies
install:
	@echo "Installing npm dependencies..."
	@npm install
	@echo "Dependencies installed"

# Show running processes
status:
	@echo "Checking for running Expo processes..."
	@pgrep -fl "expo start" || echo "No Expo development servers running"
	@pgrep -fl "ngrok" || echo "No ngrok tunnels running"