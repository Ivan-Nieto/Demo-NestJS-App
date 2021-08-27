FROM node:12-alpine
EXPOSE 3000

# Install AWS CLI
RUN apk add python3 
RUN pip3 --no-cache-dir install --upgrade awscli

    
# Create work directory
WORKDIR /usr/src/app

# Install runtime dependencies (comment out if yarn is already installed)
# RUN npm install yarn -g

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN npm install

# Build and run the app
CMD npm run start:docker