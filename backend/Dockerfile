FROM microsoft/dotnet AS build-env
WORKDIR /app

# Copy everything .dockerignore ignores the rest of the files
COPY . ./

# Restore files from the Api folder which affects all other folders
WORKDIR /app/Api
RUN dotnet restore

# Build production files
RUN dotnet publish -c Release -o out

#Revert back to the default directory
WORKDIR /app

# Build runtime image
FROM microsoft/dotnet:aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/Api/out .
ENTRYPOINT [ "dotnet","Api.dll"  ]