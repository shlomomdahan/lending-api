# Creating the README.md file with the provided content

readme_content = """

# Gynger Lending API

This is the Gynger Lending API built with Node.js and PostgreSQL. Follow the instructions below to set up the project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Configuration](#configuration)
- [Starting the Server](#starting-the-server)

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

### PostgreSQL Installation

#### Mac

1. Install PostgreSQL using Homebrew:

   ```sh
   brew install postgresql
   ```

2. Start PostgreSQL service:

   ```sh
   brew services start postgresql
   ```

3. Verify PostgreSQL installation:
   ```sh
   psql --version
   ```

#### Windows

1. Download and install PostgreSQL from [here](https://www.postgresql.org/download/windows/).

2. During installation, ensure you set a password for the `postgres` user and remember it.

3. Add PostgreSQL's bin directory to your system PATH.

4. Verify PostgreSQL installation:
   ```sh
   psql --version
   ```

#### Linux

1. Update package lists and install PostgreSQL:

   ```sh
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   ```

2. Start PostgreSQL service:

   ```sh
   sudo systemctl start postgresql
   ```

3. Enable PostgreSQL to start on boot:

   ```sh
   sudo systemctl enable postgresql
   ```

4. Verify PostgreSQL installation:
   ```sh
   psql --version
   ```

### Node.js Project Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Database Setup

1. **Ensure PostgreSQL service is running:**

   Make sure PostgreSQL service is running. If not, start the service using the appropriate command for your operating system:

   - **Mac:**
     ```sh
     brew services start postgresql
     ```
   - **Windows:**
     Start the PostgreSQL service from the Services management console.
   - **Linux:**
     ```sh
     sudo systemctl start postgresql
     ```

2. **Create the `gynger_lending` database:**
   ```sh
   createdb gynger_lending
   ```
