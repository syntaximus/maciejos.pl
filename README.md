# Portfolio maciejos.pl

## Introduction

This is the source code of the web application https://maciejos.pl, which serves as my portfolio. Here, you will find information on how to build and run this application.

## Table of Contents

1. [Run Locally](#run-locally)
2. [Run as a Docker Container](#run-as-a-docker-container)

## Run Locally

To run this application locally on your computer, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/syntaximus/maciejos.pl.git
   ```

2. Navigate to the project directory:

   ```bash
   cd maciejos.pl
   ```

3. Install dependencies using yarn (make sure you have yarn installed):

   ```bash
   yarn install
   ```

4. Now, you can start the project with the following command:

   ```bash
   yarn start
   ```

The application will be accessible at http://localhost:3000.

## Run as a Docker Container

To deploy this application as a Docker container, you can make use of the provided [Dockerfile](https://github.com/syntaximus/maciejos.pl/blob/master/Dockerfile) (configured for a production environment). Ensure that Docker is installed on the machine where you are running these instructions. Here are the steps to follow:

1. Navigate to the directory containing the Dockerfile:

   ```bash
   cd maciejos.pl
   ```

2. Build the Docker image:

   ```bash
   docker build -t macietos-pl:latest .
   ```

3. Run the container on an available port (in this example, we run it on port 8080):
   ```bash
   docker run -d -p 8080:80 macietos-pl:latest
   ```

The application will be accessible at http://localhost:8080.
