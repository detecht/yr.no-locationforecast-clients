#!/bin/bash

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm could not be found. Please install it."
    exit 1
fi

# Generate OpenAPI client code using openapi-generator-cli
echo "Generating OpenAPI client code"
if ! npx @openapitools/openapi-generator-cli generate; then
    echo "Failed to generate OpenAPI client code. Aborting."
    exit 1
fi