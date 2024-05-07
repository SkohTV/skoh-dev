FROM php:8.3-apache

# Add composer
ENV COMPOSER_ALLOW_SUPERUSER=1
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer --version

# Copy conf
COPY conf/apache2.conf /etc/apache2/apache2.conf
COPY conf/vhost.conf /etc/apache2/sites-available/vhost.conf
RUN a2ensite vhost

# Add php modules & conf
# RUN docker-php-ext-install -j$(nproc) opcache pdo_mysql

COPY public/ /var/www/html/

EXPOSE 5002
