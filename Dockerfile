FROM nginx:1.21.6-alpine
COPY dist /opt/app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
