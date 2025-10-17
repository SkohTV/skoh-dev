FROM nginx:alpine

WORKDIR /www/data

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY img/ src/ index.html .

EXPOSE 3943
