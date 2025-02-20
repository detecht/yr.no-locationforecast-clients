#!/bin/bash

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "jq could not be found. Please install it."
    exit 1
fi

# Check if wget is installed
if ! command -v wget &> /dev/null; then
    echo "wget could not be found. Please install it."
    exit 1
fi

# Fetching Swagger definition from met.no
echo "Fetching Swagger definition from met.no"
if ! wget -O swagger.json https://api.met.no/weatherapi/locationforecast/2.0/swagger; then
    echo "Failed to download the Swagger file. Aborting."
    exit 1
fi

# Adding production host to Swagger definition
echo "Adding production host to Swagger definition"
if ! jq -r '.host = "api.met.no"' swagger.json > swagger.json.tmp; then
    rm swagger.json.tmp
    echo "Failed to update the Swagger file. Aborting."
    exit 1
fi
mv swagger.json.tmp swagger.json

echo "Done!"